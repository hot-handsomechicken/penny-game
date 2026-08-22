import * as THREE from 'three';
import './style.css';
import './combat.css';
import './responsive.css';
import './settings.css';
import './modes.css';
import {AudioSystem} from './audio.js';
import {MEDONG_APPEARANCE,MEDONG_PRAISE,MODE_CONFIG,RESCUE_BATTLE_OFFSETS,RESCUE_BUFF_EFFECTS,RESCUE_BUFF_LABELS,RESCUE_FINAL_BOSS_STAGE,RESCUE_MODE_PLAYER_INDICES,RESCUE_MODE_PLAYERS,RESCUE_PLACEMENTS,RESCUE_PLATFORM_ROUTES,RESCUE_PLAYERS,RESCUE_STAGE_SCENES,RESCUE_TRAIL_OFFSETS,RESCUE_UNIQUE_STAGE_INDICES,SKIN_CATALOG,STAGE14_TUNING,STAR_FACE_STYLE,STAR_FACE_TEXTURE_SIZE,TOILET_LAYOUT,createMathQuestion,createRosisterQuestion,hunterSpawnForStage,isMathAnswerCorrect,isRosisterAnswerCorrect,isToiletNoCombat,launchShortcut,requiredRescueForCheckpoint,rescueBuffTotals,rescueModeBuffTotals,rescueHunterHp,unlockedSkinIds} from './modes.js';
import {
  HERO_HEIGHT,
  HERO_RADIUS,
  intersectsBody,
  intersectsYawedBox,
  overlapsHorizontal,
  overlapsVertical,
  resolveVerticalSweep,
} from './collision.js';
import {
  HUNTER_STRIKE_RANGE,
  advanceHunterBrain,
  comboDamage,
  damageMechArm,
  hunterMaxHpForEncounter,
  resetHunterBrain,
  stunHunter,
} from './hunter-ai.js';

const game=document.querySelector('#game');
const STAGE_COUNT=MODE_CONFIG.escape.stageCount,LAST_STAGE=STAGE_COUNT-1,STAGE_LENGTH=30,FINISH_Z=602;
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
const M={brick:material('brick','#47545a','#2c353a'),brickDark:material('brick','#303b40','#1c2529'),floor:material('tile','#7c817b','#606661'),floorDark:material('tile','#4d5858','#343e40'),metal:material('metal','#55636a','#1e282d'),rust:material('metal','#754932','#34251f'),bar:material('metal','#273238','#7f8e91'),orange:material('stripe','#d66f1c','#f09b35'),hazard:material('stripe','#191d20','#d88b18',0x6c2200),toxic:material('tile','#405f26','#99d135',0x315d09),water:material('tile','#173e42','#247d77',0x073132),ice:material('tile','#76aeb7','#bce7e5',0x173e46),crate:material('crate','#82552d','#4b301c'),green:material('metal','#719a29','#d0ff63',0x5d950d),greenOff:material('metal','#3e4c42','#1d2622'),red:material('stripe','#8e281e','#e96a36',0x7e1008),white:material('tile','#b9bdac','#83897e'),black:material('metal','#171d20','#485359'),skin:new THREE.MeshStandardMaterial({color:0xd79a70,roughness:1}),hair:new THREE.MeshStandardMaterial({color:0x291c17,roughness:1})};

const world=new THREE.Group();scene.add(world);const solids=[],hazards=[],movers=[],checkpoints=[],lamps=[];
const ENCLOSED_CEILING_Y=9.8,CEILING_BEAM_Y=9.5;
function box(x,y,z,w,h,d,m=M.brick,solid=false,shadow=true,parent=world){const o=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),m);o.position.set(x,y,z);o.castShadow=shadow;o.receiveShadow=true;parent.add(o);if(solid)solids.push(o);return o}
function danger(x,y,z,w,h,d,m=M.red){const o=box(x,y,z,w,h,d,m,false,true);hazards.push(o);return o}
function drawSpriteText(sprite,text,color='#e8e8d8'){const {canvas,context}=sprite.userData;context.clearRect(0,0,canvas.width,canvas.height);context.fillStyle='#10171dcc';context.fillRect(8,20,496,88);context.strokeStyle='#87938e';context.lineWidth=5;context.strokeRect(8,20,496,88);context.fillStyle=color;context.font=`900 ${text.length>22?28:text.length>16?34:42}px monospace`;context.textAlign='center';context.textBaseline='middle';context.fillText(text,256,64);sprite.material.map.needsUpdate=true}
function textSprite(text,x,y,z,scale=1,color='#e8e8d8',parent=world){const c=document.createElement('canvas');c.width=512;c.height=128;const q=c.getContext('2d');q.imageSmoothingEnabled=false;const s=new THREE.Sprite(new THREE.SpriteMaterial({map:new THREE.CanvasTexture(c),transparent:true}));s.userData={canvas:c,context:q};drawSpriteText(s,text,color);s.position.set(x,y,z);s.scale.set(6.4*scale,1.6*scale,1);parent.add(s);return s}
function bars(x,z,side=1,len=6){for(let dz=-len/2;dz<=len/2;dz+=1)box(x,2.1,z+dz,.13,4.2,.13,M.bar,false,false);box(x,4.05,z,.18,.18,len+.5,M.bar);box(x,.15,z,.18,.18,len+.5,M.bar)}
function pipe(x,y,z,len,axis='z',m=M.rust,parent=world){const dims=axis==='z'?[.34,.34,len]:axis==='x'?[len,.34,.34]:[.34,len,.34];box(x,y,z,...dims,m,false,true,parent);for(let k=-1;k<=1;k+=2){const p=axis==='z'?[x,y,z+k*len/2]:axis==='x'?[x+k*len/2,y,z]:[x,y+k*len/2,z];box(...p,.52,.52,.28,m,false,true,parent)}}
function lamp(x,z){box(x,9.25,z,2.2,.18,.8,M.metal);const glow=box(x,9.1,z,1.55,.08,.45,new THREE.MeshStandardMaterial({color:0xffd47a,emissive:0xffb02e,emissiveIntensity:2}));lamps.push(glow);const l=new THREE.PointLight(0xffc56b,11,17,2);l.position.set(x,8.6,z);world.add(l)}
function bunk(x,z,flip=1){box(x,.52,z,2.5,.18,1.1,M.metal);box(x,2.05,z,2.5,.18,1.1,M.metal);for(let dx of [-1.1,1.1])box(x+dx,.95,z,.13,2.9,.13,M.bar);box(x,.66,z,2.2,.22,.9,M.white);box(x,2.2,z,2.2,.22,.9,M.white);box(x+flip*.7,.86,z,52/100,.18,.65,M.brickDark)}
function sector(i,floor=M.floor,walls=M.brick,open=false){const z=i*STAGE_LENGTH+STAGE_LENGTH/2;box(0,-.35,z,15,.7,STAGE_LENGTH,floor,true);if(!open){box(-7.5,4.8,z,.6,9.6,STAGE_LENGTH,walls,true);box(7.5,4.8,z,.6,9.6,STAGE_LENGTH,walls,true);box(0,ENCLOSED_CEILING_Y,z,15,.4,STAGE_LENGTH,M.brickDark,true)}else{box(-7.5,1,z,.5,2,STAGE_LENGTH,walls,true);box(7.5,1,z,.5,2,STAGE_LENGTH,walls,true)}for(let dz=-12;dz<=12;dz+=6){box(0,CEILING_BEAM_Y,z+dz,15,.35,.35,M.metal);if(!open&&dz%12===0)lamp(0,z+dz)}}
const stageNames=['牢房区 · 01','洗衣封锁区 · 02','地下排污渠 · 03','锅炉房 · 04','安检走廊 · 05','监狱厨房 · 06','通风管道 · 07','放风操场 · 08','警戒屋顶 · 09','假撤离点 · 10','监狱厕所入口 · 11','四选一隔间 · 12','厕所下水道 · 13','维修竖井 · 14','守卫营房 · 15','押运车库 · 16','外圈排水渠 · 17','探照灯广场 · 18','外墙脚手架 · 19','最终停机坪 · 20'];
const missions=['翻过牢房警戒线','避开横冲直撞的洗衣车','踩着浮箱越过污水渠','躲开旋转的高温管道','穿过交错的安检闸门','跳过灼热炉台','沿维修踏板爬出风管','穿过带刺封锁区','避开屋顶排风扇','突破假撤离点的封锁','进入监狱厕所','正确位置固定，靠近四扇相同的门选择','沿厕所地洞爬过下水道','沿维修平台穿过竖井','跳过营房警戒线','避开移动的押运车辆','踩着旧箱越过外圈污水','穿过交错的探照光束','沿脚手架登上外墙','击败梅东，抵达直升机'];
const mathStageNames=Array.from({length:MODE_CONFIG.math.stageCount},(_,i)=>`数学教室 · ${String(i+1).padStart(2,'0')}`),mathMissions=mathStageNames.map((_,i)=>`答对梅东老师的第 ${i+1} 道题`);
const rescueStageNames=RESCUE_STAGE_SCENES.map((scene,i)=>`${scene.name} · ${String(i+1).padStart(2,'0')}`),rescueMissions=RESCUE_STAGE_SCENES.map((scene,i)=>i<RESCUE_MODE_PLAYERS.length?`${scene.mission}，营救 ${RESCUE_MODE_PLAYERS[i].name}`:scene.mission);
const rosisterStageNames=Array.from({length:MODE_CONFIG.rosister.stageCount},(_,i)=>`萝姐挑战 · ${String(i+1).padStart(2,'0')}`),rosisterMissions=rosisterStageNames.map((_,i)=>`在倒计时结束前答对第 ${i+1} 题，解锁下一个检查点`);
const modeStageNames={escape:stageNames,math:mathStageNames,rescue:rescueStageNames,rosister:rosisterStageNames},modeMissions={escape:missions,math:mathMissions,rescue:rescueMissions,rosister:rosisterMissions};
[M.floor,M.floorDark,M.floorDark,M.floorDark,M.floor,M.floor,M.metal,M.floorDark,M.black,M.black,M.floorDark,M.crate,M.ice,M.metal,M.floor,M.black,M.floorDark,M.floorDark,M.metal,M.black].forEach((f,i)=>sector(i,f,i>6?M.brickDark:M.brick,i>=7));

// 牢房区：床铺、栏杆和低位警戒线
for(let z of [7,14,21]){bars(-6.7,z,1,5);bars(6.7,z,-1,5);bunk(-5.25,z,-1);bunk(5.25,z,1)}
for(let z of [9,16,23])danger(0,.58,z,13,.22,.28,M.red);
textSprite('CELL BLOCK A',0,4.3,5,.8,'#ffb140');

// 洗衣封锁区：机器、篮筐、来回移动的推车
for(let z=35;z<57;z+=5){for(let x of [-6.3,6.3]){box(x,1.2,z,1.6,2.4,1.6,M.white);const door=new THREE.Mesh(new THREE.CylinderGeometry(.5,.5,.12,12),M.black);door.rotation.x=Math.PI/2;door.position.set(x,1.2,z+(x<0?.86:-.86));world.add(door)}}
for(let k=0;k<4;k++){const o=danger(k%2?-5:5,.55,38+k*5,2.5,1.1,1.5,M.orange);o.userData={move:'x',base:o.position.x,amp:8.3,speed:1.05+k*.08,phase:k*1.4};movers.push(o)}

// 地下排污渠：污水与漂浮木箱
danger(0,.03,75,14,.15,22,M.toxic);pipe(-6.7,2.6,75,24,'z',M.rust);pipe(6.7,1.3,75,24,'z',M.metal);
const sewerRoute=[[-1.5,-9],[0,-5.2],[1.5,-1.4],[0,2.4],[-1.5,6.2],[0,9.5]];sewerRoute.forEach(([x,d],k)=>box(x,.32,75+d,3.2,.65,2.9,k%2?M.crate:M.metal,true));

// 锅炉房：前段教学用的低速短旋臂，两侧保留清晰安全区
for(let z of [95,108])for(let x of [-5.8,5.8]){box(x,1.6,z,2.1,3.2,3.2,M.rust);pipe(x,3.4,z,2.5,'y',M.rust)}
for(let k=0;k<2;k++){const pivot=new THREE.Group();pivot.position.set(0,.55,99+k*11);world.add(pivot);const arm=box(0,0,0,7.2,.32,.4,M.hazard,false,true,pivot);hazards.push(arm);pivot.userData={rotate:true,speed:.52+k*.12};movers.push(pivot)}

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

// 档案禁区：高密度档案架与倒塌的卷宗柜
for(let z=307;z<=327;z+=5)for(const x of [-5.8,5.8]){box(x,1.45,z,2.2,2.9,1.25,M.crate,true);box(x,3.2,z,2.2,.22,1.25,M.metal)}
for(let k=0;k<4;k++){const x=k%2?-2.8:2.8,z=309+k*5.2;box(x,.55,z,4.2,1.1,1.2,k%2?M.metal:M.crate,true)}
textSprite('ARCHIVE  RESTRICTED',0,4.7,305,.62,'#f4c66e');

// 证物仓库：在封存液体上沿证物箱连续跳跃
danger(0,.03,345,14,.15,20,M.water);
const evidenceRoute=[[-2.5,337],[0,341],[2.5,345],[0,349],[-2.5,353],[0,356]];evidenceRoute.forEach(([x,z],k)=>box(x,.34,z,2.8,.68,2.5,k%2?M.crate:M.metal,true));
for(const z of [337,356])for(const x of [-6.1,6.1])box(x,1.4,z,1.5,2.8,2.2,M.crate);

// 低温冷库：横向滑动的冷冻货柜
for(let z=367,k=0;z<=387;z+=6.7,k++){const o=danger(k%2?-5:5,.72,z,3.1,1.45,1.35,M.ice);o.userData={move:'x',base:o.position.x,amp:8.1,speed:.86+k*.07,phase:k*1.2};movers.push(o)}
for(const z of [365,375,385])for(const x of [-6.35,6.35])box(x,1.2,z,1.5,2.4,2.2,M.ice);
textSprite('COLD STORAGE',0,4.7,364,.62,'#a9f3ff');

// 维修竖井：维修台、低位蒸汽管与旋转阀臂
for(let z=397,k=0;z<=417;z+=5,k++)box(k%2?-4.9:4.9,.65,z,2.6,1.3,2.2,M.metal,true);
{const beam=danger(0,.5,STAGE14_TUNING.staticBeamZ,STAGE14_TUNING.staticBeamWidth,.18,.3,M.hazard);beam.userData.hitPad=STAGE14_TUNING.hitPadding}
{const pivot=new THREE.Group();pivot.position.set(0,.5,408);world.add(pivot);const arm=box(0,0,0,STAGE14_TUNING.rotatingArmLength,.22,.34,M.hazard,false,true,pivot);arm.userData.hitPad=STAGE14_TUNING.hitPadding;hazards.push(arm);pivot.userData={rotate:true,speed:STAGE14_TUNING.rotatingArmSpeed};movers.push(pivot)}

// 守卫营房：床铺之间交错的警戒线
for(const z of [425,432,439,446]){bunk(-5.2,z,-1);bunk(5.2,z,1)}
for(const z of [428,436,444])danger(0,.58,z,12.6,.22,.28,M.red);
textSprite('GUARD BARRACKS',0,4.7,424,.62,'#ff9d63');

// 押运车库：移动押运车与维修隔离墩
for(const z of [456,468]){box(-5.8,.8,z,2.3,1.6,3.6,M.black);box(5.8,.8,z+5,2.3,1.6,3.6,M.black)}
for(let k=0;k<3;k++){const o=danger(k%2?-5:5,.78,458+k*7.3,3.6,1.55,1.6,M.black);o.userData={move:'x',base:o.position.x,amp:7.8,speed:.78+k*.08,phase:k*1.5};movers.push(o)}
textSprite('TRANSFER GARAGE',0,4.7,454,.62,'#ffbd4d');

// 外圈排水渠：腐蚀水面与旧运输箱路线
danger(0,.03,495,14,.15,20,M.toxic);
const outerDrainRoute=[[2.5,487],[0,491],[-2.5,495],[0,499],[2.5,503],[0,506]];outerDrainRoute.forEach(([x,z],k)=>box(x,.34,z,2.8,.68,2.5,k%2?M.metal:M.crate,true));
pipe(-6.7,2.1,495,22,'z',M.rust);pipe(6.7,3.3,495,22,'z',M.metal);

// 探照灯广场：旋转光束与梅东夹击
for(const [z,speed] of [[520,.82],[531,-.95]]){const pivot=new THREE.Group();pivot.position.set(0,.55,z);world.add(pivot);const beam=danger(0,0,0,11,.22,.42,M.red);pivot.add(beam);pivot.userData={rotate:true,speed};movers.push(pivot)}
for(const z of [516,526,536]){const l=new THREE.SpotLight(0xffe4a0,18,24,.38,.45,1.2);l.position.set(z%2?5:-5,7,z);l.target.position.set(0,0,z+3);world.add(l,l.target)}
textSprite('SEARCHLIGHT YARD',0,4.7,514,.62,'#ffef9a');

// 外墙脚手架：逐级升高的窄平台
danger(0,.03,555,14,.15,22,M.water);
const scaffoldRoute=[[-2.5,546,.28],[0,550,.48],[2.5,554,.68],[0,558,.88],[-2.5,562,1.08],[0,566,.72]];scaffoldRoute.forEach(([x,z,y],k)=>{box(x,y,z,3,.55,2.6,k%2?M.metal:M.crate,true);pipe(x,y+1.3,z,2.6,'y',M.rust)});
bars(-7,555,1,24);bars(7,555,-1,24);

