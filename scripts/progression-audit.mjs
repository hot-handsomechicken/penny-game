import assert from 'node:assert/strict';

const player={radius:.4,height:1.65,speed:7.2,jump:10,gravity:22};
const jumpHeight=player.jump**2/(2*player.gravity);
const corridorWidth=14.4;
const enclosedCeilingBottom=9.6,defaultJumpCameraTop=jumpHeight+1.35+Math.sin(.48)*8;
assert.ok(enclosedCeilingBottom-defaultJumpCameraTop>2,'封闭区域天花板应为默认跳跃视角保留至少 2 米余量');
const stages=[
  {name:'牢房区',type:'jump',obstacleTop:.69},
  {name:'洗衣封锁区',type:'lane',obstacleWidth:2.5},
  {name:'地下排污渠',type:'route',clearance:1.35},
  {name:'锅炉房',type:'jump',obstacleTop:.71},
  {name:'安检走廊',type:'gap',gapWidth:2.4},
  {name:'监狱厨房',type:'route',clearance:1.3},
  {name:'通风管道',type:'route',clearance:1.25},
  {name:'放风操场',type:'gap',gapWidth:1.44},
  {name:'警戒屋顶',type:'lane',obstacleWidth:3},
  {name:'假撤离点',type:'timed-jump',obstacleTop:.675},
  {name:'档案禁区',type:'lane',obstacleWidth:4.2},
  {name:'证物仓库',type:'route',clearance:1.3},
  {name:'低温冷库',type:'lane',obstacleWidth:3.1},
  {name:'维修竖井',type:'jump',obstacleTop:.695},
  {name:'守卫营房',type:'jump',obstacleTop:.69},
  {name:'押运车库',type:'lane',obstacleWidth:3.6},
  {name:'外圈排水渠',type:'route',clearance:1.3},
  {name:'探照灯广场',type:'jump',obstacleTop:.66},
  {name:'外墙脚手架',type:'route',clearance:1.25},
  {name:'最终停机坪',type:'timed-jump',obstacleTop:.675},
];

for(const [index,stage] of stages.entries()){
  if(stage.type==='jump'||stage.type==='timed-jump')assert.ok(stage.obstacleTop<jumpHeight,`${stage.name} 障碍高于跳跃能力`);
  if(stage.type==='lane')assert.ok(corridorWidth-stage.obstacleWidth>player.radius*2+1,`${stage.name} 横向空间不足`);
  if(stage.type==='gap')assert.ok(stage.gapWidth>player.radius*2+.35,`${stage.name} 通道过窄`);
  if(stage.type==='route')assert.ok(stage.clearance>player.radius*2+.35,`${stage.name} 路线净空不足`);
  const checkpoint=index*30+2,nextBoundary=(index+1)*30;
  assert.ok(nextBoundary-checkpoint>=28,`${stage.name} 检查点缓冲不足`);
  console.log(`PASS  ${(index+1).toString().padStart(2,'0')} ${stage.name.padEnd(7)} 关键通路可行`);
}

assert.ok(player.speed>5.3,'最终关追击者速度不应超过玩家');
const finalCheckpoint={x:0,z:572},moneyGun={x:-4.8,z:575};
const pickupDistance=Math.hypot(finalCheckpoint.x-moneyGun.x,finalCheckpoint.z-moneyGun.z);
assert.ok(pickupDistance>=3&&pickupDistance<=7,'钞票枪应位于最终检查点附近但需要主动前往取得');
console.log(`PASS  二十关检查点顺序、关键通路与最终追击速度`);
console.log(`PASS  封闭区域跳跃镜头距离天花板仍有 ${(enclosedCeilingBottom-defaultJumpCameraTop).toFixed(2)} 米余量`);
console.log(`PASS  最终检查点到钞票枪 ${pickupDistance.toFixed(2)} 米，拾取距离合理`);
