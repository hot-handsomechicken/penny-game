import * as THREE from 'three';
import './style.css';
import './combat.css';
import './responsive.css';
import './settings.css';
import {AudioSystem} from './audio.js';
import {
  HERO_HEIGHT,
  HERO_RADIUS,
  intersectsBody,
  overlapsHorizontal,
  overlapsVertical,
  resolveVerticalSweep,
} from './collision.js';
import {
  HUNTER_STRIKE_RANGE,
  advanceHunterBrain,
  comboDamage,
  resetHunterBrain,
  stunHunter,
} from './hunter-ai.js';

const game=document.querySelector('#game');
const mobileDevice=matchMedia('(pointer:coarse)').matches||innerWidth<700,defaultLowPower=mobileDevice||(navigator.deviceMemory&&navigator.deviceMemory<=4);let activeLowPower=defaultLowPower;
const audio=new AudioSystem();
const renderer=new THREE.WebGLRenderer({antialias:false,powerPreference:'high-performance'});
renderer.setPixelRatio(Math.min(devicePixelRatio,activeLowPower?1:1.5));renderer.setSize(innerWidth,innerHeight);
renderer.shadowMap.enabled=!activeLowPower;renderer.shadowMap.type=THREE.PCFSoftShadowMap;
renderer.outputColorSpace=THREE.SRGBColorSpace;renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.05;
game.appendChild(renderer.domElement);
const scene=new THREE.Scene();scene.background=new THREE.Color(0x18252b);scene.fog=new THREE.Fog(0x18252b,34,78);
const camera=new THREE.PerspectiveCamera(58,innerWidth/innerHeight,.1,130);
scene.add(new THREE.HemisphereLight(0xaac4bd,0x11181d,1.25));
const moon=new THREE.DirectionalLight(0xc8dcdf,2.2);moon.position.set(-12,18,-8);moon.castShadow=!activeLowPower;moon.shadow.mapSize.set(activeLowPower?512:2048,activeLowPower?512:2048);moon.shadow.camera.left=-18;moon.shadow.camera.right=18;moon.shadow.camera.top=24;moon.shadow.camera.bottom=-6;scene.add(moon);

function pixelTexture(type,base,accent){
  const c=document.createElement('canvas');c.width=c.height=32;const q=c.getContext('2d');q.imageSmoothingEnabled=false;q.fillStyle=base;q.fillRect(0,0,32,32);
  let seed=type.length*997;const rnd=()=>((seed=(seed*1664525+1013904223)>>>0)/4294967296);
  if(type==='brick'){q.strokeStyle=accent;q.lineWidth=2;for(let y=0;y<=32;y+=8){q.beginPath();q.moveTo(0,y);q.lineTo(32,y);q.stroke();for(let x=(y/8)%2?0:8;x<32;x+=16){q.beginPath();q.moveTo(x,y);q.lineTo(x,y+8);q.stroke()}}}
  if(type==='tile'){q.strokeStyle=accent;q.lineWidth=1;for(let x=0;x<33;x+=8){q.beginPath();q.moveTo(x,0);q.lineTo(x,32);q.stroke()}for(let y=0;y<33;y+=8){q.beginPath();q.moveTo(0,y);q.lineTo(32,y);q.stroke()}}
  if(type==='metal'){q.fillStyle=accent;for(let x of [2,28])for(let y of [2,28])q.fillRect(x,y,2,2);q.fillStyle='#ffffff18';q.fillRect(0,4,32,2);q.fillRect(0,19,32,1)}
  if(type==='stripe'){q.fillStyle=accent;for(let x=-32;x<64;x+=12){q.beginPath();q.moveTo(x,32);q.lineTo(x+8,32);q.lineTo(x+40,0);q.lineTo(x+32,0);q.fill()}}
  if(type==='crate'){q.strokeStyle=accent;q.lineWidth=3;q.strokeRect(2,2,28,28);q.beginPath();q.moveTo(3,3);q.lineTo(29,29);q.moveTo(29,3);q.lineTo(3,29);q.stroke()}
  for(let i=0;i<36;i++){q.fillStyle=rnd()>.5?'#ffffff10':'#00000012';const s=rnd()>.85?2:1;q.fillRect(Math.floor(rnd()*32),Math.floor(rnd()*32),s,s)}
  const t=new THREE.CanvasTexture(c);t.magFilter=THREE.NearestFilter;t.minFilter=THREE.NearestMipmapLinearFilter;t.colorSpace=THREE.SRGBColorSpace;return t;
}
const material=(type,base,accent,emissive=0)=>new THREE.MeshStandardMaterial({map:pixelTexture(type,base,accent),roughness:.88,metalness:type==='metal'?.55:.05,emissive:emissive||0x000000,emissiveIntensity:emissive?1.35:0});
const M={brick:material('brick','#47545a','#2c353a'),brickDark:material('brick','#303b40','#1c2529'),floor:material('tile','#7c817b','#606661'),floorDark:material('tile','#4d5858','#343e40'),metal:material('metal','#55636a','#1e282d'),rust:material('metal','#754932','#34251f'),bar:material('metal','#273238','#7f8e91'),orange:material('stripe','#d66f1c','#f09b35'),hazard:material('stripe','#191d20','#d88b18',0x6c2200),toxic:material('tile','#405f26','#99d135',0x315d09),water:material('tile','#173e42','#247d77',0x073132),crate:material('crate','#82552d','#4b301c'),green:material('metal','#719a29','#d0ff63',0x5d950d),greenOff:material('metal','#3e4c42','#1d2622'),red:material('stripe','#8e281e','#e96a36',0x7e1008),white:material('tile','#b9bdac','#83897e'),black:material('metal','#171d20','#485359'),skin:new THREE.MeshStandardMaterial({color:0xd79a70,roughness:1}),hair:new THREE.MeshStandardMaterial({color:0x291c17,roughness:1})};