// 最终停机坪：武器入口、开阔 Boss 区与真实撤离直升机
{const o=danger(0,.55,578,11.5,.25,.34,M.red);o.userData={move:'y',base:.55,amp:1.65,speed:1.55,phase:0};movers.push(o)}
const moneyGunPickup=new THREE.Group();moneyGunPickup.position.set(-4.8,0,575);world.add(moneyGunPickup);box(0,.12,0,2.3,.24,2.3,M.green,false,true,moneyGunPickup);box(0,.78,0,1.45,.5,.45,M.green,false,true,moneyGunPickup);box(.65,.63,0,.75,.22,.22,M.metal,false,true,moneyGunPickup);box(-.45,.48,0,.3,.55,.28,M.black,false,true,moneyGunPickup);textSprite('💵 MONEY GUN',0,2.25,0,.38,'#d6ff68',moneyGunPickup);
box(0,-.25,600.8,15,.5,4,M.black,true);box(0,.03,600.8,12,.08,3.5,M.hazard);
const heli=new THREE.Group();heli.position.set(0,3.3,602);world.add(heli);box(0,0,0,5,2.2,3,M.black,false,true,heli);box(0,.8,-2.4,1.1,1,3.2,M.black,false,true,heli);box(0,1.5,0,10,.15,.28,M.bar,false,true,heli);box(0,.2,2.1,2.7,1.5,1.5,M.black,false,true,heli);textSprite('FINAL EVAC  →',0,5.1,597,.78,'#bfff4f');

for(const object of [...solids,...hazards])object.userData.modes=['escape','rescue'];

// 拯救模式拥有独立路线。仅厕所三关和最终战继续复用普通模式区域。
const rescueUniqueStageSet=new Set(RESCUE_UNIQUE_STAGE_INDICES),rescueOriginalRoots=[],rescueWorldPosition=new THREE.Vector3();
scene.updateMatrixWorld(true);
for(const child of [...world.children]){
  child.getWorldPosition(rescueWorldPosition);const stage=Math.floor(rescueWorldPosition.z/STAGE_LENGTH);
  if(rescueUniqueStageSet.has(stage))rescueOriginalRoots.push(child);
}
for(const object of [...solids,...hazards]){
  object.getWorldPosition(rescueWorldPosition);const stage=Math.floor(rescueWorldPosition.z/STAGE_LENGTH);
  if(rescueUniqueStageSet.has(stage))object.userData.modes=['escape'];
}

const rescueWorld=new THREE.Group();scene.add(rescueWorld);rescueWorld.visible=false;
const rescueFloor=material('tile','#253c4a','#3d6478'),rescueWall=material('brick','#314b5d','#1a2d3a'),rescueBlue=material('metal','#28627a','#7bd1eb',0x103f52),rescuePurple=material('metal','#59476e','#b083d0',0x321d45),rescueAlarm=material('stripe','#4a2638','#ef6384',0x5c152b),rescueSludge=material('tile','#26464b','#5bb6bd',0x0d3f45),rescueIvory=material('tile','#aeb9b5','#687976');
function rescueBox(x,y,z,w,h,d,m=rescueWall,solid=false,shadow=true,parent=rescueWorld){const object=box(x,y,z,w,h,d,m,solid,shadow,parent);object.userData.modes=['rescue'];return object}
function rescueDanger(x,y,z,w,h,d,m=rescueAlarm,parent=rescueWorld){const object=rescueBox(x,y,z,w,h,d,m,false,true,parent);hazards.push(object);return object}
function rescuePipe(x,y,z,len,axis='z',m=rescueBlue,parent=rescueWorld){const dims=axis==='z'?[.34,.34,len]:axis==='x'?[len,.34,.34]:[.34,len,.34];rescueBox(x,y,z,...dims,m,false,true,parent);for(let k=-1;k<=1;k+=2){const p=axis==='z'?[x,y,z+k*len/2]:axis==='x'?[x+k*len/2,y,z]:[x,y+k*len/2,z];rescueBox(...p,.52,.52,.28,m,false,true,parent)}}
function rescueSector(stage,{open=false,floor=rescueFloor,walls=rescueWall}={}){const z=stage*STAGE_LENGTH+STAGE_LENGTH/2;rescueBox(0,-.35,z,15,.7,STAGE_LENGTH,floor,true);if(open){rescueBox(-7.5,1,z,.5,2,STAGE_LENGTH,walls,true);rescueBox(7.5,1,z,.5,2,STAGE_LENGTH,walls,true)}else{rescueBox(-7.5,4.8,z,.6,9.6,STAGE_LENGTH,walls,true);rescueBox(7.5,4.8,z,.6,9.6,STAGE_LENGTH,walls,true);rescueBox(0,ENCLOSED_CEILING_Y,z,15,.4,STAGE_LENGTH,M.black,true)}for(let offset=-12;offset<=12;offset+=6)rescueBox(0,CEILING_BEAM_Y,z+offset,15,.28,.28,rescueBlue)}
function rescueLabel(stage,text,color='#94e7ff'){textSprite(text,0,5.9,stage*STAGE_LENGTH+5,.58,color,rescueWorld)}
for(const stage of RESCUE_UNIQUE_STAGE_INDICES)rescueSector(stage,{open:[1,5,8,13].includes(stage),floor:[5,8].includes(stage)?M.black:rescueFloor,walls:stage===3?rescueIvory:rescueWall});

// 01 地下接应暗道：无伤害的掩体教学，交错缺口保证钥匙和牢笼都能抵达。
rescueLabel(0,'UNDERGROUND CONTACT');
for(const [z,gap] of [[11,-4.6],[16,4.6],[21,-4.6],[26,4.6]]){for(const x of [-4.5,0,4.5])if(Math.abs(x-gap)>1.4)rescueBox(x,1,z,4,2,.75,M.crate,true)}
for(const [x,z] of [[-5.7,7],[5.7,19],[-5.7,25]])rescueBox(x,.8,z,1.7,1.6,2.2,rescueBlue,true);

// 02 巡逻犬舍外围：犬舍构成侧向掩体，巡逻灯缓慢横移并留出宽阔绕行空间。
rescueLabel(1,'K9 PATROL YARD','#ffd17d');
for(const [x,z] of [[-5.4,38],[5.4,42],[-5.4,49],[5.4,54]]){rescueBox(x,1,z,2.8,2,3,M.black,true);rescueBox(x,2.15,z,3.1,.22,3.3,rescueBlue)}
for(let k=0;k<2;k++){const light=rescueDanger(0,.34,44+k*8,2.2,.18,1.1,rescueAlarm);Object.assign(light.userData,{move:'x',base:0,amp:4.5,speed:.58+k*.08,phase:k*2.2});movers.push(light)}

// 03 高压配电中心：交错电缆只封一侧，玩家始终有清晰的安全通道。
rescueLabel(2,'HIGH VOLTAGE','#8cecff');
for(const [x,z] of [[-5.5,68],[5.5,74],[-5.5,82],[5.5,88]]){rescueBox(x,1.45,z,2.2,2.9,2.3,rescuePurple,true);rescuePipe(x,3.25,z,2.2,'y',rescueBlue)}
for(const [z,x] of [[71,-2.6],[77,2.6],[83,-2.6],[89,2.6]])rescueDanger(x,.08,z,7,.16,.55,rescueBlue);
for(const [x,z] of [[-1.5,66],[0,84.5]])rescueBox(x,.18,z,3,.36,2.6,rescueIvory,true);

// 04 隔离医务通道：移动病床速度较慢，可从两侧稳定躲避。
rescueLabel(3,'ISOLATION WARD','#d8fff2');
for(const z of [98,106,114])for(const x of [-5.8,5.8]){rescueBox(x,.8,z,2.2,1.6,2.7,rescueIvory,true);rescueBox(x,1.75,z,1.6,.2,2.1,rescueBlue)}
for(let k=0;k<3;k++){const bed=rescueDanger(0,.52,100+k*6.2,2.8,1.04,1.3,k%2?rescuePurple:rescueAlarm);Object.assign(bed.userData,{move:'x',base:0,amp:4.1,speed:.5+k*.05,phase:k*1.7});movers.push(bed)}

// 05 访客登记迷宫：纯路线判断，不使用致命机关。
rescueLabel(4,'VISITOR CHECK-IN','#ffd993');
for(const [z,gap] of [[130,-4.4],[136,4.4],[142,-4.4],[148,4.4]]){for(const x of [-4.7,0,4.7])if(Math.abs(x-gap)>1.6)rescueBox(x,1.15,z,4.1,2.3,.55,rescuePurple,true)}
for(const [x,z] of [[-5.8,126],[5.8,139],[-5.8,146]])rescueBox(x,1.45,z,2,2.9,1.2,M.crate,true);

// 06 货运升降井：平台间距小于基础跳跃能力，钥匙和牢笼均落在宽平台上。
rescueLabel(5,'FREIGHT LIFT SHAFT','#f3bf68');rescueDanger(0,.03,165,13,.16,21,M.black);
for(const [x,z] of RESCUE_PLATFORM_ROUTES.freight)rescueBox(x,.36,z,3.4,.72,2.9,M.crate,true);
for(const x of [-6.2,6.2]){rescuePipe(x,2.2,165,22,'z',M.rust);rescueBox(x,4.2,165,1.4,8.4,5,rescueBlue,true)}

// 07 监控服务器层：低位扫描线与逐级平台组合，终点牢笼有完整承托。
rescueLabel(6,'SERVER SURVEILLANCE','#bba4ff');
for(const [x,z] of [[-5.7,187],[5.7,193],[-5.7,201],[5.7,207]]){rescueBox(x,1.8,z,2.2,3.6,2.3,rescuePurple,true);for(const y of [.7,1.5,2.3])rescueBox(x,y,z-1.18,1.4,.12,.12,rescueBlue)}
for(const [z,x] of [[191,-2.8],[198,2.8]])rescueDanger(x,.45,z,7.2,.15,.36,rescueAlarm);
rescueBox(-1.35,.2,185,3,.4,2.6,rescueIvory,true);rescueBox(0,.45,201,3.2,.9,2.8,M.crate,true);rescueBox(1.35,.7,205,3.2,1.4,3,rescueIvory,true);

// 08 垃圾压缩站：压缩块横移缓慢，通道两端与侧边始终保留安全区。
rescueLabel(7,'WASTE COMPACTOR','#ff9b78');
for(const [x,z] of [[-5.8,219],[5.8,225],[-5.8,232]])rescueBox(x,1.2,z,2.5,2.4,4,M.rust,true);
for(let k=0;k<3;k++){const press=rescueDanger(0,.72,220+k*7,3,1.44,1.5,k%2?M.rust:rescueAlarm);Object.assign(press.userData,{move:'x',base:0,amp:4.2,speed:.45+k*.05,phase:k*1.9});movers.push(press)}

// 09 排水泵房：浅水区采用连续宽踏板，不要求极限跳跃。
rescueLabel(8,'DRAINAGE PUMP ROOM','#72e3dd');rescueDanger(0,.03,257,13,.16,22,rescueSludge);
for(const [x,z] of RESCUE_PLATFORM_ROUTES.pump)rescueBox(x,.34,z,3.3,.68,2.8,rescueBlue,true);
for(const [x,z] of [[-5.7,250],[5.7,261]]){rescueBox(x,1.7,z,2.4,3.4,3.8,rescuePurple,true);rescuePipe(x,3.65,z,3.2,'y',rescueBlue)}

// 10 伪造证件库：档案柜与安检门交错，但每道门都有两倍身宽的缺口。
rescueLabel(9,'FORGED ID VAULT','#e6c9ff');
for(const [x,z] of [[-5.7,278],[5.7,283],[-5.7,290],[5.7,296]])for(const y of [.7,1.7,2.7])rescueBox(x,y,z,2.3,.72,1.4,y===1.7?rescuePurple:M.crate,true);
for(const [z,gap] of [[282,-4.5],[288,4.5],[294,-4.5]]){rescueBox(0,4.2,z,14,.36,.5,rescueBlue);for(let x=-5.7;x<=5.7;x+=1.4)if(Math.abs(x-gap)>1.45)rescueDanger(x,1.75,z,.28,3.5,.38,rescueAlarm)}

// 14 地下押运月台：与普通模式维修竖井完全不同，移动行李车仍保留宽阔侧路。
rescueLabel(13,'UNDERGROUND TRANSFER','#ffc66f');
rescueBox(0,.04,407,2.1,.08,23,rescueBlue);for(const x of [-6.2,6.2])rescueBox(x,.55,405,1.2,1.1,24,M.rust,true);
for(let k=0;k<3;k++){const cart=rescueDanger(0,.65,401+k*7,3.2,1.3,1.45,k%2?M.black:M.rust);Object.assign(cart.userData,{move:'x',base:0,amp:4.3,speed:.5+k*.06,phase:k*1.6});movers.push(cart)}
for(const [x,z] of [[-5.3,397],[5.3,405],[-5.3,415]])rescueBox(x,.8,z,2.2,1.6,3,M.crate,true);

// 数学模式：十二间独立教室，每间包含黑板、课桌椅与检查点。
const mathWorld=new THREE.Group(),mathCheckpoints=[],mathBoardQuestions=[];scene.add(mathWorld);mathWorld.visible=false;
function mathBox(x,y,z,w,h,d,m=M.brick,solid=false,shadow=true){const object=box(x,y,z,w,h,d,m,solid,shadow,mathWorld);object.userData.modes=['math'];return object}
for(let i=0;i<MODE_CONFIG.math.stageCount;i++){
  const base=i*STAGE_LENGTH,center=base+STAGE_LENGTH/2;
  mathBox(0,-.35,center,15,.7,STAGE_LENGTH,M.floor,true);mathBox(-7.5,4.8,center,.6,9.6,STAGE_LENGTH,M.brick,true);mathBox(7.5,4.8,center,.6,9.6,STAGE_LENGTH,M.brick,true);mathBox(0,ENCLOSED_CEILING_Y,center,15,.4,STAGE_LENGTH,M.brickDark,true);
  mathBox(0,3.2,base+20,8.8,4,.32,M.black);mathBox(0,1.18,base+19.78,9.5,.18,.55,M.crate);textSprite(`MATH  EXAM  ${String(i+1).padStart(2,'0')}`,0,6.15,base+19.6,.55,'#dff6d2',mathWorld);mathBoardQuestions.push(textSprite('等待梅东出题',0,3.35,base+19.72,.72,'#f0f5de',mathWorld));
  for(const row of [7,11,15])for(const x of [-3,0,3]){mathBox(x,.72,base+row,2.1,.18,1.15,M.crate);mathBox(x,1.25,base+row+.45,2,.9,.14,M.metal);for(const dx of [-.78,.78])mathBox(x+dx,.34,base+row,.12,.7,.12,M.metal)}
  mathBox(0,9.25,base+9,2.2,.18,.8,M.metal);mathBox(0,9.1,base+9,1.55,.08,.45,new THREE.MeshStandardMaterial({color:0xffd47a,emissive:0xffb02e,emissiveIntensity:2}));
}

// 实体检查点：底座、信标、旗杆、标题
function makeCheckpoint(i,parent=world,target=checkpoints,label='CHECKPOINT'){const z=i*STAGE_LENGTH+2,g=new THREE.Group();g.position.set(0,0,z);parent.add(g);const pad=box(0,.08,0,4.8,.16,2.5,M.greenOff,false,true,g);const rim=box(0,.2,0,3.9,.18,1.75,M.greenOff,false,true,g);const beacon=box(-2.05,1.1,0,.42,2.1,.42,M.greenOff,false,true,g);box(-2.05,2.1,0,1.15,.12,.12,M.bar,false,true,g);const flag=box(-1.55,1.72,0,.9,.55,.08,M.greenOff,false,true,g);const marker=textSprite(label,-4.25,2.55,.1,.38,'#bfff57',g);g.userData={pad,rim,beacon,flag,marker,index:i};target.push(g)}
for(let i=0;i<STAGE_COUNT;i++)makeCheckpoint(i);
for(let i=0;i<MODE_CONFIG.math.stageCount;i++)makeCheckpoint(i,mathWorld,mathCheckpoints,'DESK CHECKPOINT');

// 普通与拯救模式第 11～13 关共用：厕所入口、固定答案四选一隔间与下水道。
scene.updateMatrixWorld(true);
const originalToiletRegion=[],toiletRegionPosition=new THREE.Vector3();
for(const child of [...world.children]){child.getWorldPosition(toiletRegionPosition);if(!checkpoints.includes(child)&&toiletRegionPosition.z>=300&&toiletRegionPosition.z<390)originalToiletRegion.push(child)}
for(const object of [...solids,...hazards]){object.getWorldPosition(toiletRegionPosition);if(toiletRegionPosition.z>=300&&toiletRegionPosition.z<390)object.userData.modes=[]}

