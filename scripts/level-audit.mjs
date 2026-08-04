const physics={speed:7.2,jump:10,gravity:22};
const landingRange=height=>{
  const discriminant=physics.jump**2-2*physics.gravity*height;
  if(discriminant<0)return 0;
  return physics.speed*(physics.jump+Math.sqrt(discriminant))/physics.gravity;
};
const maxStep=(route)=>Math.max(...route.slice(1).map((p,i)=>Math.hypot(p[0]-route[i][0],p[1]-route[i][1])));
const checks=[
  {name:'排污渠浮箱',route:[[-1.5,66],[0,69.8],[1.5,73.6],[0,77.4],[-1.5,81.2],[0,84.5]],rise:.625,maxUsage:.72},
  {name:'厨房炉台',route:[[-1.6,157],[1.6,161],[-1.6,165],[1.6,169],[-1.6,173]],rise:.68},
  {name:'通风管踏板',route:[[-1.35,185],[1.35,189],[-1.35,193],[1.35,197],[-1.35,201],[1.35,205]],rise:.18},
  {name:'证物仓浮箱',route:[[-2.5,337],[0,341],[2.5,345],[0,349],[-2.5,353],[0,356]],rise:0},
  {name:'外圈排水箱',route:[[2.5,487],[0,491],[-2.5,495],[0,499],[2.5,503],[0,506]],rise:0},
  {name:'外墙脚手架',route:[[-2.5,546],[0,550],[2.5,554],[0,558],[-2.5,562],[0,566]],rise:.2}
];
let failed=false;
console.log(`角色同高度最大跳跃距离: ${landingRange(0).toFixed(2)} 方块`);
for(const check of checks){
  const step=maxStep(check.route),range=landingRange(check.rise),ratio=step/range;
  const pass=ratio<=(check.maxUsage||.9);failed||=!pass;
  console.log(`${pass?'PASS':'FAIL'}  ${check.name.padEnd(8)} 跨度 ${step.toFixed(2)} / 能力 ${range.toFixed(2)} / 使用率 ${(ratio*100).toFixed(0)}%`);
}
const spikeCenterGap=3,spikeDangerDiameter=2*(.5+.28),spikeClearance=spikeCenterGap-spikeDangerDiameter;
const spikePass=spikeClearance>=1.2;failed||=!spikePass;
console.log(`${spikePass?'PASS':'FAIL'}  操场尖刺通道  净宽 ${spikeClearance.toFixed(2)} 方块`);
const boilerArmLength=8.5,boilerMaxSpeed=.82,boilerSideClearance=(14.4-boilerArmLength)/2;
const boilerPass=boilerSideClearance>=2.5&&boilerMaxSpeed<=.85;failed||=!boilerPass;
console.log(`${boilerPass?'PASS':'FAIL'}  锅炉房短旋臂  侧边安全区 ${boilerSideClearance.toFixed(2)} / 最高转速 ${boilerMaxSpeed.toFixed(2)}`);
if(failed)process.exitCode=1;