const world=new THREE.Group();scene.add(world);const solids=[],hazards=[],movers=[],checkpoints=[],lamps=[];
function box(x,y,z,w,h,d,m=M.brick,solid=false,shadow=true,parent=world){const o=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),m);o.position.set(x,y,z);o.castShadow=shadow;o.receiveShadow=true;parent.add(o);if(solid)solids.push(o);return o}
function danger(x,y,z,w,h,d,m=M.red){const o=box(x,y,z,w,h,d,m,false,true);hazards.push(o);return o}
function textSprite(text,x,y,z,scale=1,color='#e8e8d8',parent=world){const c=document.createElement('canvas');c.width=512;c.height=128;const q=c.getContext('2d');q.imageSmoothingEnabled=false;q.fillStyle='#10171dcc';q.fillRect(8,20,496,88);q.strokeStyle='#87938e';q.lineWidth=5;q.strokeRect(8,20,496,88);q.fillStyle=color;q.font='900 42px monospace';q.textAlign='center';q.textBaseline='middle';q.fillText(text,256,64);const s=new THREE.Sprite(new THREE.SpriteMaterial({map:new THREE.CanvasTexture(c),transparent:true}));s.position.set(x,y,z);s.scale.set(6.4*scale,1.6*scale,1);parent.add(s);return s}
function bars(x,z,side=1,len=6){for(let dz=-len/2;dz<=len/2;dz+=1)box(x,2.1,z+dz,.13,4.2,.13,M.bar,false,false);box(x,4.05,z,.18,.18,len+.5,M.bar);box(x,.15,z,.18,.18,len+.5,M.bar)}
function pipe(x,y,z,len,axis='z',m=M.rust){const dims=axis==='z'?[.34,.34,len]:axis==='x'?[len,.34,.34]:[.34,len,.34];box(x,y,z,...dims,m);for(let k=-1;k<=1;k+=2){const p=axis==='z'?[x,y,z+k*len/2]:axis==='x'?[x+k*len/2,y,z]:[x,y+k*len/2,z];box(...p,.52,.52,.28,m)}}
function lamp(x,z){box(x,5.3,z,2.2,.18,.8,M.metal);const glow=box(x,5.15,z,1.55,.08,.45,new THREE.MeshStandardMaterial({color:0xffd47a,emissive:0xffb02e,emissiveIntensity:2}));lamps.push(glow);const l=new THREE.PointLight(0xffc56b,9,14,2);l.position.set(x,4.8,z);world.add(l)}
function bunk(x,z,flip=1){box(x,.52,z,2.5,.18,1.1,M.metal);box(x,2.05,z,2.5,.18,1.1,M.metal);for(let dx of [-1.1,1.1])box(x+dx,.95,z,.13,2.9,.13,M.bar);box(x,.66,z,2.2,.22,.9,M.white);box(x,2.2,z,2.2,.22,.9,M.white);box(x+flip*.7,.86,z,52/100,.18,.65,M.brickDark)}
function sector(i,floor=M.floor,walls=M.brick,open=false){const z=i*30+15;box(0,-.35,z,15,.7,30,floor,true);if(!open){box(-7.5,3,z,.6,6,30,walls,true);box(7.5,3,z,.6,6,30,walls,true);box(0,5.8,z,15,.35,30,M.brickDark,false)}else{box(-7.5,1,z,.5,2,30,walls,true);box(7.5,1,z,.5,2,30,walls,true)}for(let dz=-12;dz<=12;dz+=6){box(0,5.55,z+dz,15,.35,.35,M.metal);if(!open&&dz%12===0)lamp(0,z+dz)}}
const stageNames=['牢房区 · 01','洗衣封锁区 · 02','地下排污渠 · 03','锅炉房 · 04','安检走廊 · 05','监狱厨房 · 06','通风管道 · 07','放风操场 · 08','警戒屋顶 · 09','撤离点 · 10'];
const missions=['翻过牢房警戒线','避开横冲直撞的洗衣车','踩着浮箱越过污水渠','躲开旋转的高温管道','穿过交错的安检闸门','跳过灼热炉台','沿维修踏板爬出风管','穿过带刺封锁区','避开屋顶排风扇','抵达直升机撤离点'];
[M.floor,M.floorDark,M.floorDark,M.floorDark,M.floor,M.floor,M.metal,M.floorDark,M.black,M.black].forEach((f,i)=>sector(i,f,i>6?M.brickDark:M.brick,i>=7));

// 牢房区：床铺、栏杆和低位警戒线
for(let z of [7,14,21]){bars(-6.7,z,1,5);bars(6.7,z,-1,5);bunk(-5.25,z,-1);bunk(5.25,z,1)}
for(let z of [9,16,23])danger(0,.58,z,13,.22,.28,M.red);
textSprite('CELL BLOCK A',0,4.3,5,.8,'#ffb140');

// 洗衣封锁区：机器、篮筐、来回移动的推车
for(let z=35;z<57;z+=5){for(let x of [-6.3,6.3]){box(x,1.2,z,1.6,2.4,1.6,M.white);const door=new THREE.Mesh(new THREE.CylinderGeometry(.5,.5,.12,12),M.black);door.rotation.x=Math.PI/2;door.position.set(x,1.2,z+(x<0?.86:-.86));world.add(door)}}
for(let k=0;k<4;k++){const o=danger(k%2?-5:5,.55,38+k*5,2.5,1.1,1.5,M.orange);o.userData={move:'x',base:o.position.x,amp:8.3,speed:1.05+k*.08,phase:k*1.4};movers.push(o)}

// 地下排污渠：污水与漂浮木箱
danger(0,.03,75,14,.15,22,M.toxic);pipe(-6.7,2.6,75,24,'z',M.rust);pipe(6.7,1.3,75,24,'z',M.metal);
const sewerRoute=[[-2.4,-9],[0,-5],[2.4,-1],[0,3],[-2.4,7],[0,10]];sewerRoute.forEach(([x,d],k)=>box(x,.32,75+d,2.7,.65,2.5,k%2?M.crate:M.metal,true));

// 锅炉房：锅炉和旋转蒸汽管
for(let z of [95,108])for(let x of [-5.8,5.8]){box(x,1.6,z,2.1,3.2,3.2,M.rust);pipe(x,3.4,z,2.5,'y',M.rust)}
for(let k=0;k<3;k++){const pivot=new THREE.Group();pivot.position.set(0,.55,96+k*7);world.add(pivot);const arm=box(0,0,0,12,.32,.4,M.hazard,false,true,pivot);hazards.push(arm);pivot.userData={rotate:true,speed:1.15+k*.28};movers.push(pivot)}

// 安检走廊：交错的钢闸
for(let k=0;k<5;k++){const z=126+k*5,gap=k%2?-4.6:4.6;box(0,4.3,z,14,.5,.65,M.metal);for(let x=-5.5;x<=5.5;x+=1.55)if(Math.abs(x-gap)>1.2)danger(x,1.85,z,.52,3.7,.52,M.red)}