const escapeToiletWorld=new THREE.Group(),toiletDoors=[],toiletDoorColliders=[],toiletContents=[];world.add(escapeToiletWorld);escapeToiletWorld.visible=false;
const toiletWall=material('tile','#aeb7ae','#69736d'),toiletFloor=material('tile','#66716f','#343e3e'),toiletDoorMaterial=material('metal','#62736e','#263733'),toiletMedongBlue=material('stripe','#74c8ee','#f2f1e8'),sewerBrick=material('brick','#394b49','#1e302e'),toiletInvisible=new THREE.MeshBasicMaterial({transparent:true,opacity:0,depthWrite:false});
function toiletBox(x,y,z,w,h,d,m=M.white,solid=false,shadow=true,parent=escapeToiletWorld){const object=box(x,y,z,w,h,d,m,solid,shadow,parent);object.userData.modes=['escape','rescue'];return object}
function toiletSector(center,ceilingY=9.8,wallX=7.5){toiletBox(0,-.35,center,15,.7,30,toiletFloor,true);toiletBox(-wallX,4.8,center,.6,9.6,30,toiletWall,true);toiletBox(wallX,4.8,center,.6,9.6,30,toiletWall,true);toiletBox(0,ceilingY,center,15,.4,30,M.brickDark,true)}
toiletSector(315);toiletSector(345);
textSprite('PRISON  RESTROOM',0,6.4,304,.68,'#d9f1df',escapeToiletWorld);
toiletBox(0,.03,305,12,.08,2.2,M.black);toiletBox(0,.08,305,10.6,.1,1.45,M.white);
for(const z of [310,316,322]){
  toiletBox(-5.85,1,z,2.1,.32,1.4,M.white);toiletBox(-5.85,1.52,z+.42,1.4,1.15,.18,M.metal);toiletBox(-5.85,2.3,z+.46,1.65,1.05,.12,M.black);
  pipe(5.9,1.7,z,4.2,'y',M.rust,escapeToiletWorld);
}
textSprite('进入厕所  →',0,4.8,326,.56,'#f3d989',escapeToiletWorld);

const stallCenters=[-5.1,-1.7,1.7,5.1],stallDoorZ=344;
for(const dividerX of [-6.75,-3.4,0,3.4,6.75])toiletBox(dividerX,1.75,349,.18,3.5,10,toiletWall,true);
toiletBox(0,3.55,349,13.5,.22,10,toiletWall,true);toiletBox(0,1.8,354,13.5,3.6,.3,toiletWall,true);
textSprite('四扇门 · 只有一条生路',0,6.15,339,.55,'#ffdf82',escapeToiletWorld);
function buildToiletFixture(parent){toiletBox(0,.44,.35,1.1,.5,1.25,M.white,false,true,parent);toiletBox(0,.9,.78,1.05,1.2,.45,M.white,false,true,parent);toiletBox(0,.72,-.08,.72,.26,.8,M.black,false,true,parent)}
const toiletMedongFace=medongFaceMaterial();
for(const x of stallCenters){
  const pivot=new THREE.Group();pivot.position.set(x-1.08,0,stallDoorZ);escapeToiletWorld.add(pivot);const door=toiletBox(1.08,1.38,0,2.16,2.76,.18,toiletDoorMaterial,false,true,pivot);toiletBox(1.78,1.35,-.13,.13,.13,.15,M.greenOff,false,true,pivot);pivot.userData={targetRotation:0,door};toiletDoors.push(pivot);
  const collider=toiletBox(x,1.38,stallDoorZ,2.2,2.76,.24,toiletInvisible,true,false);collider.userData.dynamicBounds=true;toiletDoorColliders.push(collider);
  const tunnel=new THREE.Group(),corpse=new THREE.Group(),medong=new THREE.Group();for(const content of [tunnel,corpse,medong]){content.position.set(x,0,349);content.visible=false;escapeToiletWorld.add(content)}
  toiletBox(0,.025,0,2.15,.05,2.45,M.black,false,false,tunnel);for(const dx of [-1.18,1.18])toiletBox(dx,.12,0,.18,.24,2.7,M.rust,false,true,tunnel);textSprite('下水道入口',0,1.15,.3,.3,'#9ed9b5',tunnel);
  buildToiletFixture(corpse);toiletBox(0,1.25,.12,.72,.48,1.15,M.toxic,false,true,corpse);toiletBox(0,1.62,-.2,.64,.55,.62,M.skin,false,true,corpse);textSprite('☠  发臭',0,2.85,.3,.3,'#b7e05b',corpse);
  buildToiletFixture(medong);toiletBox(0,1.42,.33,1.02,1.05,.66,toiletMedongBlue,false,true,medong);toiletBox(0,2.2,.18,.76,.76,.7,[M.skin,M.skin,M.hair,M.skin,toiletMedongFace,M.skin],false,true,medong);toiletBox(0,2.55,.16,.8,.24,.72,M.hair,false,true,medong);toiletBox(-.55,1.45,.05,.26,.82,.3,M.skin,false,true,medong);toiletBox(.55,1.45,.05,.26,.82,.3,M.skin,false,true,medong);textSprite('梅东',0,3.15,.25,.28,'#8edcff',medong);
  toiletContents.push({tunnel,corpse,medong});
}

// 下水道保持足够的镜头空间，用低矮管线营造“爬行”感而不遮挡路线。
toiletBox(0,-.35,375,15,.7,30,sewerBrick,true);toiletBox(-5.2,4.8,375,.6,9.6,30,sewerBrick,true);toiletBox(5.2,4.8,375,.6,9.6,30,sewerBrick,true);toiletBox(0,9.8,375,10.8,.4,30,M.brickDark,true);
toiletBox(-5.95,1.2,375,1.05,2.4,30,M.water);toiletBox(5.95,1.2,375,1.05,2.4,30,M.water);for(const z of [366,374,382,388]){pipe(-4.55,2.2,z,8.5,'z',M.rust,escapeToiletWorld);toiletBox(0,.08,z,8.3,.16,.35,M.metal)}
textSprite('SEWER  ESCAPE  →',0,4.75,365,.58,'#9ed9b5',escapeToiletWorld);

const toiletState={layout:[...TOILET_LAYOUT],opened:-1,resolving:false,timers:[]};

// 方块囚犯角色：像素脸、囚服号码、鞋底
function faceMaterial(){const c=document.createElement('canvas');c.width=c.height=16;const q=c.getContext('2d');q.fillStyle='#d79a70';q.fillRect(0,0,16,16);q.fillStyle='#2b201c';q.fillRect(3,6,3,3);q.fillRect(10,6,3,3);q.fillRect(5,12,6,1);const t=new THREE.CanvasTexture(c);t.magFilter=THREE.NearestFilter;t.colorSpace=THREE.SRGBColorSpace;return new THREE.MeshStandardMaterial({map:t,roughness:1})}
function cube(w,h,d,m){const o=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),m);o.castShadow=true;return o}
const heroFace=faceMaterial(),hero=new THREE.Group();scene.add(hero);const body=cube(1.05,1.2,.65,M.orange),head=cube(.82,.82,.78,[M.skin,M.skin,M.hair,M.skin,heroFace,M.skin]),hair=cube(.86,.28,.81,M.hair),ponytail=cube(.36,.82,.38,M.hair),leg1=cube(.42,.72,.46,M.orange),leg2=cube(.42,.72,.46,M.orange),arm1=cube(.3,1.05,.36,M.skin),arm2=cube(.3,1.05,.36,M.skin),heroSleeve1=cube(.31,.36,.37,M.orange),heroSleeve2=cube(.31,.36,.37,M.orange),shoe1=cube(.44,.2,.58,M.black),shoe2=shoe1.clone();
body.position.y=1.25;head.position.y=2.27;hair.position.y=2.63;ponytail.position.set(0,2.28,-.48);ponytail.visible=false;leg1.position.set(-.29,.45,0);leg2.position.set(.29,.45,0);arm1.position.set(-.72,1.3,0);arm2.position.set(.72,1.3,0);heroSleeve1.position.y=.34;heroSleeve2.position.y=.34;arm1.add(heroSleeve1);arm2.add(heroSleeve2);shoe1.position.set(-.29,.12,.08);shoe2.position.set(.29,.12,.08);hero.add(body,head,hair,ponytail,leg1,leg2,arm1,arm2,shoe1,shoe2);

const nationalKits=new Map();
function colorCss(value){return `#${value.toString(16).padStart(6,'0')}`}
function nationalJerseyMaterial(player,view='front'){
  const c=document.createElement('canvas');c.width=c.height=32;const q=c.getContext('2d'),primary=colorCss(player.color),accent=colorCss(player.accent);q.imageSmoothingEnabled=false;q.fillStyle=primary;q.fillRect(0,0,32,32);
  if(player.team==='portugal'){q.fillStyle=accent;q.fillRect(0,0,7,32);q.fillRect(12,0,8,3);q.fillStyle='#e7c44a';q.fillRect(7,4,2,5)}
  else if(player.team==='brazil'){q.fillStyle=accent;q.fillRect(0,0,5,32);q.fillRect(27,0,5,32);q.fillRect(11,0,10,3);q.fillStyle='#2455a4';q.fillRect(14,4,4,3)}
  else if(player.team==='croatia'){for(let y=0;y<32;y+=8)for(let x=0;x<32;x+=8)if((x+y)/8%2===0){q.fillStyle=accent;q.fillRect(x,y,8,8)}q.fillStyle='#173f77';q.fillRect(11,0,10,3)}
  else if(player.team==='france'){q.fillStyle='#f3f1ea';q.fillRect(13,0,3,32);q.fillStyle=accent;q.fillRect(16,0,3,32);q.fillStyle='#d8b64a';q.fillRect(4,4,3,4)}
  else if(player.team==='england'){q.fillStyle=accent;q.fillRect(0,0,32,5);q.fillRect(0,5,5,4);q.fillRect(27,5,5,4);q.fillStyle='#c92938';q.fillRect(13,0,6,2)}
  else if(player.team==='norway'){q.fillStyle='#f2f1e9';q.fillRect(10,0,8,32);q.fillStyle=accent;q.fillRect(12,0,4,32);q.fillStyle='#f2f1e9';q.fillRect(0,8,32,7);q.fillStyle=accent;q.fillRect(0,10,32,3)}
  else if(player.team==='spain'){q.fillStyle=accent;q.fillRect(0,0,5,32);q.fillRect(27,0,5,32);q.fillRect(11,0,10,3);q.fillStyle='#263b70';q.fillRect(5,5,3,4)}
  if(view!=='side'){q.font=`900 ${view==='back'?18:13}px monospace`;q.textAlign='center';q.textBaseline='middle';q.lineWidth=3;q.strokeStyle=player.team==='brazil'||player.team==='croatia'||player.team==='england'?'#ffffff':'#101820';q.fillStyle=player.team==='brazil'?'#168447':player.team==='croatia'||player.team==='england'?'#1b2d50':'#ffffff';q.strokeText(String(player.number),16,view==='back'?18:20);q.fillText(String(player.number),16,view==='back'?18:20)}
  const texture=new THREE.CanvasTexture(c);texture.magFilter=THREE.NearestFilter;texture.minFilter=THREE.NearestMipmapLinearFilter;texture.colorSpace=THREE.SRGBColorSpace;return new THREE.MeshStandardMaterial({map:texture,roughness:.9})
}
function nationalKit(player){let kit=nationalKits.get(player.name);if(kit)return kit;const side=nationalJerseyMaterial(player,'side'),front=nationalJerseyMaterial(player,'front'),back=nationalJerseyMaterial(player,'back'),shorts=new THREE.MeshStandardMaterial({color:player.shortsColor,roughness:.92});kit={body:[side,side,side,shorts,front,back],shorts};nationalKits.set(player.name,kit);return kit}
const starMaterials=new Map();
function starMaterial(player,type){const key=`${player.name}-${type}`;if(starMaterials.has(key))return starMaterials.get(key);const appearance=player.appearance,color=type==='skin'?appearance.skin:type==='accent'?(appearance.hairAccent??appearance.hair):appearance.hair,mat=new THREE.MeshStandardMaterial({color,roughness:type==='skin'?1:.96});starMaterials.set(key,mat);return mat}
function canvasPolygon(q,points){q.beginPath();q.moveTo(...points[0]);for(const point of points.slice(1))q.lineTo(...point);q.closePath();q.fill()}
// 从用户提供的萝姐发型图直接二值化、缩放到 64×64 后得到的刘海行跨度。
// 发际线由立体模型负责；这里只绘制从第 15 行垂到眼睛附近的独立发束。
const BRO_FRINGE_ROWS=[
  [15,[[0,6],[17,46],[55,63]]],[16,[[0,6],[24,37],[45,48],[56,63]]],[17,[[0,6],[23,27],[34,37],[46,48],[56,63]]],
  [18,[[0,5],[22,26],[35,38],[47,49],[56,63]]],[19,[[0,5],[22,25],[35,38],[48,49],[57,63]]],[20,[[0,5],[22,25],[36,39],[48,50],[57,63]]],
  [21,[[0,5],[21,24],[36,39],[48,50],[58,63]]],[22,[[0,4],[21,24],[37,40],[49,50],[58,63]]],[23,[[0,4],[21,23],[37,40],[49,49],[58,63]]],
  [24,[[0,4],[21,23],[37,40],[49,49],[58,63]]],[25,[[0,5],[21,23],[37,40],[48,49],[58,63]]],[26,[[0,5],[21,23],[37,40],[48,48],[58,63]]],
  [27,[[0,5],[21,23],[38,40],[48,48],[58,63]]],[28,[[0,6],[22,23],[38,40],[47,47],[57,63]]],[29,[[0,2],[4,6],[22,23],[38,40],[56,58],[61,63]]],
  [30,[[0,2],[5,7],[23,24],[37,40],[56,56],[61,63]]],[31,[[0,2],[6,8],[23,24],[37,39],[62,63]]],[32,[[0,1],[9,9],[24,25],[37,39],[62,63]]],
  [33,[[37,39]]],[34,[[36,38]]],[35,[[36,37]]],[36,[[36,37]]],[37,[[35,36]]],[38,[[34,35]]],[39,[[33,34]]],[40,[[31,32]]],
];
function paintFineFringe(q,player){q.fillStyle=colorCss(player.appearance.hair);
  if(player.name==='萝姐'){
    for(const [y,spans] of BRO_FRINGE_ROWS)for(const [x0,x1] of spans)q.fillRect(x0,y,x1-x0+1,1);
  }else if(player.name==='德克米'){
    canvasPolygon(q,[[25,9],[31,10],[31,18],[29,25],[26,21]]);canvasPolygon(q,[[34,9],[40,10],[39,18],[36,25],[34,20]]);
  }else if(player.name==='白雪公主-卡'){
    // KK.JPG 的大块妹妹头：用像素阶梯画圆弧分束，刘海只落到眼睛上沿。
    q.fillRect(8,8,48,10);
    const paintSpans=(rows)=>{for(const [y,x0,x1] of rows)q.fillRect(x0,y,x1-x0+1,1)};
    paintSpans([
      [15,9,20],[16,9,21],[17,10,22],[18,11,23],[19,12,24],[20,13,25],[21,14,25],
      [22,15,26],[23,16,26],[24,17,26],[25,18,25],[26,19,24],[27,20,23],[28,21,22],[29,21,22]
    ]);
    paintSpans([
      [14,23,35],[15,23,36],[16,24,36],[17,25,37],[18,26,37],[19,27,38],[20,28,38],
      [21,29,38],[22,30,38],[23,30,37],[24,31,36],[25,31,35],[26,31,34],[27,31,33],[28,31,32],[29,31,32]
    ]);
    paintSpans([
      [15,38,51],[16,39,52],[17,40,53],[18,41,54],[19,42,55],[20,43,55],[21,44,54],
      [22,45,53],[23,46,52],[24,46,51],[25,47,50],[26,48,50],[27,48,49],[28,48,49],[29,48,49]
    ]);
  }else if(player.name==='小马宝莉'){
    canvasPolygon(q,[[11,13],[23,14],[31,21],[27,31],[20,28],[14,37]]);canvasPolygon(q,[[42,14],[54,12],[50,29],[44,35]]);
  }
}
function paintPixelBeard(q,color){q.fillStyle=colorCss(color);
  // 短络腮胡沿两侧下颌收拢，嘴上方保留两小段胡须，避免遮住统一的微笑表情。
  for(const [x,y,w,h] of [[13,42,4,11],[47,42,4,11],[16,51,4,6],[44,51,4,6],[20,55,5,5],[39,55,5,5],[25,58,14,4],[23,46,8,2],[34,46,8,2]])q.fillRect(x,y,w,h);
}
function starFaceMaterial(player){const key=`${player.name}-${STAR_FACE_STYLE}`;if(starMaterials.has(key))return starMaterials.get(key);const a=player.appearance,c=document.createElement('canvas');c.width=c.height=STAR_FACE_TEXTURE_SIZE;const q=c.getContext('2d');q.imageSmoothingEnabled=false;q.fillStyle=colorCss(a.skin);q.fillRect(0,0,STAR_FACE_TEXTURE_SIZE,STAR_FACE_TEXTURE_SIZE);
  paintFineFringe(q,player);
  // 全员统一的极简 Roblox 像素脸；有胡须的角色仍保留清楚的豆豆眼和微笑。
  q.fillStyle='#241b18';q.fillRect(18,31,3,7);q.fillRect(43,31,3,7);
  if(a.beard)paintPixelBeard(q,a.beard);
  q.fillStyle='#241b18';
  for(const [x,y,w] of [[17,48,3],[20,51,3],[23,53,4],[27,55,10],[37,53,4],[41,51,3],[44,48,3]])q.fillRect(x,y,w,2);
  const texture=new THREE.CanvasTexture(c);texture.magFilter=THREE.NearestFilter;texture.minFilter=THREE.NearestMipmapLinearFilter;texture.colorSpace=THREE.SRGBColorSpace;const mat=new THREE.MeshStandardMaterial({map:texture,roughness:1});starMaterials.set(key,mat);return mat
}
const HAIR_FRONT_PROFILES={
  'swept-forelock':[{depth:.085,points:[[-.54,.54],[.54,.54],[.54,.29],[.49,.27],[.39,.3],[.27,.27],[.14,.3],[.02,.27],[-.11,.3],[-.25,.27],[-.39,.3],[-.5,.27],[-.54,.29]]}],
  'spiky-highlight-crop':[{points:[[-.55,.08],[-.62,.22],[-.5,.29],[-.47,.51],[-.34,.74],[-.21,.49],[-.04,.75],[.09,.49],[.25,.78],[.36,.5],[.47,.68],[.5,.31],[.62,.24],[.54,.08]]}],
  'dark-golden-pageboy':[
    {points:[[-.56,.7],[-.02,.7],[-.01,.42],[-.12,.3],[-.28,.12],[-.48,-.38],[-.56,-.28]]},
    {points:[[.02,.7],[.56,.7],[.56,-.28],[.48,-.38],[.28,.12],[.12,.3],[.01,.42]]},
  ],
  'bleached-tight-curls':[
    {material:'accent',points:[[-.56,.34],[.56,.34],[.56,.08],[-.56,.08]]},
    {points:[[-.58,.33],[-.51,.52],[-.42,.39],[-.34,.61],[-.25,.4],[-.16,.64],[-.07,.4],[.04,.66],[.13,.4],[.23,.61],[.32,.4],[.42,.59],[.49,.4],[.58,.49],[.55,.29],[-.55,.29]]},
  ],
  'fluffy-curls':[{points:[[-.55,.12],[-.58,.33],[-.48,.5],[-.37,.66],[-.24,.5],[-.08,.75],[.1,.48],[.26,.61],[.43,.48],[.55,.58],[.58,.31],[.5,.08],[.42,.2],[.18,.19],[.06,.13],[-.15,.19],[-.34,.19],[-.47,.06]]}],
  'rounded-curly-top':[{points:[[-.55,.1],[-.55,.53],[-.47,.69],[-.38,.51],[-.28,.75],[-.18,.51],[-.06,.72],[.04,.5],[.16,.7],[.27,.49],[.39,.66],[.48,.48],[.55,.55],[.55,.1],[.49,.18],[-.49,.18]]}],
  'blond-side-sweep':[{points:[[-.55,.08],[-.55,.5],[-.43,.66],[-.27,.82],[-.08,.57],[.06,.69],[.27,.52],[.55,.51],[.55,.08],[.49,.18],[-.45,.19]]}],
  'close-crop':[{points:[[-.55,.12],[-.55,.51],[.55,.51],[.55,.12]]}],
  'short-blond-brush':[{points:[[-.55,.12],[-.55,.5],[.55,.5],[.55,.12]]}],
  'messy-short-crop':[{points:[[-.55,.12],[-.55,.46],[-.44,.62],[-.28,.46],[-.12,.56],[.02,.47],[.17,.61],[.31,.46],[.46,.57],[.55,.45],[.55,.12],[.48,.18],[-.48,.18]]}],
  'short-curly-crop':[{points:[[-.55,.1],[-.55,.48],[-.42,.61],[-.3,.5],[-.18,.68],[-.04,.52],[.1,.67],[.23,.5],[.38,.62],[.55,.48],[.55,.1],[.48,.18],[-.48,.18]]}],
  'short-slick-back':[{points:[[-.55,.1],[-.55,.48],[-.38,.64],[-.16,.6],[.1,.72],[.34,.54],[.55,.48],[.55,.1],[.48,.18],[-.48,.18]]}],
  'short-side-sweep':[{points:[[-.55,.1],[-.55,.48],[-.38,.62],[-.08,.78],[.25,.58],[.55,.48],[.55,.1],[.48,.18],[-.48,.18]]}],
  'short-textured-crop':[{points:[[-.55,.1],[-.55,.5],[-.4,.64],[-.25,.52],[-.1,.66],[.06,.53],[.22,.66],[.4,.5],[.55,.54],[.55,.1],[.48,.18],[-.48,.18]]}],
  'lms-short-undercut':[{points:[[-.55,.18],[-.55,.5],[-.42,.62],[-.25,.55],[-.08,.65],[.12,.56],[.32,.64],[.55,.5],[.55,.18],[.38,.22],[.18,.28],[0,.24],[-.2,.28],[-.4,.22]]}],
  'kk-long-fringe':[{points:[[-.55,.1],[-.55,.56],[-.4,.62],[-.22,.5],[-.08,.68],[.08,.52],[.25,.72],[.55,.58],[.55,.1],[.45,-.02],[.34,-.25],[.2,-.08],[.04,-.32],[-.1,-.08],[-.26,-.28],[-.4,-.04]]}],
  'painted-kk-fringe':[],
  'kk-modeled-crown':[{points:[[-.55,.1],[-.55,.52],[-.42,.62],[-.26,.69],[-.08,.61],[.08,.68],[.28,.6],[.44,.64],[.55,.52],[.55,.1],[.48,.18],[-.48,.18]]}],
  'edg-flat-crop':[{points:[[-.55,.18],[-.55,.5],[-.4,.58],[-.28,.69],[-.12,.6],[.04,.7],[.2,.6],[.36,.67],[.55,.54],[.55,.18],[.35,.22],[.12,.23],[-.12,.22],[-.35,.23]]}],
  'bzm-widow':[{points:[[-.55,.12],[-.55,.5],[-.4,.6],[-.22,.55],[-.08,.62],[0,.48],[.08,.62],[.26,.55],[.44,.6],[.55,.5],[.55,.12],[.34,.18],[.16,.12],[0,-.06],[-.16,.12],[-.35,.18]]}],
  'bald':[],
  'medong-side-part':[{points:[[-.55,.08],[-.55,.45],[-.43,.61],[-.3,.55],[-.02,.78],[.4,.47],[.55,.2],[.5,.08],[.43,.18],[-.43,.18]]}],
};
function createHairSilhouette(points,width,height,material,z=.356,depth=0){const shape=new THREE.Shape();shape.moveTo(points[0][0]*width,points[0][1]*height);for(const [x,y] of points.slice(1))shape.lineTo(x*width,y*height);shape.closePath();const geometry=depth>0?new THREE.ExtrudeGeometry(shape,{depth,steps:1,bevelEnabled:false}):new THREE.ShapeGeometry(shape),mesh=new THREE.Mesh(geometry,material);mesh.position.z=z;mesh.castShadow=true;mesh.name=depth>0?'modeled-thick-front-hair':'front-hair-silhouette';return mesh}
function createModeledSideHair(width,height,depth,material){const shape=new THREE.Shape();shape.moveTo(-depth/2,-height/2);shape.lineTo(-depth/2,height/2);shape.lineTo(depth/2,height/2);shape.lineTo(depth/2,height*.3);shape.closePath();const geometry=new THREE.ShapeGeometry(shape),sideMaterial=material.clone();sideMaterial.side=THREE.DoubleSide;const group=new THREE.Group(),left=new THREE.Mesh(geometry,sideMaterial),right=new THREE.Mesh(geometry,sideMaterial);left.position.x=-width/2-.006;left.rotation.y=-Math.PI/2;right.position.x=width/2+.006;right.rotation.y=Math.PI/2;right.scale.x=-1;for(const [mesh,name] of [[left,'modeled-left-side-hair'],[right,'modeled-right-side-hair']]){mesh.name=name;mesh.castShadow=true;group.add(mesh)}group.userData={referenceProfile:'rear-bottom-to-front-30-percent',hairColor:material.color.getHex()};return group}
function createStarHead(player){const a=player.appearance,group=new THREE.Group(),skin=starMaterial(player,'skin'),hairMat=starMaterial(player,'hair'),accent=starMaterial(player,'accent'),crownMat=a.style==='bleached-tight-curls'?accent:hairMat,headMesh=cube(a.faceWidth,a.faceHeight,.7,[skin,skin,crownMat,skin,starFaceMaterial(player),skin]),top=a.faceHeight/2;group.add(headMesh);
  for(const part of HAIR_FRONT_PROFILES[a.style]||[])group.add(createHairSilhouette(part.points,a.faceWidth,a.faceHeight,part.material==='accent'?accent:hairMat,.356,part.depth??0));
  const crown=cube(a.faceWidth+.035,.12,.72,crownMat);crown.position.set(0,top+.045,-.02);group.add(crown);
  if(a.style==='dark-golden-pageboy'){const sideL=cube(.1,.62,.65,hairMat),sideR=sideL.clone(),bobBack=cube(a.faceWidth+.04,.64,.1,hairMat);sideL.position.set(-a.faceWidth/2-.035,top-.25,-.03);sideR.position.set(a.faceWidth/2+.035,top-.25,-.03);bobBack.position.set(0,top-.25,-.4);group.add(sideL,sideR,bobBack)}
  else if(a.style!=='bald'){const fullBack=cube(a.faceWidth+.035,a.faceHeight+.02,.1,crownMat);fullBack.position.set(0,0,-.4);fullBack.name='modeled-full-short-hair-back';group.add(fullBack,createModeledSideHair(a.faceWidth,a.faceHeight,.7,hairMat))}
  group.userData={headMesh,style:a.style,faceStyle:STAR_FACE_STYLE,hairConstruction:a.style==='dark-golden-pageboy'?'modeled-short-pageboy':'modeled-front-plus-full-short-back'};return group
}
const heroStarHeads=RESCUE_PLAYERS.map(player=>{const starHead=createStarHead(player);starHead.position.y=2.27;starHead.scale.setScalar(1.1);starHead.visible=false;hero.add(starHead);return starHead});