// 厨房：操作台、热炉与跳板
for(let z of [157,164,171])for(let x of [-5.7,5.7])box(x,1,z,2.6,2,3.3,M.metal,true);
danger(0,.06,165,13,.16,20,M.red);[-8,-4,0,4,8].forEach((d,k)=>box(k%2?1.6:-1.6,.35,165+d,3.3,.7,2.6,M.white,true));

// 通风管：狭窄维修踏板与风扇
for(let z=185,k=0;z<207;z+=4,k++){box(k%2?1.35:-1.35,.25+(z-185)*.045,z,3.2,.5,2.6,M.metal,true);pipe(-6.6,3,z,8,'z',M.metal)}
for(let k=0;k<2;k++){const pivot=new THREE.Group();pivot.position.set(0,1.3,190+k*12);world.add(pivot);for(let a=0;a<4;a++){const blade=danger(0,0,0,5.5,.24,.55,M.black);blade.rotation.y=a*Math.PI/2;pivot.add(blade)}pivot.userData={rotate:true,speed:2.1};movers.push(pivot)}

// 放风操场：围栏、探照灯、带刺路障
for(let z=215;z<237;z+=3.5){bars(-7.1,z,1,3);bars(7.1,z,-1,3)}
for(let k=0;k<16;k++){const x=-4.5+(k%4)*3,z=218+Math.floor(k/4)*5;const s=new THREE.Mesh(new THREE.ConeGeometry(.5,1.5,4),M.bar);s.position.set(x,.73,z);s.rotation.y=Math.PI/4;s.castShadow=true;world.add(s);hazards.push(s)}
box(-5.8,2.4,236,2.4,4.8,2.4,M.brickDark);box(5.8,2.4,236,2.4,4.8,2.4,M.brickDark);

// 警戒屋顶：移动排风机
for(let z=247;z<267;z+=5){box(-5.7,.75,z,2,1.5,2,M.metal);box(5.7,.75,z,2,1.5,2,M.metal)}
for(let k=0;k<4;k++){const o=danger(k%2?-5:5,.75,247+k*5,3,1.5,1.1,M.black);o.userData={move:'x',base:o.position.x,amp:8,speed:1.28,phase:k};movers.push(o)}

// 撤离区：警戒光栅和方块直升机
for(let k=0;k<4;k++){const o=danger(0,.55,278+k*5,11,.25,.32,M.red);o.userData={move:'y',base:.55,amp:1.65,speed:1.8,phase:k*.8};movers.push(o)}
const heli=new THREE.Group();heli.position.set(0,3.3,301);world.add(heli);box(0,0,0,5,2.2,3,M.black,false,true,heli);box(0,.8,-2.4,1.1,1,3.2,M.black,false,true,heli);box(0,1.5,0,10,.15,.28,M.bar,false,true,heli);box(0,.2,2.1,2.7,1.5,1.5,M.black,false,true,heli);textSprite('EVAC  →',0,5.1,297,.85,'#bfff4f');

// 实体检查点：底座、信标、旗杆、标题
function makeCheckpoint(i){const z=i*30+2,g=new THREE.Group();g.position.set(0,0,z);world.add(g);const pad=box(0,.08,0,4.8,.16,2.5,M.greenOff,false,true,g);const rim=box(0,.2,0,3.9,.18,1.75,M.greenOff,false,true,g);const beacon=box(-2.05,1.1,0,.42,2.1,.42,M.greenOff,false,true,g);box(-2.05,2.1,0,1.15,.12,.12,M.bar,false,true,g);const flag=box(-1.55,1.72,0,.9,.55,.08,M.greenOff,false,true,g);const marker=textSprite('CHECKPOINT',-4.25,2.55,.1,.38,'#bfff57',g);g.userData={pad,rim,beacon,flag,marker,index:i};checkpoints.push(g)}
for(let i=0;i<10;i++)makeCheckpoint(i);

// 方块囚犯角色：像素脸、囚服号码、鞋底
function faceMaterial(){const c=document.createElement('canvas');c.width=c.height=16;const q=c.getContext('2d');q.fillStyle='#d79a70';q.fillRect(0,0,16,16);q.fillStyle='#2b201c';q.fillRect(3,6,3,3);q.fillRect(10,6,3,3);q.fillRect(5,12,6,1);const t=new THREE.CanvasTexture(c);t.magFilter=THREE.NearestFilter;t.colorSpace=THREE.SRGBColorSpace;return new THREE.MeshStandardMaterial({map:t,roughness:1})}
function cube(w,h,d,m){const o=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),m);o.castShadow=true;return o}
const hero=new THREE.Group();scene.add(hero);const body=cube(1.05,1.2,.65,M.orange),head=cube(.82,.82,.78,[M.skin,M.skin,M.hair,M.skin,faceMaterial(),M.skin]),hair=cube(.86,.28,.81,M.hair),leg1=cube(.42,.72,.46,M.orange),leg2=cube(.42,.72,.46,M.orange),arm1=cube(.3,1.05,.36,M.skin),arm2=cube(.3,1.05,.36,M.skin),shoe1=cube(.44,.2,.58,M.black),shoe2=shoe1.clone();
body.position.y=1.25;head.position.y=2.27;hair.position.y=2.63;leg1.position.set(-.29,.45,0);leg2.position.set(.29,.45,0);arm1.position.set(-.72,1.3,0);arm2.position.set(.72,1.3,0);shoe1.position.set(-.29,.12,.08);shoe2.position.set(.29,.12,.08);hero.add(body,head,hair,leg1,leg2,arm1,arm2,shoe1,shoe2);

// 阿根廷蓝白 10 号“梅东”：深色短发与胡须的体素化追击者。
function medongFaceMaterial(){const c=document.createElement('canvas');c.width=c.height=16;const q=c.getContext('2d');q.fillStyle='#d79a70';q.fillRect(0,0,16,16);q.fillStyle='#35231d';q.fillRect(1,0,14,4);q.fillRect(2,4,2,2);q.fillRect(12,4,2,2);q.fillRect(3,7,3,2);q.fillRect(10,7,3,2);q.fillRect(2,10,2,3);q.fillRect(12,10,2,3);q.fillRect(4,12,8,3);q.fillStyle='#f2c29d';q.fillRect(7,9,2,2);q.fillStyle='#d9d7cb';q.fillRect(6,12,4,1);const t=new THREE.CanvasTexture(c);t.magFilter=THREE.NearestFilter;t.colorSpace=THREE.SRGBColorSpace;return new THREE.MeshStandardMaterial({map:t,roughness:1})}
function medongJerseyMaterial(back=false){const c=document.createElement('canvas');c.width=c.height=32;const q=c.getContext('2d');q.fillStyle='#f2f1e8';q.fillRect(0,0,32,32);q.fillStyle='#74c8ee';for(let x=0;x<32;x+=12)q.fillRect(x,0,7,32);q.fillStyle='#172d4f';q.fillRect(12,0,8,3);q.font=`900 ${back?18:12}px monospace`;q.textAlign='center';q.textBaseline='middle';q.fillText('10',16,back?18:20);q.fillStyle='#d7af37';q.fillRect(14,5,4,3);const t=new THREE.CanvasTexture(c);t.magFilter=THREE.NearestFilter;t.minFilter=THREE.NearestMipmapLinearFilter;t.colorSpace=THREE.SRGBColorSpace;return new THREE.MeshStandardMaterial({map:t,roughness:.9})}
const argentinaBlue=new THREE.MeshStandardMaterial({color:0x74c8ee,roughness:.9}),argentinaWhite=new THREE.MeshStandardMaterial({color:0xf2f1e8,roughness:.95}),argentinaNavy=new THREE.MeshStandardMaterial({color:0x162c50,roughness:.9}),medongHair=new THREE.MeshStandardMaterial({color:0x34231d,roughness:1}),medongFront=medongJerseyMaterial(),medongBack=medongJerseyMaterial(true),hunter=new THREE.Group();scene.add(hunter);
const hBody=cube(1.12,1.12,.7,[argentinaBlue,argentinaBlue,argentinaWhite,argentinaNavy,medongFront,medongBack]),hHead=cube(.86,.84,.8,[M.skin,M.skin,medongHair,M.skin,medongFaceMaterial(),M.skin]),hHair=cube(.88,.25,.82,medongHair),hShorts=cube(1.08,.38,.7,argentinaNavy),hLeg1=cube(.42,.7,.46,argentinaWhite),hLeg2=cube(.42,.7,.46,argentinaWhite),hArm1=cube(.31,.96,.37,M.skin),hArm2=cube(.31,.96,.37,M.skin),hShoe1=cube(.45,.2,.6,M.black),hShoe2=hShoe1.clone();
hBody.position.y=1.45;hHead.position.y=2.3;hHair.position.y=2.67;hShorts.position.y=.88;hLeg1.position.set(-.3,.47,0);hLeg2.position.set(.3,.47,0);hArm1.position.set(-.75,1.48,0);hArm2.position.set(.75,1.48,0);hShoe1.position.set(-.3,.12,.1);hShoe2.position.set(.3,.12,.1);hunter.add(hBody,hHead,hHair,hShorts,hLeg1,hLeg2,hArm1,hArm2,hShoe1,hShoe2);textSprite('★ 10  梅东',0,3.38,0,.38,'#8edcff',hunter);
const hunterWarning=new THREE.Mesh(new THREE.RingGeometry(.9,1.25,16),new THREE.MeshBasicMaterial({color:0xff3b24,transparent:true,opacity:.72,side:THREE.DoubleSide,depthWrite:false}));hunterWarning.rotation.x=-Math.PI/2;hunterWarning.position.y=.035;hunterWarning.visible=false;hunter.add(hunterWarning);hunter.visible=false;
const encounterStages=[1,3,6,8,9],lockGates=new Map(),invisible=new THREE.MeshBasicMaterial({transparent:true,opacity:0,depthWrite:false});
function makeLockGate(stage){const g=new THREE.Group();g.position.set(0,0,(stage+1)*30-1);world.add(g);for(let x=-6.2;x<=6.2;x+=1.15)box(x,2.2,0,.22,4.4,.22,M.bar,false,true,g);box(0,4.35,0,13.3,.35,.45,M.rust,false,true,g);const collider=box(0,2.2,0,13.4,4.4,.35,invisible,true,false,g);collider.userData.dynamicBounds=true;g.userData={collider,targetY:0,locked:true,stage};lockGates.set(stage,g)}
encounterStages.forEach(makeLockGate);

const boundsCache=new WeakMap(),stagePosition=new THREE.Vector3();
scene.updateMatrixWorld(true);
for(const object of [...solids,...hazards]){
  object.getWorldPosition(stagePosition);
  object.userData.stageIndex=THREE.MathUtils.clamp(Math.floor(stagePosition.z/30),0,9);
}
function objectBounds(object){
  let bounds=boundsCache.get(object);
  if(!bounds){bounds=new THREE.Box3();boundsCache.set(object,bounds)}
  const dynamic=object.userData.dynamicBounds||object.userData.move||object.parent?.userData.rotate;
  if(dynamic||!object.userData.boundsReady){bounds.setFromObject(object);object.userData.boundsReady=true}
  return bounds;
}