// 拯救模式：十个笼子、区域钥匙，以及获救后持续跟随的球员。
const rescueContent=new THREE.Group(),rescueCages=[],rescueKeys=[],rescueFollowers=[];world.add(rescueContent);rescueContent.visible=false;
for(const [i,player] of RESCUE_PLAYERS.entries()){
  const cage=new THREE.Group(),key=new THREE.Group(),rawPlacement=RESCUE_PLACEMENTS[i],placement=i===0?rawPlacement:{key:[rawPlacement.key[0],rawPlacement.key[1],rawPlacement.key[2]-30],cage:[rawPlacement.cage[0],rawPlacement.cage[1],rawPlacement.cage[2]-30]};cage.position.set(...placement.cage);key.position.set(...placement.key);rescueContent.add(cage,key);
  box(0,.12,0,3.1,.24,2.6,M.metal,false,true,cage);for(const x of [-1.4,-.7,0,.7,1.4])box(x,1.65,0,.12,3.1,2.45,M.bar,false,true,cage);box(0,3.16,0,3.1,.18,2.6,M.rust,false,true,cage);textSprite(`营救 ${player.name}`,0,4.15,0,.36,'#ffd76c',cage);
  box(0,.12,0,.95,.24,.34,M.green,false,true,key);box(.48,.12,0,.38,.18,.18,M.green,false,true,key);box(-.43,.12,0,.22,.65,.22,M.green,false,true,key);textSprite('KEY',0,1.35,0,.28,'#d7ff67',key);
  const follower=new THREE.Group(),kit=nationalKit(player),playerSkin=starMaterial(player,'skin'),sleeveMaterial=nationalJerseyMaterial(player,'side'),fBody=cube(.92,1,.62,kit.body),fHead=createStarHead(player),fLeg1=cube(.34,.65,.4,kit.shorts),fLeg2=cube(.34,.65,.4,kit.shorts),fArm1=cube(.25,.82,.32,playerSkin),fArm2=cube(.25,.82,.32,playerSkin),fSleeve1=cube(.26,.28,.33,sleeveMaterial),fSleeve2=cube(.26,.28,.33,sleeveMaterial);
  fSleeve1.position.y=.27;fSleeve2.position.y=.27;fArm1.add(fSleeve1);fArm2.add(fSleeve2);if(player.appearance.sleeve==='long'){fSleeve1.scale.y=fSleeve2.scale.y=2.8;fSleeve1.position.y=fSleeve2.position.y=0}fBody.position.y=1.25;fHead.position.y=2.08;fLeg1.position.set(-.25,.43,0);fLeg2.position.set(.25,.43,0);fArm1.position.set(-.62,1.25,0);fArm2.position.set(.62,1.25,0);follower.add(fBody,fHead,fLeg1,fLeg2,fArm1,fArm2);textSprite(player.name,0,3,0,.28,'#ffffff',follower);follower.visible=false;follower.userData={fLeg1,fLeg2,fArm1,fArm2,index:i};scene.add(follower);rescueFollowers.push(follower);rescueCages.push(cage);rescueKeys.push(key);
}