const state={started:false,won:false,paused:false,pauseStarted:0,wonTime:0,stage:0,start:0,checkpoint:new THREE.Vector3(0,.02,2),velocity:new THREE.Vector3(),grounded:true,coyote:.1,jumpBuffer:0,yaw:0,pitch:.48,cameraDistance:8,keys:{},last:0,attackCooldown:0,attackAnim:0,combo:0,comboTimer:0,invulnerable:0};
const hunterState={active:false,hp:100,maxHp:100,stage:-1,stun:0,mode:'idle',modeTimer:0,steerSign:1,hitFlash:0,lastUiMode:''};
const UP=new THREE.Vector3(0,1,0),viewForward=new THREE.Vector3(),viewRight=new THREE.Vector3(),moveDirection=new THREE.Vector3(),oldHeroPosition=new THREE.Vector3(),hunterDelta=new THREE.Vector3(),hunterSide=new THREE.Vector3(),hunterProbe=new THREE.Vector3(),attackDelta=new THREE.Vector3(),cameraTarget=new THREE.Vector3(),cameraOffset=new THREE.Vector3(),cameraDesired=new THREE.Vector3(),cameraDirection=new THREE.Vector3(),cameraCandidates=[];
let hunterSpawnTimer=0;
const stageEl=document.querySelector('#stage'),bar=document.querySelector('#bar'),missionEl=document.querySelector('#missionText'),toast=document.querySelector('#toast'),timeEl=document.querySelector('#time'),hunterHud=document.querySelector('#hunterHud'),hunterHp=document.querySelector('#hunterHp'),hunterHpText=document.querySelector('#hunterHpText'),hunterIntent=document.querySelector('#hunterIntent'),attackButton=document.querySelector('#attack'),pauseMenu=document.querySelector('#pauseMenu'),qualitySelect=document.querySelector('#quality'),fpsReadout=document.querySelector('#fpsReadout');
const QUALITY_KEY='block-break-quality-v1';let qualityMode='auto',autoDegraded=false;try{qualityMode=localStorage.getItem(QUALITY_KEY)||'auto'}catch{}if(!['auto','high','low'].includes(qualityMode))qualityMode='auto';
function applyQuality(mode=qualityMode,persist=true){qualityMode=mode;activeLowPower=mode==='low'||(mode==='auto'&&(defaultLowPower||autoDegraded));renderer.shadowMap.enabled=!activeLowPower;moon.castShadow=!activeLowPower;renderer.setPixelRatio(Math.min(devicePixelRatio,activeLowPower?1:1.5));renderer.setSize(innerWidth,innerHeight);qualitySelect.value=mode;document.body.dataset.renderQuality=activeLowPower?'low':'high';if(persist)try{localStorage.setItem(QUALITY_KEY,mode)}catch{}}
function lockGate(stage,on){const g=lockGates.get(stage);if(!g)return;g.userData.locked=on;g.userData.targetY=on?0:5.4;const idx=solids.indexOf(g.userData.collider);if(on&&idx<0)solids.push(g.userData.collider);if(!on&&idx>=0)solids.splice(idx,1)}
function setHunterBodyGlow(color,intensity=1){for(const mat of hBody.material){mat.emissive.setHex(color);mat.emissiveIntensity=intensity}}
function updateHunterHud(){hunterHp.style.width=`${Math.max(0,hunterState.hp/hunterState.maxHp*100)}%`;hunterHpText.textContent=`${Math.max(0,hunterState.hp)} / ${hunterState.maxHp}`}
function updateHunterIntent(force=false){if(!force&&hunterState.lastUiMode===hunterState.mode)return;hunterState.lastUiMode=hunterState.mode;hunterIntent.textContent={alert:'正在锁定目标',chase:'持续追击中',windup:'⚠ 即将发动冲撞',recovery:'攻击落空 · 短暂硬直',stunned:'受创后退',idle:'等待目标'}[hunterState.mode]||'持续追击中';hunterHud.classList.toggle('danger',hunterState.mode==='windup')}
function haptic(pattern){if(mobileDevice)navigator.vibrate?.(pattern)}
function spawnHunter(stage){hunterState.active=true;hunterState.stage=stage;hunterState.hp=hunterState.maxHp=stage===9?150:100;hunterState.hitFlash=0;hunterState.lastUiMode='';resetHunterBrain(hunterState);hunter.position.set(stage%2?4:-4,.02,stage*30+16);hunter.visible=true;hunterWarning.visible=false;lockGate(stage,true);hunterHud.classList.remove('hidden');attackButton.classList.remove('hidden');missionEl.textContent=stage===9?'击败梅东，登上直升机':'击败梅东，解除封锁';updateHunterHud();updateHunterIntent(true);announce('⚠ 梅东出现！');haptic([40,35,40])}
function defeatHunter(){hunterState.active=false;hunterState.mode='idle';hunter.visible=false;hunterWarning.visible=false;setHunterBodyGlow(0x000000);lockGate(hunterState.stage,false);hunterHud.classList.add('hidden');hunterHud.classList.remove('danger','hit');attackButton.classList.add('hidden');missionEl.textContent='封锁解除 · 前往下一个检查点';announce('✓ 梅东已被击退 · 封锁解除');beep(920,.28);haptic([30,40,70])}
function hunterBlocked(position){
  for(const solid of solids){
    if(Math.abs(solid.userData.stageIndex-hunterState.stage)>1)continue;
    const bounds=objectBounds(solid);
    if(overlapsHorizontal(position,bounds,.58)&&overlapsVertical(position,bounds,2.85))return true;
  }
  return false;
}
function moveHunter(direction,speed,dt){
  const step=speed*dt;hunterProbe.copy(hunter.position).addScaledVector(direction,step);
  if(!hunterBlocked(hunterProbe)){hunter.position.copy(hunterProbe);return}
  hunterSide.set(-direction.z,0,direction.x).multiplyScalar(hunterState.steerSign);hunterProbe.copy(hunter.position).addScaledVector(hunterSide,step*.9);
  if(!hunterBlocked(hunterProbe)){hunter.position.copy(hunterProbe);return}
  hunterState.steerSign*=-1;hunterSide.multiplyScalar(-1);hunterProbe.copy(hunter.position).addScaledVector(hunterSide,step*.9);
  if(!hunterBlocked(hunterProbe))hunter.position.copy(hunterProbe)
}
function doAttack(){
  if(!state.started||state.won||state.paused||state.attackCooldown>0)return;
  state.attackCooldown=.38;state.attackAnim=.24;attackButton.classList.add('cooldown');beep(250,.05);haptic(18);
  if(!hunterState.active)return;
  const delta=attackDelta.copy(hunter.position).sub(hero.position),distance=Math.hypot(delta.x,delta.z);
  if(distance>3.45){state.combo=0;state.comboTimer=0;announce('距离太远');return}
  delta.y=0;if(delta.lengthSq())hero.rotation.y=Math.atan2(delta.x,delta.z);
  state.combo=state.comboTimer>0?Math.min(3,state.combo+1):1;state.comboTimer=.95;
  const damage=comboDamage(state.combo);hunterState.hp-=damage;stunHunter(hunterState,.48+state.combo*.05);hunterState.hitFlash=.2;
  if(delta.lengthSq()){delta.normalize();hunter.position.addScaledVector(delta,.48+state.combo*.12);hero.position.addScaledVector(delta,.12)}
  const minZ=hunterState.stage*30+3,maxZ=(hunterState.stage+1)*30-3;hunter.position.x=THREE.MathUtils.clamp(hunter.position.x,-6.5,6.5);hunter.position.z=THREE.MathUtils.clamp(hunter.position.z,minZ,maxZ);
  updateHunterHud();updateHunterIntent(true);beep(500+state.combo*90,.09);haptic([20,25,35]);announce(`${state.combo>1?`${state.combo} 连击 · `:''}${damage} DAMAGE`);
  if(hunterState.hp<=0)defeatHunter()
}
function reset(full=false){
  if(full){
    if(hunterSpawnTimer){clearTimeout(hunterSpawnTimer);hunterSpawnTimer=0}
    state.stage=0;state.start=performance.now();state.checkpoint.set(0,.02,2);state.won=false;state.paused=false;state.invulnerable=0;pauseMenu.classList.add('hidden');state.yaw=0;state.pitch=.48;state.cameraDistance=8;
    hunterState.active=false;hunterState.mode='idle';hunter.visible=false;hunterWarning.visible=false;hunterHud.classList.add('hidden');hunterHud.classList.remove('danger','hit');attackButton.classList.add('hidden');lockGates.forEach((_,s)=>lockGate(s,true));document.querySelector('#win').classList.add('hidden');stageEl.textContent=stageNames[0];bar.style.width='10%';missionEl.textContent=missions[0];checkpoints.forEach((c,i)=>setCheckpoint(c,i===0))
  }else if(hunterState.active){
    hunterState.hp=hunterState.maxHp;hunterState.hitFlash=0;resetHunterBrain(hunterState,1);hunter.position.set(hunterState.stage%2?4:-4,.02,hunterState.stage*30+16);hunterWarning.visible=false;lockGate(hunterState.stage,true);updateHunterHud();updateHunterIntent(true)
  }
  hero.position.copy(state.checkpoint);hero.visible=true;state.velocity.set(0,0,0);state.grounded=true;state.coyote=.1;state.jumpBuffer=0;state.attackCooldown=0;state.attackAnim=0;state.combo=0;state.comboTimer=0;attackButton.classList.remove('cooldown')
}
function setCheckpoint(c,on){for(const k of ['pad','rim','beacon','flag'])c.userData[k].material=on?M.green:M.greenOff}
function beep(freq=440,duration=.09){audio.tone(freq,duration)}
function announce(s){toast.textContent=s;toast.classList.add('show');clearTimeout(announce.t);announce.t=setTimeout(()=>toast.classList.remove('show'),1200)}
function updateStage(i){if(i<=state.stage)return;state.stage=i;state.checkpoint.set(0,.02,i*30+2);stageEl.textContent=stageNames[i];bar.style.width=`${(i+1)*10}%`;missionEl.textContent=missions[i];checkpoints.forEach((c,k)=>setCheckpoint(c,k<=i));announce(`⚑ 检查点 ${i+1} 已激活`);beep(740,.15);haptic(45);if(encounterStages.includes(i)){if(hunterSpawnTimer)clearTimeout(hunterSpawnTimer);hunterSpawnTimer=setTimeout(()=>{hunterSpawnTimer=0;if(state.started&&!state.won&&state.stage===i)spawnHunter(i)},350)}}
function hit(obj,pad=.5){return intersectsBody(hero.position,objectBounds(obj),pad)}
function die(reason='被抓住了'){if(state.invulnerable>0)return;announce(`✖ ${reason} · 返回检查点`);beep(120,.24);haptic([90,50,90]);reset();state.invulnerable=1.15}
function format(sec){const m=Math.floor(sec/60).toString().padStart(2,'0'),s=Math.floor(sec%60).toString().padStart(2,'0');return `${m}:${s}`}
const BEST_KEY='block-break-best-v1',bestEl=document.querySelector('#bestTime');function readBest(){try{return Number(localStorage.getItem(BEST_KEY))||0}catch{return 0}}function showBest(){const best=readBest();bestEl.textContent=best?`最佳纪录 ${format(best)}`:'最佳纪录 --:--'}function saveBest(sec){const best=readBest();if(!best||sec<best){try{localStorage.setItem(BEST_KEY,String(sec))}catch{}announce('★ 新的最佳纪录！')}showBest()}
function setPaused(on){if(!state.started||state.won)return;if(on&&!state.paused){state.paused=true;state.pauseStarted=performance.now();pauseMenu.classList.remove('hidden');audio.pause()}else if(!on&&state.paused){state.start+=performance.now()-state.pauseStarted;state.paused=false;state.last=performance.now();pauseMenu.classList.add('hidden');audio.resume();announce('▶ 已继续游戏')}}
const perfState={frames:0,sampleStart:0,fps:60,lowSamples:0};
function tick(t){requestAnimationFrame(tick);const dt=Math.min((t-state.last)/1000||0,.035);state.last=t;
  if(state.started&&!state.won&&!state.paused){
    state.attackCooldown=Math.max(0,state.attackCooldown-dt);state.comboTimer=Math.max(0,state.comboTimer-dt);state.invulnerable=Math.max(0,state.invulnerable-dt);if(state.comboTimer===0)state.combo=0;attackButton.classList.toggle('cooldown',state.attackCooldown>0);hero.visible=state.invulnerable<=0||Math.floor(t/85)%2===0;
    const f=(state.keys.KeyW||state.keys.ArrowUp?1:0)-(state.keys.KeyS||state.keys.ArrowDown?1:0)+touchY,r=(state.keys.KeyD||state.keys.ArrowRight?1:0)-(state.keys.KeyA||state.keys.ArrowLeft?1:0)+touchX;
    camera.getWorldDirection(viewForward);viewForward.y=0;if(viewForward.lengthSq()<.001)viewForward.set(0,0,1);viewForward.normalize();viewRight.crossVectors(viewForward,UP).normalize();
    const dir=moveDirection.copy(viewForward).multiplyScalar(f).addScaledVector(viewRight,r);if(dir.length()>1)dir.normalize();state.velocity.x=dir.x*7.2;state.velocity.z=dir.z*7.2;
    if(jumpTap){state.jumpBuffer=.15;jumpTap=false}state.jumpBuffer=Math.max(0,state.jumpBuffer-dt);state.coyote=state.grounded ? .11 : Math.max(0,state.coyote-dt);
    if(state.jumpBuffer>0&&state.coyote>0){state.velocity.y=10;state.grounded=false;state.coyote=0;state.jumpBuffer=0;beep(320,.055)}
    state.velocity.y-=22*dt;oldHeroPosition.copy(hero.position);const nearbyStage=THREE.MathUtils.clamp(Math.floor(hero.position.z/30),0,9);
    hero.position.x+=state.velocity.x*dt;hero.position.z+=state.velocity.z*dt;
    for(const s of solids){
      if(Math.abs(s.userData.stageIndex-nearbyStage)>1)continue;
      const bounds=objectBounds(s);
      if(overlapsHorizontal(hero.position,bounds,HERO_RADIUS)&&overlapsVertical(hero.position,bounds,HERO_HEIGHT)){hero.position.x=oldHeroPosition.x;hero.position.z=oldHeroPosition.z;break}
    }
    const previousY=hero.position.y;hero.position.y+=state.velocity.y*dt;state.grounded=false;
    for(const s of solids){
      if(Math.abs(s.userData.stageIndex-nearbyStage)>1)continue;
      const bounds=objectBounds(s);if(!overlapsHorizontal(hero.position,bounds,HERO_RADIUS))continue;
      const resolved=resolveVerticalSweep(previousY,hero.position.y,state.velocity.y,bounds,HERO_HEIGHT);
      if(resolved){hero.position.y=resolved.y;state.velocity.y=resolved.velocityY;state.grounded=resolved.grounded;break}
    }
    if(hero.position.y<=.02){hero.position.y=.02;state.velocity.y=0;state.grounded=true}
    if(dir.lengthSq()>.1){hero.rotation.y=Math.atan2(dir.x,dir.z);const swing=Math.sin(t*.013)*.5;leg1.rotation.x=swing;leg2.rotation.x=-swing;arm1.rotation.x=-swing;arm2.rotation.x=swing}else{leg1.rotation.x*=.75;leg2.rotation.x*=.75;arm1.rotation.x*=.75;arm2.rotation.x*=.75}
    if(state.attackAnim>0){state.attackAnim-=dt;arm1.rotation.x=-1.65;arm2.rotation.x=-1.65}
    if(hunterState.active){
      const chase=hunterDelta.copy(hero.position).sub(hunter.position),verticalGap=Math.abs(chase.y);chase.y=0;const chaseDistance=chase.length(),previousMode=hunterState.mode,event=advanceHunterBrain(hunterState,dt,chaseDistance);
      if(event==='windup'){announce('⚠ 守卫蓄力冲撞 · 快闪开！');beep(175,.16);haptic([35,35,35])}
      if(hunterState.mode==='chase'&&chaseDistance>.1){const speed=3.4+hunterState.stage*.1;moveHunter(chase.normalize(),speed,dt)}
      if(event==='strike'){
        beep(95,.18);haptic([70,35,90]);
        if(chaseDistance<HUNTER_STRIKE_RANGE&&verticalGap<1.45)die('被梅东撞倒');else announce('✓ 闪避成功 · 趁现在反击')
      }
      const minZ=hunterState.stage*30+3,maxZ=(hunterState.stage+1)*30-3;hunter.position.x=THREE.MathUtils.clamp(hunter.position.x,-6.5,6.5);hunter.position.z=THREE.MathUtils.clamp(hunter.position.z,minZ,maxZ);hunter.rotation.y=Math.atan2(chase.x,chase.z);
      hunterState.hitFlash=Math.max(0,hunterState.hitFlash-dt);hunterWarning.visible=hunterState.mode==='windup';if(hunterWarning.visible){const pulse=1+Math.sin(t*.035)*.12;hunterWarning.scale.setScalar(pulse);hunterWarning.material.opacity=.52+Math.sin(t*.04)*.2}
      setHunterBodyGlow(hunterState.hitFlash>0?0xffffff:hunterState.mode==='windup'?0x9a1600:0x000000,hunterState.hitFlash>0?1.4:1);hunterHud.classList.toggle('hit',hunterState.hitFlash>0);
      if(previousMode!==hunterState.mode)updateHunterIntent(true);
      const hs=Math.sin(t*.015)*.58;if(hunterState.mode==='windup'){hArm1.rotation.x=-1.25;hArm2.rotation.x=-1.25;hLeg1.rotation.x=.35;hLeg2.rotation.x=-.35}else if(hunterState.mode==='recovery'){hArm1.rotation.x=.9;hArm2.rotation.x=.9;hLeg1.rotation.x=-.2;hLeg2.rotation.x=.2}else{hLeg1.rotation.x=hs;hLeg2.rotation.x=-hs;hArm1.rotation.x=-hs;hArm2.rotation.x=hs}
    }
    audio.update({moving:dir.lengthSq()>.1,grounded:state.grounded,hunter:hunterState.active,now:t/1000});
    for(const h of hazards){if(Math.abs(h.userData.stageIndex-nearbyStage)>1)continue;if(hit(h,.28)){die('触碰危险机关');break}}
    if(Math.abs(hero.position.x)>7.2||hero.position.y < -3)die();
    // Crossing the front edge of a checkpoint pad activates that respawn point.
    const si=Math.max(0,Math.min(9,Math.floor((hero.position.z-1)/30)));if(si>state.stage)updateStage(si);
    if(hero.position.z>300){state.won=true;state.wonTime=(t-state.start)/1000;beep(880,.4);haptic([50,40,100]);document.querySelector('#finalTime').textContent=timeEl.textContent;saveBest(state.wonTime);document.querySelector('#win').classList.remove('hidden')}
    timeEl.textContent=format((t-state.start)/1000);
  }
  for(const o of movers){if(o.userData.rotate)o.rotation.y=t*.001*o.userData.speed;else if(o.userData.move==='x')o.position.x=o.userData.base+Math.sin(t*.001*o.userData.speed+o.userData.phase)*o.userData.amp;else o.position.y=o.userData.base+Math.abs(Math.sin(t*.001*o.userData.speed+o.userData.phase))*o.userData.amp}
  checkpoints.forEach((c,i)=>{const active=i<=state.stage;c.userData.beacon.scale.y=1+Math.sin(t*.004+i)*.08;c.userData.marker.material.opacity=active?.95:.35});lamps.forEach((l,i)=>l.material.emissiveIntensity=1.55+Math.sin(t*.006+i)*.18);
  lockGates.forEach(g=>g.position.y=THREE.MathUtils.lerp(g.position.y,g.userData.targetY,.12));
  heli.position.y=3.3+Math.sin(t*.002)*.18;heli.rotation.y=Math.sin(t*.0008)*.08;
  cameraTarget.copy(hero.position).addScaledVector(UP,1.35);
  cameraOffset.set(0,Math.sin(state.pitch)*state.cameraDistance,-Math.cos(state.pitch)*state.cameraDistance).applyAxisAngle(UP,state.yaw);
  cameraDesired.copy(cameraTarget).add(cameraOffset);
  scene.updateMatrixWorld();
  cameraDirection.copy(cameraDesired).sub(cameraTarget);const cameraLength=cameraDirection.length();cameraDirection.normalize();cameraRay.set(cameraTarget,cameraDirection);cameraRay.far=cameraLength;
  cameraCandidates.length=0;
  const cameraStage=THREE.MathUtils.clamp(Math.floor(cameraTarget.z/30),0,9),minCameraX=Math.min(cameraTarget.x,cameraDesired.x)-1,maxCameraX=Math.max(cameraTarget.x,cameraDesired.x)+1,minCameraZ=Math.min(cameraTarget.z,cameraDesired.z)-1,maxCameraZ=Math.max(cameraTarget.z,cameraDesired.z)+1;
  for(const s of solids){if(Math.abs(s.userData.stageIndex-cameraStage)>1)continue;const bounds=objectBounds(s);if(bounds.max.x>=minCameraX&&bounds.min.x<=maxCameraX&&bounds.max.z>=minCameraZ&&bounds.min.z<=maxCameraZ)cameraCandidates.push(s)}
  const obstruction=cameraRay.intersectObjects(cameraCandidates,false)[0];if(obstruction)cameraDesired.copy(cameraTarget).addScaledVector(cameraDirection,Math.max(1.35,obstruction.distance-.35));
  camera.position.lerp(cameraDesired,1-Math.pow(.0004,dt));camera.lookAt(cameraTarget);renderer.render(scene,camera);
  if(state.started&&!state.paused&&!state.won){if(!perfState.sampleStart)perfState.sampleStart=t;perfState.frames++;if(t-perfState.sampleStart>=2000){perfState.fps=Math.round(perfState.frames*1000/(t-perfState.sampleStart));fpsReadout.textContent=`${perfState.fps} FPS`;document.body.dataset.fps=String(perfState.fps);if(qualityMode==='auto'&&!defaultLowPower&&!autoDegraded){perfState.lowSamples=perfState.fps<42?perfState.lowSamples+1:0;if(perfState.lowSamples>=2){autoDegraded=true;applyQuality('auto',false);announce('已自动切换为流畅画质')}}perfState.frames=0;perfState.sampleStart=t}}
}