// 阿根廷蓝白 10 号“梅东”：参考图侧分短发，豆豆眼微笑脸配深棕色短胡须。
function medongFaceMaterial(){const c=document.createElement('canvas');c.width=c.height=STAR_FACE_TEXTURE_SIZE;const q=c.getContext('2d');q.imageSmoothingEnabled=false;q.fillStyle='#d79a70';q.fillRect(0,0,STAR_FACE_TEXTURE_SIZE,STAR_FACE_TEXTURE_SIZE);q.fillStyle='#241b18';q.fillRect(18,31,3,7);q.fillRect(43,31,3,7);paintPixelBeard(q,MEDONG_APPEARANCE.beard);q.fillStyle='#241b18';for(const [x,y,w] of [[17,48,3],[20,51,3],[23,53,4],[27,55,10],[37,53,4],[41,51,3],[44,48,3]])q.fillRect(x,y,w,2);const t=new THREE.CanvasTexture(c);t.magFilter=THREE.NearestFilter;t.minFilter=THREE.NearestMipmapLinearFilter;t.colorSpace=THREE.SRGBColorSpace;return new THREE.MeshStandardMaterial({map:t,roughness:1})}
function medongJerseyMaterial(back=false){const c=document.createElement('canvas');c.width=c.height=32;const q=c.getContext('2d');q.fillStyle='#f2f1e8';q.fillRect(0,0,32,32);q.fillStyle='#74c8ee';for(let x=0;x<32;x+=12)q.fillRect(x,0,7,32);q.fillStyle='#172d4f';q.fillRect(12,0,8,3);q.font=`900 ${back?18:12}px monospace`;q.textAlign='center';q.textBaseline='middle';q.fillText('10',16,back?18:20);q.fillStyle='#d7af37';q.fillRect(14,5,4,3);const t=new THREE.CanvasTexture(c);t.magFilter=THREE.NearestFilter;t.minFilter=THREE.NearestMipmapLinearFilter;t.colorSpace=THREE.SRGBColorSpace;return new THREE.MeshStandardMaterial({map:t,roughness:.9})}
const argentinaBlue=new THREE.MeshStandardMaterial({color:0x74c8ee,roughness:.9}),argentinaWhite=new THREE.MeshStandardMaterial({color:0xf2f1e8,roughness:.95}),argentinaNavy=new THREE.MeshStandardMaterial({color:0x162c50,roughness:.9}),medongHair=new THREE.MeshStandardMaterial({color:0x050505,roughness:1}),medongFront=medongJerseyMaterial(),medongBack=medongJerseyMaterial(true),hunter=new THREE.Group(),medongRig=new THREE.Group();scene.add(hunter);hunter.add(medongRig);
const hBody=cube(1.12,1.12,.7,[argentinaBlue,argentinaBlue,argentinaWhite,argentinaNavy,medongFront,medongBack]),hHead=cube(.86,.84,.8,[M.skin,M.skin,medongHair,M.skin,medongFaceMaterial(),M.skin]),hHair=cube(.88,.25,.82,medongHair),hBackHair=cube(.89,.86,.1,medongHair),hShorts=cube(1.08,.38,.7,argentinaNavy),hLeg1=cube(.42,.7,.46,argentinaWhite),hLeg2=cube(.42,.7,.46,argentinaWhite),hArm1=cube(.31,.96,.37,M.skin),hArm2=cube(.31,.96,.37,M.skin),hSleeve1=cube(.32,.32,.38,argentinaBlue),hSleeve2=cube(.32,.32,.38,argentinaBlue),hShoe1=cube(.45,.2,.6,M.black),hShoe2=hShoe1.clone();
const hFrontHair=createHairSilhouette(HAIR_FRONT_PROFILES['medong-side-part'][0].points,.86,.84,medongHair,.406);hHead.add(hFrontHair);
const hSideHair=createModeledSideHair(.86,.84,.8,medongHair);hHead.add(hSideHair);
hBackHair.position.set(0,2.3,-.45);hBackHair.name='modeled-full-short-hair-back';hBody.position.y=1.45;hHead.position.y=2.3;hHair.position.y=2.67;hShorts.position.y=.88;hLeg1.position.set(-.3,.47,0);hLeg2.position.set(.3,.47,0);hArm1.position.set(-.75,1.48,0);hArm2.position.set(.75,1.48,0);hSleeve1.position.y=.3;hSleeve2.position.y=.3;hArm1.add(hSleeve1);hArm2.add(hSleeve2);hShoe1.position.set(-.3,.12,.1);hShoe2.position.set(.3,.12,.1);medongRig.add(hBody,hHead,hHair,hBackHair,hShorts,hLeg1,hLeg2,hArm1,hArm2,hShoe1,hShoe2);const hunterName=textSprite('★ 10  梅东',0,3.38,0,.38,'#8edcff',medongRig);
const heroMedongFrontHair=createHairSilhouette(HAIR_FRONT_PROFILES['medong-side-part'][0].points,.82,.82,medongHair,.396);heroMedongFrontHair.position.y=2.27;heroMedongFrontHair.visible=false;hero.add(heroMedongFrontHair);
const heroMedongBackHair=cube(.855,.84,.1,medongHair);heroMedongBackHair.position.set(0,2.27,-.44);heroMedongBackHair.visible=false;heroMedongBackHair.name='modeled-full-short-hair-back';hero.add(heroMedongBackHair);
const heroMedongSideHair=createModeledSideHair(.82,.82,.78,medongHair);heroMedongSideHair.position.y=2.27;heroMedongSideHair.visible=false;hero.add(heroMedongSideHair);
const SKIN_PROFILE_KEY='block-break-skin-profile-v1';
function loadSkinProfile(){try{const saved=JSON.parse(localStorage.getItem(SKIN_PROFILE_KEY)||'{}');return{claimedMedong:Boolean(saved.claimedMedong),rescueCompleted:Boolean(saved.rescueCompleted),rosisterCompleted:Boolean(saved.rosisterCompleted),selected:typeof saved.selected==='string'?saved.selected:'prisoner'}}catch{return{claimedMedong:false,rescueCompleted:false,rosisterCompleted:false,selected:'prisoner'}}}
const skinProfile=loadSkinProfile();
function saveSkinProfile(){try{localStorage.setItem(SKIN_PROFILE_KEY,JSON.stringify(skinProfile))}catch{}}
function availableSkinIds(){return new Set(unlockedSkinIds(skinProfile))}
function applyHeroSkin(){const available=availableSkinIds();if(!available.has(skinProfile.selected))skinProfile.selected='prisoner';const skin=SKIN_CATALOG.find(item=>item.id===skinProfile.selected)||SKIN_CATALOG[0];for(const starHead of heroStarHeads)starHead.visible=false;heroMedongFrontHair.visible=heroMedongBackHair.visible=heroMedongSideHair.visible=false;head.visible=hair.visible=true;ponytail.visible=skin.id==='ponytail';arm1.material=arm2.material=M.skin;heroSleeve1.material=heroSleeve2.material=M.orange;heroSleeve1.scale.y=heroSleeve2.scale.y=1;heroSleeve1.position.y=heroSleeve2.position.y=.34;shoe1.material=shoe2.material=M.black;
  if(skin.id==='medong'){body.material=hBody.material;leg1.material=leg2.material=argentinaWhite;head.material=hHead.material;hair.material=ponytail.material=medongHair;heroMedongFrontHair.visible=heroMedongBackHair.visible=heroMedongSideHair.visible=true;heroSleeve1.material=heroSleeve2.material=argentinaBlue}
  else if(skin.kind==='rescue'){const index=Number(skin.id.split('-')[1]),player=RESCUE_PLAYERS[index],kit=nationalKit(player);body.material=kit.body;leg1.material=leg2.material=kit.shorts;head.visible=hair.visible=ponytail.visible=false;heroStarHeads[index].visible=true;arm1.material=arm2.material=starMaterial(player,'skin');heroSleeve1.material=heroSleeve2.material=nationalJerseyMaterial(player,'side');if(player.appearance.sleeve==='long'){heroSleeve1.scale.y=heroSleeve2.scale.y=2.8;heroSleeve1.position.y=heroSleeve2.position.y=0}}
  else{body.material=leg1.material=leg2.material=M.orange;head.material=[M.skin,M.skin,M.hair,M.skin,heroFace,M.skin];hair.material=ponytail.material=M.hair}
  selectedSkinName.textContent=skin.name;saveSkinProfile()
}
const mechFrame=new THREE.Group(),mechLeftArm=new THREE.Group(),mechRightArm=new THREE.Group();hunter.add(mechFrame);mechFrame.visible=false;
const mechDark=material('metal','#202c34','#61727d'),mechSteel=material('metal','#51616b','#a7bac2'),mechGlass=new THREE.MeshStandardMaterial({color:0x224f62,roughness:.25,metalness:.3,transparent:true,opacity:.72,emissive:0x0d718e,emissiveIntensity:.55}),mechLeftBlue=material('metal','#317ca2','#82dcff',0x12425b),mechRightBlue=material('metal','#317ca2','#82dcff',0x12425b),mechWeak=material('stripe','#d58519','#ffe063',0x8a3c00);
box(0,1.7,0,2.65,1.65,1.75,mechDark,false,true,mechFrame);box(0,2.55,.08,2.05,1.25,1.35,mechGlass,false,true,mechFrame);box(0,3.28,0,2.5,.22,1.55,mechSteel,false,true,mechFrame);
for(const x of [-.82,.82]){box(x,.58,0,.75,1.75,.85,mechSteel,false,true,mechFrame);box(x,.12,.2,1.05,.32,1.5,mechDark,false,true,mechFrame)}
mechLeftArm.position.set(-1.75,2.12,0);mechRightArm.position.set(1.75,2.12,0);mechFrame.add(mechLeftArm,mechRightArm);
for(const [arm,materialArm,side] of [[mechLeftArm,mechLeftBlue,-1],[mechRightArm,mechRightBlue,1]]){box(0,0,0,1.25,1.05,1.2,materialArm,false,true,arm);box(side*.05,-1,0,.72,1.25,.72,materialArm,false,true,arm);box(side*.05,-1.78,.12,1.05,.55,1.15,mechDark,false,true,arm);box(0,.05,-.66,.55,.55,.18,mechWeak,false,true,arm)}
box(0,1.62,-.98,1.5,.55,.35,M.hazard,false,true,mechFrame);textSprite('MEDONG MECH',0,4.25,0,.38,'#ffb94d',mechFrame);
const moneyGunModel=new THREE.Group();moneyGunModel.visible=false;moneyGunModel.position.set(.7,1.42,.28);moneyGunModel.rotation.set(0,0,-.2);hero.add(moneyGunModel);box(0,0,0,.85,.34,.32,M.green,false,true,moneyGunModel);box(.52,0,0,.5,.18,.18,M.metal,false,true,moneyGunModel);box(-.18,-.32,0,.22,.5,.22,M.black,false,true,moneyGunModel);
const moneyBulletGeometry=new THREE.BoxGeometry(.42,.035,.22),moneyBulletMaterial=new THREE.MeshBasicMaterial({color:0xc9ff65}),moneyBullets=[];
const hunterWarning=new THREE.Mesh(new THREE.RingGeometry(.9,1.25,16),new THREE.MeshBasicMaterial({color:0xff3b24,transparent:true,opacity:.72,side:THREE.DoubleSide,depthWrite:false}));hunterWarning.rotation.x=-Math.PI/2;hunterWarning.position.y=.035;hunterWarning.visible=false;hunter.add(hunterWarning);hunter.visible=false;
const encounterStages=[1,3,6,8,9,11,13,15,17,19],lockGates=new Map(),invisible=new THREE.MeshBasicMaterial({transparent:true,opacity:0,depthWrite:false});
function makeLockGate(stage){const g=new THREE.Group();g.position.set(0,0,(stage+1)*STAGE_LENGTH-1);world.add(g);for(let x=-6.2;x<=6.2;x+=1.15)box(x,2.2,0,.22,4.4,.22,M.bar,false,true,g);box(0,4.35,0,13.3,.35,.45,M.rust,false,true,g);const collider=box(0,2.2,0,13.4,4.4,.35,invisible,true,false,g);collider.userData.dynamicBounds=true;collider.userData.modes=['escape','rescue'];g.userData={collider,targetY:0,locked:true,stage};lockGates.set(stage,g)}
encounterStages.forEach(makeLockGate);

const boundsCache=new WeakMap(),stagePosition=new THREE.Vector3();
scene.updateMatrixWorld(true);
for(const object of [...solids,...hazards]){
  object.getWorldPosition(stagePosition);
  object.userData.stageIndex=THREE.MathUtils.clamp(Math.floor(stagePosition.z/STAGE_LENGTH),0,LAST_STAGE);
  if(object.userData.stageIndex<5&&object.userData.modes?.includes('escape'))object.userData.modes.push('rosister');
}
function objectBounds(object){
  let bounds=boundsCache.get(object);
  if(!bounds){bounds=new THREE.Box3();boundsCache.set(object,bounds)}
  const dynamic=object.userData.dynamicBounds||object.userData.move||object.parent?.userData.rotate;
  if(dynamic||!object.userData.boundsReady){bounds.setFromObject(object);object.userData.boundsReady=true}
  return bounds;
}
function objectEnabledForMode(object){return !object.userData.modes||object.userData.modes.includes(state.mode)}