const cameraRay=new THREE.Raycaster();
addEventListener('keydown',e=>{state.keys[e.code]=true;if(e.code==='Escape'&&!e.repeat)setPaused(!state.paused);if(e.code==='Space'&&!e.repeat)state.jumpBuffer=.15;if(e.code==='KeyF'&&!e.repeat)doAttack();if(e.code==='KeyC'){state.yaw=hero.rotation.y;state.pitch=.48;state.cameraDistance=8}if(['Space','ArrowUp','ArrowDown','ArrowLeft','ArrowRight'].includes(e.code))e.preventDefault()});addEventListener('keyup',e=>state.keys[e.code]=false);
let cameraPointerId=null,lastX=0,lastY=0,dragDistance=0;renderer.domElement.addEventListener('pointerdown',e=>{if(cameraPointerId!==null)return;cameraPointerId=e.pointerId;dragDistance=0;lastX=e.clientX;lastY=e.clientY;renderer.domElement.setPointerCapture?.(e.pointerId)});renderer.domElement.addEventListener('pointermove',e=>{if(e.pointerId===cameraPointerId){const dx=e.clientX-lastX,dy=e.clientY-lastY;dragDistance+=Math.abs(dx)+Math.abs(dy);state.yaw-=dx*.006;state.pitch=THREE.MathUtils.clamp(state.pitch+dy*.004,.12,1.05);lastX=e.clientX;lastY=e.clientY}});const endCameraDrag=e=>{if(e.pointerId!==cameraPointerId)return;if(e.type==='pointerup'&&dragDistance<6&&hunterState.active)doAttack();cameraPointerId=null;renderer.domElement.releasePointerCapture?.(e.pointerId)};renderer.domElement.addEventListener('pointerup',endCameraDrag);renderer.domElement.addEventListener('pointercancel',endCameraDrag);renderer.domElement.addEventListener('wheel',e=>{e.preventDefault();state.cameraDistance=THREE.MathUtils.clamp(state.cameraDistance+Math.sign(e.deltaY)*.65,4.5,10.5)},{passive:false});renderer.domElement.addEventListener('contextmenu',e=>e.preventDefault());
let touchX=0,touchY=0,jumpTap=false,stickPointerId=null;const stick=document.querySelector('#stick'),knob=stick.querySelector('i');function stickMove(e){const b=stick.getBoundingClientRect(),x=e.clientX-(b.left+b.width/2),y=e.clientY-(b.top+b.height/2),l=Math.max(1,Math.hypot(x,y)),q=Math.min(34,l);touchX=x/l*q/34;touchY=-y/l*q/34;knob.style.transform=`translate(${touchX*34}px,${-touchY*34}px)`}stick.addEventListener('pointerdown',e=>{if(stickPointerId!==null)return;stickPointerId=e.pointerId;stick.setPointerCapture(e.pointerId);stickMove(e)});stick.addEventListener('pointermove',e=>{if(e.pointerId===stickPointerId)stickMove(e)});const releaseStick=e=>{if(e.pointerId!==stickPointerId)return;stickPointerId=null;touchX=touchY=0;knob.style.transform=''};stick.addEventListener('pointerup',releaseStick);stick.addEventListener('pointercancel',releaseStick);document.querySelector('#jump').addEventListener('pointerdown',e=>{e.stopPropagation();jumpTap=true});
attackButton.addEventListener('pointerdown',e=>{e.stopPropagation();doAttack()});
document.querySelector('#play').onclick=()=>{document.querySelector('#start').classList.add('hidden');state.started=true;state.start=performance.now();audio.start();reset(true)};document.querySelector('#reset').onclick=()=>reset(true);document.querySelector('#again').onclick=()=>reset(true);let sound=true;document.querySelector('#sound').onclick=e=>{sound=!sound;audio.setEnabled(sound);e.currentTarget.textContent=sound?'🔊':'🔇'};document.querySelector('#pauseButton').onclick=()=>setPaused(true);document.querySelector('#resume').onclick=()=>setPaused(false);document.querySelector('#pauseRestart').onclick=()=>{reset(true);audio.resume()};qualitySelect.onchange=e=>{autoDegraded=false;perfState.lowSamples=0;applyQuality(e.target.value);announce(`画质：${e.target.selectedOptions[0].text}`)};
document.addEventListener('visibilitychange',()=>{if(document.hidden&&state.started&&!state.won)setPaused(true)});
addEventListener('resize',()=>{camera.aspect=innerWidth/innerHeight;camera.fov=innerWidth<innerHeight?66:58;camera.updateProjectionMatrix();renderer.setPixelRatio(Math.min(devicePixelRatio,activeLowPower?1:1.5));renderer.setSize(innerWidth,innerHeight)});applyQuality(qualityMode,false);showBest();reset(true);tick(0);