const state={mode:'escape',started:false,won:false,paused:false,pauseStarted:0,wonTime:0,stage:0,start:0,checkpoint:new THREE.Vector3(0,.02,2),velocity:new THREE.Vector3(),grounded:true,coyote:.1,jumpBuffer:0,yaw:0,pitch:.48,cameraDistance:8,keys:{},last:0,attackCooldown:0,attackAnim:0,combo:0,comboTimer:0,invulnerable:0,moneyGun:false,mathQuestion:null};
const hunterState={active:false,hp:100,maxHp:100,stage:-1,stun:0,mode:'idle',modeTimer:0,steerSign:1,hitFlash:0,lastUiMode:'',isMech:false,isRosister:false,armMaxHp:100,leftArmHp:100,rightArmHp:100};
const rescueState={keys:new Set(),rescued:new Set(),reminderCooldown:0,allyCooldown:0};
const rosisterState={question:null,answerOpen:false,remaining:0,selected:''};
const rescueDesired=new THREE.Vector3();
const activeConfig=()=>MODE_CONFIG[state.mode],activeStageCount=()=>activeConfig().stageCount,activeLastStage=()=>activeStageCount()-1,activeFinishZ=()=>state.mode==='escape'?FINISH_Z:activeStageCount()*STAGE_LENGTH+2,activeNames=()=>modeStageNames[state.mode],activeMissions=()=>modeMissions[state.mode],activeCheckpoints=()=>state.mode==='math'?mathCheckpoints:checkpoints.slice(0,activeStageCount());
const UP=new THREE.Vector3(0,1,0),viewForward=new THREE.Vector3(),viewRight=new THREE.Vector3(),moveDirection=new THREE.Vector3(),oldHeroPosition=new THREE.Vector3(),hunterDelta=new THREE.Vector3(),hunterSide=new THREE.Vector3(),hunterProbe=new THREE.Vector3(),attackDelta=new THREE.Vector3(),cameraTarget=new THREE.Vector3(),cameraOffset=new THREE.Vector3(),cameraDesired=new THREE.Vector3(),cameraDirection=new THREE.Vector3(),cameraCandidates=[],leftArmWorld=new THREE.Vector3(),rightArmWorld=new THREE.Vector3(),aimProjection=new THREE.Vector3(),shotStart=new THREE.Vector3(),shotEnd=new THREE.Vector3(),hazardCenter=new THREE.Vector3(),hazardQuaternion=new THREE.Quaternion(),hazardEuler=new THREE.Euler();
let hunterSpawnTimer=0;
const stageEl=document.querySelector('#stage'),bar=document.querySelector('#bar'),missionEl=document.querySelector('#missionText'),toast=document.querySelector('#toast'),timeEl=document.querySelector('#time'),hunterHud=document.querySelector('#hunterHud'),hunterTitle=document.querySelector('#hunterTitle'),hunterMainBar=document.querySelector('#hunterMainBar'),hunterHp=document.querySelector('#hunterHp'),hunterHpText=document.querySelector('#hunterHpText'),hunterIntent=document.querySelector('#hunterIntent'),mechArms=document.querySelector('#mechArms'),leftArmHp=document.querySelector('#leftArmHp'),rightArmHp=document.querySelector('#rightArmHp'),weaponHud=document.querySelector('#weaponHud'),aimReticle=document.querySelector('#aimReticle'),attackButton=document.querySelector('#attack'),attackLabel=document.querySelector('#attackLabel'),rescueHud=document.querySelector('#rescueHud'),rescueBuffsEl=document.querySelector('#rescueBuffs'),mathPanel=document.querySelector('#mathPanel'),mathQuestionEl=document.querySelector('#mathQuestion'),mathAnswer=document.querySelector('#mathAnswer'),rosisterPanel=document.querySelector('#rosisterPanel'),rosisterQuestionEl=document.querySelector('#rosisterQuestion'),rosisterChoicesEl=document.querySelector('#rosisterChoices'),rosisterAnswer=document.querySelector('#rosisterAnswer'),rosisterTimer=document.querySelector('#rosisterTimer'),pauseMenu=document.querySelector('#pauseMenu'),qualitySelect=document.querySelector('#quality'),fpsReadout=document.querySelector('#fpsReadout'),winTitle=document.querySelector('#winTitle'),winCopy=document.querySelector('#winCopy'),skinsPanel=document.querySelector('#skinsPanel'),skinReward=document.querySelector('#skinReward'),skinGrid=document.querySelector('#skinGrid'),selectedSkinName=document.querySelector('#selectedSkinName'),unlockReward=document.querySelector('#unlockReward'),toiletEvent=document.querySelector('#toiletEvent');
const QUALITY_KEY='block-break-quality-v1';let qualityMode='auto',autoDegraded=false;try{qualityMode=localStorage.getItem(QUALITY_KEY)||'auto'}catch{}if(!['auto','high','low'].includes(qualityMode))qualityMode='auto';
function applyQuality(mode=qualityMode,persist=true){qualityMode=mode;activeLowPower=mode==='low'||(mode==='auto'&&(defaultLowPower||autoDegraded));renderer.shadowMap.enabled=!activeLowPower;moon.castShadow=!activeLowPower;renderer.setPixelRatio(Math.min(devicePixelRatio,activeLowPower?1:1.5));renderer.setSize(innerWidth,innerHeight);qualitySelect.value=mode;document.body.dataset.renderQuality=activeLowPower?'low':'high';if(persist)try{localStorage.setItem(QUALITY_KEY,mode)}catch{}}
function syncRescueWorld(){const active=state.mode==='rescue';rescueWorld.visible=active;for(const object of rescueOriginalRoots)object.visible=!active}
function syncToiletWorld(){const active=state.mode==='escape'||state.mode==='rescue';escapeToiletWorld.visible=active;for(const object of originalToiletRegion)object.visible=false}
function clearToiletTimers(){for(const timer of toiletState.timers)clearTimeout(timer);toiletState.timers.length=0}
function scheduleToilet(callback,delay){const timer=setTimeout(callback,delay);toiletState.timers.push(timer);return timer}
function resetToiletDoors(){clearToiletTimers();toiletEvent.classList.add('hidden');toiletState.resolving=false;toiletState.opened=-1;toiletState.layout=[...TOILET_LAYOUT];for(let i=0;i<toiletDoors.length;i++){toiletDoors[i].rotation.y=0;toiletDoors[i].userData.targetRotation=0;for(const content of Object.values(toiletContents[i]))content.visible=false;if(!solids.includes(toiletDoorColliders[i]))solids.push(toiletDoorColliders[i])}}
function showToiletEvent(message){toiletEvent.querySelector('b').textContent=message;toiletEvent.classList.remove('hidden');beep(85,.22);haptic([90,45,100])}
function finishWrongToilet(){toiletEvent.classList.add('hidden');toiletState.resolving=false;reset();state.invulnerable=1.15}
function openToiletDoor(index){if(toiletState.opened>=0||toiletState.resolving)return;const result=toiletState.layout[index];toiletState.opened=index;toiletDoors[index].userData.targetRotation=-Math.PI*.48;const colliderIndex=solids.indexOf(toiletDoorColliders[index]);if(colliderIndex>=0)solids.splice(colliderIndex,1);toiletContents[index][result].visible=true;beep(410,.12);
  if(result==='tunnel'){announce('✓ 没有马桶，是通往下水道的地洞！');missionEl.textContent='走进地洞，继续从下水道逃离';return}
  toiletState.resolving=true;if(result==='corpse'){announce('门后传来令人作呕的臭味……');scheduleToilet(()=>showToiletEvent('你被尸体吓晕了'),1000);scheduleToilet(finishWrongToilet,2400)}
  else{announce('你撞见了正在上厕所的梅东！');scheduleToilet(()=>showToiletEvent('梅东把你敲晕了'),550);scheduleToilet(finishWrongToilet,1900)}
}
function enterToiletTunnel(){if(toiletState.resolving)return;toiletState.resolving=true;showToiletEvent('你钻进了通往下水道的地洞');scheduleToilet(()=>{toiletEvent.classList.add('hidden');toiletState.resolving=false;updateStage(12);hero.position.copy(state.checkpoint);state.velocity.set(0,0,0);announce('✓ 已进入厕所下水道')},700)}
function updateToiletInteraction(){if((state.mode!=='escape'&&state.mode!=='rescue')||state.stage!==11||toiletState.resolving)return;if(toiletState.opened>=0){const index=toiletState.opened;if(toiletState.layout[index]==='tunnel'&&Math.abs(hero.position.x-stallCenters[index])<1.2&&hero.position.z>346.1)enterToiletTunnel();return}for(let i=0;i<stallCenters.length;i++){if(Math.abs(hero.position.x-stallCenters[i])<1.15&&Math.abs(hero.position.z-stallDoorZ)<1.25){openToiletDoor(i);break}}}
function renderSkinGrid(){const available=availableSkinIds();skinGrid.replaceChildren();for(const skin of SKIN_CATALOG){const unlocked=available.has(skin.id),button=document.createElement('button'),preview=document.createElement('i'),copy=document.createElement('span'),name=document.createElement('b'),status=document.createElement('small'),player=skin.kind==='rescue'?RESCUE_PLAYERS[Number(skin.id.split('-')[1])]:null;button.type='button';button.className=`skin-card${unlocked?'':' locked'}${skin.id===skinProfile.selected?' selected':''}`;button.style.setProperty('--skin-color',colorCss(skin.color));button.style.setProperty('--skin-accent',colorCss(skin.accent??skin.color));preview.textContent=player?String(player.number):'';name.textContent=skin.name;status.textContent=player?`${player.country}国家队 · ${unlocked?(skin.id===skinProfile.selected?'使用中':'点击使用'):'通关解锁'}`:unlocked?(skin.id===skinProfile.selected?'使用中':'点击使用'):'拯救模式通关解锁';copy.append(name,status);button.append(preview,copy);button.onclick=()=>{if(!unlocked){announce('通关拯救模式即可解锁这位球星');return}skinProfile.selected=skin.id;applyHeroSkin();renderSkinGrid();announce(`已换上 ${skin.name} 皮肤`)};skinGrid.append(button)}}
let wardrobeResume=false;
function openWardrobe(){wardrobeResume=state.started&&!state.won&&!state.paused;if(wardrobeResume){state.paused=true;state.pauseStarted=performance.now();audio.pause()}renderSkinGrid();skinsPanel.classList.remove('hidden')}
function closeWardrobe(){skinsPanel.classList.add('hidden');if(wardrobeResume){state.start+=performance.now()-state.pauseStarted;state.paused=false;state.last=performance.now();audio.resume()}wardrobeResume=false}
function lockGate(stage,on){const g=lockGates.get(stage);if(!g)return;g.userData.locked=on;g.userData.targetY=on?0:5.4;const idx=solids.indexOf(g.userData.collider);if(on&&idx<0)solids.push(g.userData.collider);if(!on&&idx>=0)solids.splice(idx,1)}
function setHunterBodyGlow(color,intensity=1){for(const mat of hBody.material){mat.emissive.setHex(color);mat.emissiveIntensity=intensity}}
function updateHunterHud(){hunterHp.style.width=`${Math.max(0,hunterState.hp/hunterState.maxHp*100)}%`;hunterHpText.textContent=`${Math.max(0,hunterState.hp)} / ${hunterState.maxHp}`}
function updateMechHud(){leftArmHp.style.width=`${Math.max(0,hunterState.leftArmHp/hunterState.armMaxHp*100)}%`;rightArmHp.style.width=`${Math.max(0,hunterState.rightArmHp/hunterState.armMaxHp*100)}%`;hunterHpText.textContent=`${Math.max(0,hunterState.leftArmHp+hunterState.rightArmHp)} ARM HP`}
function updateHunterIntent(force=false){if(!force&&hunterState.lastUiMode===hunterState.mode)return;hunterState.lastUiMode=hunterState.mode;hunterIntent.textContent=hunterState.isMech&&hunterState.mode==='stunned'?'⚡ 驾驶员眩晕 · 5秒攻击窗口':{alert:'正在锁定目标',chase:'持续追击中',windup:'⚠ 即将发动冲撞',recovery:'攻击落空 · 短暂硬直',stunned:'受创后退',idle:'等待目标'}[hunterState.mode]||'持续追击中';hunterHud.classList.toggle('danger',hunterState.mode==='windup')}
function configureHunterForm(isMech){
  hunterState.isMech=isMech;mechFrame.visible=isMech;hunterName.visible=!isMech;
  if(isMech){medongRig.position.set(0,1.38,-.12);medongRig.scale.setScalar(.72);hLeg1.rotation.x=hLeg2.rotation.x=-1.18;hArm1.rotation.x=hArm2.rotation.x=.72}
  else{medongRig.position.set(0,0,0);medongRig.scale.setScalar(1);hLeg1.rotation.x=hLeg2.rotation.x=hArm1.rotation.x=hArm2.rotation.x=0}
}
function resetMechArms(){hunterState.leftArmHp=hunterState.rightArmHp=hunterState.armMaxHp;for(const arm of [mechLeftArm,mechRightArm]){arm.rotation.set(0,0,0);arm.userData.destroyed=false}updateMechHud()}
function aimedMechArm(maxScreenDistance=.42){
  scene.updateMatrixWorld(true);let best=null,bestDistance=maxScreenDistance;
  for(const [side,arm,hp,target] of [['left',mechLeftArm,hunterState.leftArmHp,leftArmWorld],['right',mechRightArm,hunterState.rightArmHp,rightArmWorld]]){
    if(hp<=0)continue;arm.getWorldPosition(target);aimProjection.copy(target).project(camera);if(aimProjection.z<0||aimProjection.z>1)continue;
    const screenDistance=Math.hypot(aimProjection.x,aimProjection.y);if(screenDistance<bestDistance){bestDistance=screenDistance;best={side,arm,world:target.clone()}}
  }
  return best
}
function spawnMoneyShot(end){const shot=new THREE.Mesh(moneyBulletGeometry,moneyBulletMaterial);shotStart.copy(hero.position).addScaledVector(UP,1.35);shot.position.copy(shotStart);shot.rotation.y=hero.rotation.y;shot.userData={start:shotStart.clone(),end:end.clone(),progress:0};moneyBullets.push(shot);scene.add(shot)}
function fireMoneyGun(){
  if(!state.moneyGun){announce('先到绿色武器箱取得钞票枪');return}
  const target=aimedMechArm();shotStart.copy(hero.position).addScaledVector(UP,1.35);
  if(!target){camera.getWorldDirection(cameraDirection);spawnMoneyShot(shotEnd.copy(shotStart).addScaledVector(cameraDirection,20));announce('只攻击蓝色机械臂 · 用准星瞄准');beep(220,.06);return}
  spawnMoneyShot(target.world);const result=damageMechArm(hunterState,target.side,20);hunterState.hitFlash=.18;updateMechHud();beep(result==='hit'?610:820,.09);haptic([18,22,28]);
  if(result==='arm-destroyed'||result==='defeated'){target.arm.userData.destroyed=true;stunHunter(hunterState,5);updateHunterIntent(true);announce(`${target.side==='left'?'左':'右'}机械臂摧毁 · 梅东眩晕 5 秒`)}
  else announce(`💵 命中${target.side==='left'?'左':'右'}臂 · 20 DAMAGE`);
  if(result==='defeated')setTimeout(()=>{if(hunterState.active&&hunterState.isMech&&hunterState.leftArmHp<=0&&hunterState.rightArmHp<=0)defeatHunter()},300)
}
function haptic(pattern){if(mobileDevice)navigator.vibrate?.(pattern)}
function spawnHunter(stage){
  const isMech=state.mode==='escape'&&stage===LAST_STAGE,isRescueBoss=state.mode==='rescue'&&stage===RESCUE_FINAL_BOSS_STAGE,isRosister=state.mode==='rosister',encounterIndex=encounterStages.indexOf(stage);hunterState.active=true;hunterState.stage=stage;hunterState.isRosister=isRosister;hunterState.hp=hunterState.maxHp=isRosister?9999:state.mode==='rescue'?rescueHunterHp(stage):hunterMaxHpForEncounter(encounterIndex);hunterState.hitFlash=0;hunterState.lastUiMode='';configureHunterForm(isMech);resetHunterBrain(hunterState,isMech?2.4:.8);
  const spawn=hunterSpawnForStage(stage,{isMech,stageLength:STAGE_LENGTH});hunter.position.set(spawn.x,.02,spawn.z);
  if(isMech){resetMechArms();hunterTitle.textContent='⚠ 梅东机甲 · 双臂弱点';hunterMainBar.classList.add('hidden');mechArms.classList.remove('hidden');attackLabel.textContent=state.moneyGun?'发射 [F]':'获取武器';missionEl.textContent=state.moneyGun?'瞄准并摧毁机甲两条手臂':'前往绿色武器箱取得钞票枪';aimReticle.classList.toggle('hidden',!state.moneyGun);announce('⚠ 梅东机甲启动 · 只有手臂会受伤！')}
  else{hunterTitle.textContent=isRosister?'⚠ 梅东 · 萝姐挑战（不可击败）':isRescueBoss?'⚠ 最终 Boss 梅东 · 全员决战':state.mode==='rescue'?'⚠ 强化梅东 · 呼叫队友':'⚠ 梅东 · 阿根廷10号';hunterMainBar.classList.remove('hidden');mechArms.classList.add('hidden');attackLabel.textContent='攻击 [F]';aimReticle.classList.add('hidden');missionEl.textContent=isRosister?'答题倒计时结束前完成题目':isRescueBoss?'与十位获救球员围攻最终梅东':state.mode==='rescue'?'与获救球员一起击退梅东':'击败梅东，解除封锁';updateHunterHud();announce(isRosister?`⚠ 梅东出现 · 生命 ${hunterState.maxHp}（无法击败）`:isRescueBoss?`⚠ 最终围捕开始 · 梅东生命 ${hunterState.maxHp}`:`⚠ 梅东出现 · 生命 ${hunterState.maxHp}`)}
  hunter.visible=true;hunterWarning.visible=false;lockGate(stage,true);hunterHud.classList.remove('hidden');attackButton.classList.remove('hidden');updateHunterIntent(true);haptic([40,35,40])
}
function defeatHunter(){const wasMech=hunterState.isMech,wasRescueBoss=state.mode==='rescue'&&hunterState.stage===RESCUE_FINAL_BOSS_STAGE;hunterState.active=false;hunterState.mode='idle';hunter.visible=false;hunterWarning.visible=false;setHunterBodyGlow(0x000000);lockGate(hunterState.stage,false);hunterHud.classList.add('hidden');hunterHud.classList.remove('danger','hit');attackButton.classList.add('hidden');aimReticle.classList.add('hidden');weaponHud.classList.add('hidden');moneyGunModel.visible=false;missionEl.textContent=wasMech?'机甲摧毁 · 登上直升机撤离':wasRescueBoss?'最终梅东已被击败 · 穿过终点撤离':state.mode==='rescue'?activeMissions()[state.stage]:'封锁解除 · 前往下一个检查点';announce(wasMech?'✓ 两条机械臂已摧毁 · 梅东机甲失效':wasRescueBoss?'✓ 十位队友合力击败最终梅东':state.mode==='rescue'?'✓ 队友合力击退梅东':'✓ 梅东已被击退 · 封锁解除');beep(wasMech?1080:920,wasMech?.42:.28);haptic([30,40,70])}
function hunterBlocked(position){
  for(const solid of solids){
    if(!objectEnabledForMode(solid))continue;
    if(Math.abs(solid.userData.stageIndex-hunterState.stage)>1)continue;
    const bounds=objectBounds(solid);
    if(overlapsHorizontal(position,bounds,hunterState.isMech?1.35:.58)&&overlapsVertical(position,bounds,hunterState.isMech?4.35:2.85))return true;
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
  if(state.mode==='math'){announce('考试模式不可以攻击梅东');return}
  if(state.mode==='rosister'){announce('萝姐挑战中不能攻击梅东 · 先完成限时题目');return}
  if(isToiletNoCombat(state.mode,state.stage)){announce('厕所隔间里的梅东没有血条，无法攻击');return}
  if(hunterState.active&&hunterState.isMech){state.attackCooldown=.3;state.attackAnim=.12;attackButton.classList.add('cooldown');fireMoneyGun();return}
  state.attackCooldown=.38;state.attackAnim=.24;attackButton.classList.add('cooldown');beep(250,.05);haptic(18);
  if(!hunterState.active)return;
  const buffs=state.mode==='rescue'?rescueModeBuffTotals(rescueState.rescued):rescueBuffTotals(),delta=attackDelta.copy(hunter.position).sub(hero.position),distance=Math.hypot(delta.x,delta.z),attackRange=3.45+buffs.strength*RESCUE_BUFF_EFFECTS.strengthRange;
  if(distance>attackRange){state.combo=0;state.comboTimer=0;announce('距离太远');return}
  delta.y=0;if(delta.lengthSq())hero.rotation.y=Math.atan2(delta.x,delta.z);
  state.combo=state.comboTimer>0?Math.min(3,state.combo+1):1;state.comboTimer=.95;
  const damage=comboDamage(state.combo)+buffs.attack*RESCUE_BUFF_EFFECTS.attackDamage;hunterState.hp-=damage;stunHunter(hunterState,.48+state.combo*.05);hunterState.hitFlash=.2;
  if(delta.lengthSq()){delta.normalize();hunter.position.addScaledVector(delta,.48+state.combo*.12+buffs.strength*RESCUE_BUFF_EFFECTS.strengthKnockback);hero.position.addScaledVector(delta,.12)}
  const minZ=hunterState.stage*STAGE_LENGTH+3,maxZ=(hunterState.stage+1)*STAGE_LENGTH-3;hunter.position.x=THREE.MathUtils.clamp(hunter.position.x,-6.5,6.5);hunter.position.z=THREE.MathUtils.clamp(hunter.position.z,minZ,maxZ);
  updateHunterHud();updateHunterIntent(true);beep(500+state.combo*90,.09);haptic([20,25,35]);announce(`${state.combo>1?`${state.combo} 连击 · `:''}${damage} DAMAGE`);
  if(hunterState.hp<=0)defeatHunter()
}
function updateRescueHud(){const current=RESCUE_MODE_PLAYERS[state.stage],hasKey=rescueState.keys.has(state.stage),buffs=rescueModeBuffTotals(rescueState.rescued);rescueHud.querySelector('b').textContent=current&&!rescueState.rescued.has(state.stage)?hasKey?'🔑 已取得本区钥匙':`🔑 寻找 ${current.name} 的钥匙`:'🔑 当前区域已完成';rescueHud.querySelector('span').textContent=`已营救 ${rescueState.rescued.size} / ${RESCUE_MODE_PLAYERS.length}`;rescueBuffsEl.textContent=`攻击 +${buffs.attack} · 力量 +${buffs.strength} · 弹跳 +${buffs.jump} · 速度 +${buffs.speed}`}
function syncRescueObjects(){for(const [modeIndex,actualIndex] of RESCUE_MODE_PLAYER_INDICES.entries()){rescueCages[actualIndex].visible=!rescueState.rescued.has(modeIndex);rescueKeys[actualIndex].visible=!rescueState.keys.has(modeIndex)&&!rescueState.rescued.has(modeIndex);rescueFollowers[actualIndex].visible=state.mode==='rescue'&&rescueState.rescued.has(modeIndex)}rescueCages[0].visible=false;rescueKeys[0].visible=false;rescueFollowers[0].visible=false;updateRescueHud()}
function renderRosisterQuestion(){const q=rosisterState.question;if(!q)return;rosisterQuestionEl.textContent=q.prompt;rosisterChoicesEl.replaceChildren();rosisterAnswer.value='';rosisterState.selected='';if(q.kind==='choice'){rosisterAnswer.placeholder='也可输入选项文字';for(const choice of q.choices){const button=document.createElement('button');button.type='button';button.textContent=choice;button.onclick=()=>{rosisterState.selected=choice;rosisterAnswer.value=choice;for(const b of rosisterChoicesEl.children)b.classList.toggle('selected',b===button)};rosisterChoicesEl.append(button)}}else rosisterAnswer.placeholder='输入数字答案';rosisterTimer.textContent=`${Math.ceil(rosisterState.remaining)} 秒`;rosisterPanel.classList.remove('hidden');setTimeout(()=>rosisterAnswer.focus(),80)}
function openRosisterQuestion(stage){rosisterState.question=createRosisterQuestion(stage);rosisterState.remaining=rosisterState.question.limit;rosisterState.answerOpen=true;renderRosisterQuestion();missionEl.textContent=rosisterMissions[stage];announce(`🥕 萝姐挑战：第 ${stage+1} 题开始，梅东正在逼近！`)}
function failRosister(reason){rosisterState.answerOpen=false;rosisterPanel.classList.add('hidden');die(reason)}
function submitRosisterAnswer(){if(!rosisterState.answerOpen)return;const answer=rosisterAnswer.value||rosisterState.selected;if(!isRosisterAnswerCorrect(rosisterState.question,answer)){failRosister('回答错误，梅东把你击杀了');return}const cleared=state.stage;rosisterState.answerOpen=false;rosisterPanel.classList.add('hidden');beep(900,.18);if(cleared===activeLastStage()){completeGame();return}state.stage=cleared+1;lockGates.forEach((_,s)=>lockGate(s,false));state.checkpoint.set(0,.02,state.stage*STAGE_LENGTH+2);hero.position.copy(state.checkpoint);state.velocity.set(0,0,0);hunterState.stage=state.stage;activeCheckpoints().forEach((c,k)=>setCheckpoint(c,k<=state.stage));stageEl.textContent=activeNames()[state.stage];bar.style.width=`${(state.stage+1)/activeStageCount()*100}%`;missionEl.textContent=activeMissions()[state.stage];announce(`✓ 答案正确 · 检查点 ${state.stage+1} 已解锁`);if(state.mode==='rosister'&&state.stage===activeLastStage())openRosisterQuestion(state.stage)}
function startMathStage(stage){state.stage=stage;state.checkpoint.set(0,.02,stage*STAGE_LENGTH+2);hero.position.copy(state.checkpoint);state.velocity.set(0,0,0);stageEl.textContent=mathStageNames[stage];bar.style.width=`${(stage+1)/MODE_CONFIG.math.stageCount*100}%`;missionEl.textContent=mathMissions[stage];mathCheckpoints.forEach((checkpoint,index)=>setCheckpoint(checkpoint,index<=stage));hunterState.active=false;configureHunterForm(false);hunter.position.set(0,.02,stage*STAGE_LENGTH+17);hunter.rotation.y=Math.PI;hunter.visible=true;hunterWarning.visible=false;state.mathQuestion=createMathQuestion(stage);mathQuestionEl.textContent=state.mathQuestion.prompt;drawSpriteText(mathBoardQuestions[stage],state.mathQuestion.prompt,'#f0f5de');mathAnswer.value='';mathPanel.classList.remove('hidden');setTimeout(()=>mathAnswer.focus(),120)}
function reset(full=false){
  if(full||state.mode==='escape'||state.mode==='rescue')resetToiletDoors();
  if(full){
    if(hunterSpawnTimer){clearTimeout(hunterSpawnTimer);hunterSpawnTimer=0}
    state.stage=0;state.start=performance.now();state.checkpoint.set(0,.02,2);state.won=false;state.paused=false;state.invulnerable=0;state.moneyGun=false;state.mathQuestion=null;state.keys={};touchX=touchY=0;jumpTap=false;pauseMenu.classList.add('hidden');state.yaw=0;state.pitch=.48;state.cameraDistance=8;applyHeroSkin();
    world.visible=true;mathWorld.visible=state.mode==='math';rescueContent.visible=state.mode==='rescue';syncRescueWorld();syncToiletWorld();mathPanel.classList.toggle('hidden',state.mode!=='math');rosisterPanel.classList.toggle('hidden',state.mode!=='rosister');rescueHud.classList.toggle('hidden',state.mode!=='rescue');document.body.dataset.mode=state.mode;
    if(state.mode==='rescue'){rescueState.keys.clear();rescueState.rescued.clear();rescueState.reminderCooldown=0;rescueState.allyCooldown=0}rosisterState.question=null;rosisterState.answerOpen=false;rosisterState.remaining=0;rosisterPanel.classList.add('hidden');for(const follower of rescueFollowers)follower.visible=false;syncRescueObjects();
    hunterState.active=false;hunterState.isRosister=false;hunterState.mode='idle';configureHunterForm(false);hunter.visible=false;hunterWarning.visible=false;hunterHud.classList.add('hidden');hunterHud.classList.remove('danger','hit');hunterMainBar.classList.remove('hidden');mechArms.classList.add('hidden');weaponHud.classList.add('hidden');aimReticle.classList.add('hidden');attackButton.classList.add('hidden');attackLabel.textContent='攻击 [F]';moneyGunModel.visible=false;moneyGunPickup.visible=true;for(const shot of moneyBullets)scene.remove(shot);moneyBullets.length=0;lockGates.forEach((_,s)=>lockGate(s,state.mode!=='rosister'));document.querySelector('#win').classList.add('hidden');stageEl.textContent=activeNames()[0];bar.style.width=`${100/activeStageCount()}%`;missionEl.textContent=activeMissions()[0];activeCheckpoints().forEach((c,i)=>setCheckpoint(c,i===0));if(state.mode==='math')startMathStage(0);if(state.mode==='rosister')spawnHunter(0)
  }else if(state.mode==='math'){
    startMathStage(state.stage)
  }else if(hunterState.active){
    hunterState.hp=hunterState.maxHp;hunterState.hitFlash=0;resetHunterBrain(hunterState,hunterState.isMech?2.4:1);const spawn=hunterSpawnForStage(hunterState.stage,{isMech:hunterState.isMech,stageLength:STAGE_LENGTH});hunter.position.set(spawn.x,.02,spawn.z);hunterWarning.visible=false;lockGate(hunterState.stage,state.mode!=='rosister');if(hunterState.isMech){resetMechArms();attackLabel.textContent=state.moneyGun?'发射 [F]':'获取武器';aimReticle.classList.toggle('hidden',!state.moneyGun);missionEl.textContent=state.moneyGun?'瞄准并摧毁机甲两条手臂':'前往绿色武器箱取得钞票枪'}else updateHunterHud();updateHunterIntent(true)
  }
  if(state.mode==='rescue')syncRescueObjects();hero.position.copy(state.checkpoint);hero.visible=true;state.velocity.set(0,0,0);state.grounded=true;state.coyote=.1;state.jumpBuffer=0;state.attackCooldown=0;state.attackAnim=0;state.combo=0;state.comboTimer=0;attackButton.classList.remove('cooldown')
}
function setCheckpoint(c,on){for(const k of ['pad','rim','beacon','flag'])c.userData[k].material=on?M.green:M.greenOff}
function beep(freq=440,duration=.09){audio.tone(freq,duration)}
function announce(s){toast.textContent=s;toast.classList.add('show');clearTimeout(announce.t);announce.t=setTimeout(()=>toast.classList.remove('show'),1200)}
function updateStage(i){if(state.mode==='math'||i<=state.stage)return;if(state.mode==='rosister'){hero.position.z=i*STAGE_LENGTH-.85;state.velocity.z=Math.min(0,state.velocity.z);if(!rosisterState.answerOpen)openRosisterQuestion(state.stage);return}if(state.mode==='rescue'){const required=requiredRescueForCheckpoint(i);if(required!==null&&!rescueState.rescued.has(required)){hero.position.z=i*STAGE_LENGTH-.85;state.velocity.z=Math.min(0,state.velocity.z);if(rescueState.reminderCooldown<=0){announce(`你需要找到钥匙营救 ${RESCUE_MODE_PLAYERS[required].name} 球员！`);rescueState.reminderCooldown=1.4}return}}state.stage=i;state.checkpoint.set(0,.02,i*STAGE_LENGTH+2);stageEl.textContent=activeNames()[i];bar.style.width=`${(i+1)/activeStageCount()*100}%`;missionEl.textContent=activeMissions()[i];activeCheckpoints().forEach((c,k)=>setCheckpoint(c,k<=i));const toiletEntrance=(state.mode==='escape'||state.mode==='rescue')&&i===10,toiletNoCombat=isToiletNoCombat(state.mode,i),rescueFinalBoss=state.mode==='rescue'&&i===RESCUE_FINAL_BOSS_STAGE;announce(toiletEntrance?'🚻 地下证件库后方竟然是监狱厕所':toiletNoCombat?'提示：正确隔间的位置每局都固定':rescueFinalBoss?'⚑ 最终检查点 · 九位球员准备围攻梅东':i===activeLastStage()?`⚑ 最终检查点 · ${state.mode==='rescue'?'带领全员撤离':'准备撤离'}`:`⚑ 检查点 ${i+1} / ${activeStageCount()} 已激活`);beep(toiletEntrance?330:740,.15);haptic(toiletEntrance?[45,35,70]:45);if(state.mode==='rescue')updateRescueHud();if(toiletNoCombat)lockGate(i,false);if((encounterStages.includes(i)||rescueFinalBoss)&&!toiletNoCombat){if(hunterSpawnTimer)clearTimeout(hunterSpawnTimer);hunterSpawnTimer=setTimeout(()=>{hunterSpawnTimer=0;if(state.started&&!state.won&&state.stage===i)spawnHunter(i)},350)}}
function hit(obj,pad=.5){return intersectsBody(hero.position,objectBounds(obj),pad)}
function hitHazard(obj,pad=.28){const dimensions=obj.geometry?.parameters;if(obj.parent?.userData.rotate&&dimensions?.width){obj.getWorldPosition(hazardCenter);obj.getWorldQuaternion(hazardQuaternion);hazardEuler.setFromQuaternion(hazardQuaternion,'YXZ');return intersectsYawedBox(hero.position,hazardCenter,hazardEuler.y,dimensions.width,dimensions.height,dimensions.depth,pad)}return hit(obj,pad)}
function die(reason='被抓住了'){if(state.invulnerable>0)return;announce(`✖ ${reason} · 返回检查点`);beep(120,.24);haptic([90,50,90]);reset();state.invulnerable=1.15}
function format(sec){const m=Math.floor(sec/60).toString().padStart(2,'0'),s=Math.floor(sec%60).toString().padStart(2,'0');return `${m}:${s}`}
const bestEl=document.querySelector('#bestTime');function bestKey(){return `block-break-best-${state.mode}-${activeStageCount()}-stage-v1`}function readBest(){try{return Number(localStorage.getItem(bestKey()))||0}catch{return 0}}function showBest(){if(state.mode==='math'){bestEl.textContent='不限时作答';return}const best=readBest();bestEl.textContent=best?`${activeStageCount()}关最佳 ${format(best)}`:`${activeStageCount()}关最佳 --:--`}function saveBest(sec){if(state.mode==='math')return;const best=readBest();if(!best||sec<best){try{localStorage.setItem(bestKey(),String(sec))}catch{}announce(`★ 新的${activeStageCount()}关最佳纪录！`)}showBest()}
function completeGame(t=performance.now()){if(state.won)return;state.won=true;state.wonTime=(t-state.start)/1000;beep(880,.4);haptic([50,40,100]);winTitle.textContent=activeConfig().winTitle;winCopy.textContent=activeConfig().winCopy;document.querySelector('#finalTime').textContent=state.mode==='math'?'PASS':format(state.wonTime);saveBest(state.wonTime);if(state.mode==='rescue'){skinProfile.rescueCompleted=true;unlockReward.textContent='🏆 已解锁其余 9 位球星皮肤！'}if(state.mode==='rosister'){skinProfile.rosisterCompleted=true;unlockReward.textContent='🥕 萝姐皮肤已解锁！'}if(state.mode==='rescue'||state.mode==='rosister'){saveSkinProfile();renderSkinGrid()}unlockReward.classList.toggle('hidden',state.mode!=='rescue'&&state.mode!=='rosister');mathPanel.classList.add('hidden');rosisterPanel.classList.add('hidden');document.querySelector('#win').classList.remove('hidden')}
function setPaused(on){if(!state.started||state.won)return;if(on&&!state.paused){state.paused=true;state.pauseStarted=performance.now();pauseMenu.classList.remove('hidden');audio.pause()}else if(!on&&state.paused){state.start+=performance.now()-state.pauseStarted;state.paused=false;state.last=performance.now();pauseMenu.classList.add('hidden');audio.resume();announce('▶ 已继续游戏')}}
const perfState={frames:0,sampleStart:0,fps:60,lowSamples:0};
function updateMoneyShots(dt){for(let i=moneyBullets.length-1;i>=0;i--){const shot=moneyBullets[i],data=shot.userData;data.progress+=dt*4.8;shot.position.lerpVectors(data.start,data.end,Math.min(1,data.progress));shot.rotation.y+=dt*14;if(data.progress>=1){scene.remove(shot);moneyBullets.splice(i,1)}}}
function updateRescueMode(dt,t){rescueState.reminderCooldown=Math.max(0,rescueState.reminderCooldown-dt);rescueState.allyCooldown=Math.max(0,rescueState.allyCooldown-dt);for(const [modeIndex,actualIndex] of RESCUE_MODE_PLAYER_INDICES.entries()){if(rescueState.rescued.has(modeIndex))continue;const key=rescueKeys[actualIndex],cage=rescueCages[actualIndex],player=RESCUE_MODE_PLAYERS[modeIndex],keyDistance=Math.hypot(hero.position.x-key.position.x,hero.position.z-key.position.z),cageDistance=Math.hypot(hero.position.x-cage.position.x,hero.position.z-cage.position.z);if(!rescueState.keys.has(modeIndex)&&keyDistance<1.45){rescueState.keys.add(modeIndex);key.visible=false;announce(`🔑 找到 ${player.name} 的钥匙`);beep(720,.14);updateRescueHud()}if(!rescueState.keys.has(modeIndex)&&cageDistance<2&&rescueState.reminderCooldown<=0){announce(`先找到 ${player.name} 的钥匙`);rescueState.reminderCooldown=1.4}if(rescueState.keys.has(modeIndex)&&cageDistance<2){rescueState.rescued.add(modeIndex);cage.visible=false;const follower=rescueFollowers[actualIndex],buffLabel=RESCUE_BUFF_LABELS[player.buff];follower.position.copy(hero.position).add(new THREE.Vector3(0,0,-1));follower.visible=true;announce(`✓ 成功营救 ${player.name} · ${buffLabel} +1`);beep(940,.25);haptic([30,25,60]);updateRescueHud()}}
  const rescued=[...rescueState.rescued].sort((a,b)=>a-b),inBattle=hunterState.active;let forwardX=Math.sin(hero.rotation.y),forwardZ=Math.cos(hero.rotation.y);if(inBattle){const dx=hunter.position.x-hero.position.x,dz=hunter.position.z-hero.position.z,length=Math.max(.001,Math.hypot(dx,dz));forwardX=dx/length;forwardZ=dz/length}const rightX=forwardZ,rightZ=-forwardX,formation=inBattle?RESCUE_BATTLE_OFFSETS:RESCUE_TRAIL_OFFSETS;
  for(const [order,index] of rescued.entries()){const actualIndex=RESCUE_MODE_PLAYER_INDICES[index],[baseLateral,baseForward]=formation[order],drift=inBattle?.1:.32,lateral=baseLateral+Math.sin(t*.00075+index*2.17)*drift,longitudinal=baseForward+Math.cos(t*.00061+index*1.73)*drift*.75;rescueDesired.set(hero.position.x+forwardX*longitudinal+rightX*lateral,.02,hero.position.z+forwardZ*longitudinal+rightZ*lateral);const follower=rescueFollowers[actualIndex],travel=follower.position.distanceTo(rescueDesired);follower.position.lerp(rescueDesired,1-Math.pow(inBattle?.00008:.006,dt));follower.rotation.y=inBattle?Math.atan2(hunter.position.x-follower.position.x,hunter.position.z-follower.position.z):hero.rotation.y+Math.sin(t*.0009+index)*.08;const stride=Math.min(1,travel*1.15),swing=Math.sin(t*.013+order*1.31)*.42*stride,allyStriking=inBattle&&rescueState.allyCooldown>.58;follower.userData.fLeg1.rotation.x=swing;follower.userData.fLeg2.rotation.x=-swing;follower.userData.fArm1.rotation.x=allyStriking?-1.15:-swing;follower.userData.fArm2.rotation.x=allyStriking?-1.15:swing}
  if(inBattle&&rescueState.allyCooldown<=0&&Math.hypot(hero.position.x-hunter.position.x,hero.position.z-hunter.position.z)<7.2&&rescued.length){const damage=rescued.length*5;hunterState.hp-=damage;hunterState.hitFlash=.16;rescueState.allyCooldown=.8;updateHunterHud();beep(420+rescued.length*18,.04);if(hunterState.hp<=0)defeatHunter()}
}
function tick(t){requestAnimationFrame(tick);const dt=Math.min((t-state.last)/1000||0,.035);state.last=t;
  if(state.started&&!state.won&&!state.paused&&!toiletState.resolving){
    state.attackCooldown=Math.max(0,state.attackCooldown-dt);state.comboTimer=Math.max(0,state.comboTimer-dt);state.invulnerable=Math.max(0,state.invulnerable-dt);if(state.comboTimer===0)state.combo=0;attackButton.classList.toggle('cooldown',state.attackCooldown>0);hero.visible=state.invulnerable<=0||Math.floor(t/85)%2===0;
    const f=(state.keys.KeyW||state.keys.ArrowUp?1:0)-(state.keys.KeyS||state.keys.ArrowDown?1:0)+touchY,r=(state.keys.KeyD||state.keys.ArrowRight?1:0)-(state.keys.KeyA||state.keys.ArrowLeft?1:0)+touchX;
    camera.getWorldDirection(viewForward);viewForward.y=0;if(viewForward.lengthSq()<.001)viewForward.set(0,0,1);viewForward.normalize();viewRight.crossVectors(viewForward,UP).normalize();
    const dir=moveDirection.copy(viewForward).multiplyScalar(f).addScaledVector(viewRight,r),buffs=state.mode==='rescue'?rescueModeBuffTotals(rescueState.rescued):rescueBuffTotals(),moveSpeed=7.2+buffs.speed*RESCUE_BUFF_EFFECTS.speed;if(dir.length()>1)dir.normalize();state.velocity.x=dir.x*moveSpeed;state.velocity.z=dir.z*moveSpeed;
    if(jumpTap){state.jumpBuffer=.15;jumpTap=false}state.jumpBuffer=Math.max(0,state.jumpBuffer-dt);state.coyote=state.grounded ? .11 : Math.max(0,state.coyote-dt);
    if(state.jumpBuffer>0&&state.coyote>0){state.velocity.y=10+buffs.jump*RESCUE_BUFF_EFFECTS.jumpVelocity;state.grounded=false;state.coyote=0;state.jumpBuffer=0;beep(320,.055)}
    state.velocity.y-=22*dt;oldHeroPosition.copy(hero.position);const nearbyStage=THREE.MathUtils.clamp(Math.floor(hero.position.z/STAGE_LENGTH),0,activeLastStage());
    hero.position.x+=state.velocity.x*dt;hero.position.z+=state.velocity.z*dt;
    if(state.mode==='math')hero.position.z=THREE.MathUtils.clamp(hero.position.z,state.stage*STAGE_LENGTH+1,(state.stage+1)*STAGE_LENGTH-2);
    for(const s of solids){
      if(!objectEnabledForMode(s))continue;
      if(Math.abs(s.userData.stageIndex-nearbyStage)>1)continue;
      const bounds=objectBounds(s);
      if(overlapsHorizontal(hero.position,bounds,HERO_RADIUS)&&overlapsVertical(hero.position,bounds,HERO_HEIGHT)){hero.position.x=oldHeroPosition.x;hero.position.z=oldHeroPosition.z;break}
    }
    const previousY=hero.position.y;hero.position.y+=state.velocity.y*dt;state.grounded=false;
    for(const s of solids){
      if(!objectEnabledForMode(s))continue;
      if(Math.abs(s.userData.stageIndex-nearbyStage)>1)continue;
      const bounds=objectBounds(s);if(!overlapsHorizontal(hero.position,bounds,HERO_RADIUS))continue;
      const resolved=resolveVerticalSweep(previousY,hero.position.y,state.velocity.y,bounds,HERO_HEIGHT);
      if(resolved){hero.position.y=resolved.y;state.velocity.y=resolved.velocityY;state.grounded=resolved.grounded;break}
    }
    if(hero.position.y<=.02){hero.position.y=.02;state.velocity.y=0;state.grounded=true}
    if(dir.lengthSq()>.1){hero.rotation.y=Math.atan2(dir.x,dir.z);const swing=Math.sin(t*.013)*.5;leg1.rotation.x=swing;leg2.rotation.x=-swing;arm1.rotation.x=-swing;arm2.rotation.x=swing}else{leg1.rotation.x*=.75;leg2.rotation.x*=.75;arm1.rotation.x*=.75;arm2.rotation.x*=.75}
    if(state.attackAnim>0){state.attackAnim-=dt;arm1.rotation.x=-1.65;arm2.rotation.x=-1.65}
    if(state.mode==='escape'&&state.stage===LAST_STAGE&&!state.moneyGun&&Math.hypot(hero.position.x-moneyGunPickup.position.x,hero.position.z-moneyGunPickup.position.z)<1.55){state.moneyGun=true;moneyGunPickup.visible=false;moneyGunModel.visible=true;weaponHud.classList.remove('hidden');attackLabel.textContent='发射 [F]';missionEl.textContent=hunterState.active?'瞄准并摧毁机甲两条手臂':'钞票枪就绪 · 准备迎战梅东机甲';if(hunterState.active)aimReticle.classList.remove('hidden');announce('💵 已取得钞票枪 · 瞄准蓝色机械臂');beep(760,.18);haptic([25,30,55])}
    updateToiletInteraction();
    if(state.mode==='rescue')updateRescueMode(dt,t);
    if(state.mode==='rosister'&&rosisterState.answerOpen){rosisterState.remaining-=dt;rosisterTimer.textContent=`${Math.max(0,Math.ceil(rosisterState.remaining))} 秒`;if(rosisterState.remaining<=0)failRosister('答题超时，梅东把你击杀了')}
    if(hunterState.active){
      const chase=hunterDelta.copy(hero.position).sub(hunter.position),verticalGap=Math.abs(chase.y);chase.y=0;const chaseDistance=chase.length(),previousMode=hunterState.mode,event=advanceHunterBrain(hunterState,dt,chaseDistance);
      if(event==='windup'){announce(hunterState.isMech?'⚠ 机甲蓄力冲撞 · 快闪开！':'⚠ 梅东蓄力冲撞 · 快闪开！');beep(175,.16);haptic([35,35,35])}
      if(hunterState.mode==='chase'&&chaseDistance>.1){const speed=hunterState.isMech?3.05:hunterState.isRosister?4.1:3.4+hunterState.stage*.1;moveHunter(chase.normalize(),speed,dt)}
      if(event==='strike'){
        beep(95,.18);haptic([70,35,90]);
        if(chaseDistance<HUNTER_STRIKE_RANGE&&verticalGap<1.45)die('被梅东撞倒');else announce('✓ 闪避成功 · 趁现在反击')
      }
      const minZ=hunterState.stage*STAGE_LENGTH+3,maxZ=(hunterState.stage+1)*STAGE_LENGTH-3;hunter.position.x=THREE.MathUtils.clamp(hunter.position.x,-6.5,6.5);hunter.position.z=THREE.MathUtils.clamp(hunter.position.z,minZ,maxZ);hunter.rotation.y=Math.atan2(chase.x,chase.z);
      hunterState.hitFlash=Math.max(0,hunterState.hitFlash-dt);hunterWarning.visible=hunterState.mode==='windup';if(hunterWarning.visible){const pulse=(hunterState.isMech?1.8:1)*(1+Math.sin(t*.035)*.12);hunterWarning.scale.setScalar(pulse);hunterWarning.material.opacity=.52+Math.sin(t*.04)*.2}
      setHunterBodyGlow(hunterState.hitFlash>0?0xffffff:hunterState.mode==='windup'?0x9a1600:0x000000,hunterState.hitFlash>0?1.4:1);hunterHud.classList.toggle('hit',hunterState.hitFlash>0);
      if(previousMode!==hunterState.mode)updateHunterIntent(true);
      const hs=Math.sin(t*.015)*.58;if(hunterState.isMech){hLeg1.rotation.x=hLeg2.rotation.x=-1.18;hArm1.rotation.x=hArm2.rotation.x=.72;const attackTilt=hunterState.mode==='windup'?-.62:Math.sin(t*.006)*.08;mechLeftArm.rotation.x=THREE.MathUtils.lerp(mechLeftArm.rotation.x,mechLeftArm.userData.destroyed?0:attackTilt,.12);mechRightArm.rotation.x=THREE.MathUtils.lerp(mechRightArm.rotation.x,mechRightArm.userData.destroyed?0:attackTilt,.12);mechLeftArm.rotation.z=THREE.MathUtils.lerp(mechLeftArm.rotation.z,mechLeftArm.userData.destroyed?-1.28:0,.1);mechRightArm.rotation.z=THREE.MathUtils.lerp(mechRightArm.rotation.z,mechRightArm.userData.destroyed?1.28:0,.1)}else if(hunterState.mode==='windup'){hArm1.rotation.x=-1.25;hArm2.rotation.x=-1.25;hLeg1.rotation.x=.35;hLeg2.rotation.x=-.35}else if(hunterState.mode==='recovery'){hArm1.rotation.x=.9;hArm2.rotation.x=.9;hLeg1.rotation.x=-.2;hLeg2.rotation.x=.2}else{hLeg1.rotation.x=hs;hLeg2.rotation.x=-hs;hArm1.rotation.x=-hs;hArm2.rotation.x=hs}
    }
    updateMoneyShots(dt);
    audio.update({moving:dir.lengthSq()>.1,grounded:state.grounded,hunter:hunterState.active,now:t/1000});
    for(const h of hazards){if(!objectEnabledForMode(h)||Math.abs(h.userData.stageIndex-nearbyStage)>1)continue;if(hitHazard(h,h.userData.hitPad??.28)){die('触碰危险机关');break}}
    if(Math.abs(hero.position.x)>7.2||hero.position.y < -3)die();
    // Crossing the front edge of a checkpoint pad activates that respawn point.
    const si=Math.max(0,Math.min(activeLastStage(),Math.floor((hero.position.z-1)/STAGE_LENGTH)));if(si>state.stage)updateStage(si);
    if(state.mode!=='math'&&hero.position.z>activeFinishZ()&&state.stage===activeLastStage()&&!hunterState.active)completeGame(t);
    timeEl.textContent=format((t-state.start)/1000);
  }
  for(const o of movers){if(o.userData.rotate)o.rotation.y=t*.001*o.userData.speed;else if(o.userData.move==='x')o.position.x=o.userData.base+Math.sin(t*.001*o.userData.speed+o.userData.phase)*o.userData.amp;else o.position.y=o.userData.base+Math.abs(Math.sin(t*.001*o.userData.speed+o.userData.phase))*o.userData.amp}
  for(const door of toiletDoors)door.rotation.y=THREE.MathUtils.lerp(door.rotation.y,door.userData.targetRotation,.16);
  activeCheckpoints().forEach((c,i)=>{const active=i<=state.stage;c.userData.beacon.scale.y=1+Math.sin(t*.004+i)*.08;c.userData.marker.material.opacity=active?.95:.35});lamps.forEach((l,i)=>l.material.emissiveIntensity=1.55+Math.sin(t*.006+i)*.18);
  lockGates.forEach(g=>g.position.y=THREE.MathUtils.lerp(g.position.y,g.userData.targetY,.12));
  heli.position.y=3.3+Math.sin(t*.002)*.18;heli.rotation.y=Math.sin(t*.0008)*.08;
  cameraTarget.copy(hero.position).addScaledVector(UP,hunterState.active&&hunterState.isMech&&state.moneyGun?2.05:1.35);
  cameraOffset.set(0,Math.sin(state.pitch)*state.cameraDistance,-Math.cos(state.pitch)*state.cameraDistance).applyAxisAngle(UP,state.yaw);
  cameraDesired.copy(cameraTarget).add(cameraOffset);
  scene.updateMatrixWorld();
  cameraDirection.copy(cameraDesired).sub(cameraTarget);const cameraLength=cameraDirection.length();cameraDirection.normalize();cameraRay.set(cameraTarget,cameraDirection);cameraRay.far=cameraLength;
  cameraCandidates.length=0;
  const cameraStage=THREE.MathUtils.clamp(Math.floor(cameraTarget.z/STAGE_LENGTH),0,activeLastStage()),minCameraX=Math.min(cameraTarget.x,cameraDesired.x)-1,maxCameraX=Math.max(cameraTarget.x,cameraDesired.x)+1,minCameraZ=Math.min(cameraTarget.z,cameraDesired.z)-1,maxCameraZ=Math.max(cameraTarget.z,cameraDesired.z)+1;
  for(const s of solids){if(!objectEnabledForMode(s)||Math.abs(s.userData.stageIndex-cameraStage)>1)continue;const bounds=objectBounds(s);if(bounds.max.x>=minCameraX&&bounds.min.x<=maxCameraX&&bounds.max.z>=minCameraZ&&bounds.min.z<=maxCameraZ)cameraCandidates.push(s)}
  const obstruction=cameraRay.intersectObjects(cameraCandidates,false)[0];if(obstruction)cameraDesired.copy(cameraTarget).addScaledVector(cameraDirection,Math.max(1.35,obstruction.distance-.35));
  camera.position.lerp(cameraDesired,1-Math.pow(.0004,dt));camera.lookAt(cameraTarget);camera.updateMatrixWorld();if(hunterState.active&&hunterState.isMech&&state.moneyGun)aimReticle.classList.toggle('locked',Boolean(aimedMechArm()));else aimReticle.classList.remove('locked');renderer.render(scene,camera);
  if(state.started&&!state.paused&&!state.won){if(!perfState.sampleStart)perfState.sampleStart=t;perfState.frames++;if(t-perfState.sampleStart>=2000){perfState.fps=Math.round(perfState.frames*1000/(t-perfState.sampleStart));fpsReadout.textContent=`${perfState.fps} FPS`;document.body.dataset.fps=String(perfState.fps);if(qualityMode==='auto'&&!defaultLowPower&&!autoDegraded){perfState.lowSamples=perfState.fps<42?perfState.lowSamples+1:0;if(perfState.lowSamples>=2){autoDegraded=true;applyQuality('auto',false);announce('已自动切换为流畅画质')}}perfState.frames=0;perfState.sampleStart=t}}
}

const cameraRay=new THREE.Raycaster();
addEventListener('keydown',e=>{if(e.target instanceof HTMLInputElement){if(e.code==='Escape')mathAnswer.blur();return}state.keys[e.code]=true;if(e.code==='Escape'&&!e.repeat)setPaused(!state.paused);if(e.code==='Space'&&!e.repeat)state.jumpBuffer=.15;if(e.code==='KeyF'&&!e.repeat)doAttack();if(e.code==='KeyC'){state.yaw=hero.rotation.y;state.pitch=.48;state.cameraDistance=8}if(['Space','ArrowUp','ArrowDown','ArrowLeft','ArrowRight'].includes(e.code))e.preventDefault()});addEventListener('keyup',e=>{if(!(e.target instanceof HTMLInputElement))state.keys[e.code]=false});
let cameraPointerId=null,lastX=0,lastY=0,dragDistance=0;renderer.domElement.addEventListener('pointerdown',e=>{if(cameraPointerId!==null)return;cameraPointerId=e.pointerId;dragDistance=0;lastX=e.clientX;lastY=e.clientY;renderer.domElement.setPointerCapture?.(e.pointerId)});renderer.domElement.addEventListener('pointermove',e=>{if(e.pointerId===cameraPointerId){const dx=e.clientX-lastX,dy=e.clientY-lastY;dragDistance+=Math.abs(dx)+Math.abs(dy);state.yaw-=dx*.006;state.pitch=THREE.MathUtils.clamp(state.pitch+dy*.004,.12,1.05);lastX=e.clientX;lastY=e.clientY}});const endCameraDrag=e=>{if(e.pointerId!==cameraPointerId)return;if(e.type==='pointerup'&&dragDistance<6&&hunterState.active)doAttack();cameraPointerId=null;renderer.domElement.releasePointerCapture?.(e.pointerId)};renderer.domElement.addEventListener('pointerup',endCameraDrag);renderer.domElement.addEventListener('pointercancel',endCameraDrag);renderer.domElement.addEventListener('wheel',e=>{e.preventDefault();state.cameraDistance=THREE.MathUtils.clamp(state.cameraDistance+Math.sign(e.deltaY)*.65,4.5,10.5)},{passive:false});renderer.domElement.addEventListener('contextmenu',e=>e.preventDefault());
let touchX=0,touchY=0,jumpTap=false,stickPointerId=null;const stick=document.querySelector('#stick'),knob=stick.querySelector('i');function stickMove(e){const b=stick.getBoundingClientRect(),x=e.clientX-(b.left+b.width/2),y=e.clientY-(b.top+b.height/2),l=Math.max(1,Math.hypot(x,y)),q=Math.min(34,l);touchX=x/l*q/34;touchY=-y/l*q/34;knob.style.transform=`translate(${touchX*34}px,${-touchY*34}px)`}stick.addEventListener('pointerdown',e=>{if(stickPointerId!==null)return;stickPointerId=e.pointerId;stick.setPointerCapture(e.pointerId);stickMove(e)});stick.addEventListener('pointermove',e=>{if(e.pointerId===stickPointerId)stickMove(e)});const releaseStick=e=>{if(e.pointerId!==stickPointerId)return;stickPointerId=null;touchX=touchY=0;knob.style.transform=''};stick.addEventListener('pointerup',releaseStick);stick.addEventListener('pointercancel',releaseStick);document.querySelector('#jump').addEventListener('pointerdown',e=>{e.stopPropagation();jumpTap=true});
attackButton.addEventListener('pointerdown',e=>{e.stopPropagation();doAttack()});
mathPanel.addEventListener('submit',event=>{event.preventDefault();if(!state.mathQuestion)return;if(isMathAnswerCorrect(state.mathQuestion,mathAnswer.value)){announce(`✓ ${MEDONG_PRAISE[Math.floor(Math.random()*MEDONG_PRAISE.length)]}`);beep(820,.18);if(state.stage===activeLastStage())completeGame();else startMathStage(state.stage+1)}else die('答错了，被梅东老师直接击败')});
rosisterPanel.addEventListener('submit',event=>{event.preventDefault();submitRosisterAnswer()});
function startMode(mode){state.mode=mode;document.querySelector('#start').classList.add('hidden');state.started=true;state.start=performance.now();audio.start();reset(true);showBest()}
document.querySelector('#playRosister').onclick=()=>startMode('rosister');
function startShortcut(config){startMode(config.mode);for(const index of config.rescuedIndices||[]){rescueState.keys.add(index);rescueState.rescued.add(index)}syncRescueObjects();updateStage(config.stage);hero.position.copy(state.checkpoint);state.velocity.set(0,0,0);skinReward.classList.add('hidden');announce(config.mode==='escape'&&config.stage===LAST_STAGE?'🤖 最终 Boss 试玩 · 先到绿色箱子拿钞票枪':config.stage===13?'🔧 第 14 关试玩 · 梅东即将进入安全战区':'🚻 厕所关卡试玩 · 10 位球员与全部增益已就绪')}
function returnToModes(){state.started=false;state.won=false;state.paused=false;resetToiletDoors();pauseMenu.classList.add('hidden');document.querySelector('#win').classList.add('hidden');mathPanel.classList.add('hidden');rescueHud.classList.add('hidden');hunter.visible=false;hunterHud.classList.add('hidden');attackButton.classList.add('hidden');for(const follower of rescueFollowers)follower.visible=false;audio.pause();document.querySelector('#start').classList.remove('hidden')}
document.querySelector('#play').onclick=()=>startMode('escape');document.querySelector('#playMath').onclick=()=>startMode('math');document.querySelector('#playRescue').onclick=()=>startMode('rescue');document.querySelector('#reset').onclick=()=>reset(true);document.querySelector('#again').onclick=()=>reset(true);document.querySelector('#changeMode').onclick=returnToModes;document.querySelector('#changeModeWin').onclick=returnToModes;let sound=true;document.querySelector('#sound').onclick=e=>{sound=!sound;audio.setEnabled(sound);e.currentTarget.textContent=sound?'🔊':'🔇'};document.querySelector('#pauseButton').onclick=()=>setPaused(true);document.querySelector('#resume').onclick=()=>setPaused(false);document.querySelector('#pauseRestart').onclick=()=>{reset(true);audio.resume()};qualitySelect.onchange=e=>{autoDegraded=false;perfState.lowSamples=0;applyQuality(e.target.value);announce(`画质：${e.target.selectedOptions[0].text}`)};
for(const id of ['skins','openSkins','winSkins'])document.querySelector(`#${id}`).onclick=openWardrobe;document.querySelector('#closeSkins').onclick=closeWardrobe;document.querySelector('#claimMedong').onclick=()=>{skinProfile.claimedMedong=true;skinProfile.selected='medong';saveSkinProfile();skinReward.classList.add('hidden');applyHeroSkin();renderSkinGrid();announce('✓ 梅东皮肤已永久领取')};
document.addEventListener('visibilitychange',()=>{if(document.hidden&&state.started&&!state.won)setPaused(true)});
addEventListener('resize',()=>{camera.aspect=innerWidth/innerHeight;camera.fov=innerWidth<innerHeight?66:58;camera.updateProjectionMatrix();renderer.setPixelRatio(Math.min(devicePixelRatio,activeLowPower?1:1.5));renderer.setSize(innerWidth,innerHeight)});
skinReward.classList.toggle('hidden',skinProfile.claimedMedong);renderSkinGrid();applyQuality(qualityMode,false);showBest();reset(true);const shortcut=launchShortcut(location.search);if(shortcut)startShortcut(shortcut);tick(0);
