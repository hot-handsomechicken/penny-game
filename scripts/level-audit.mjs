const physics={speed:7.2,jump:10,gravity:22};
const landingRange=height=>{
  const discriminant=physics.jump**2-2*physics.gravity*height;
  if(discriminant<0)return 0;
  return physics.speed*(physics.jump+Math.sqrt(discriminant))/physics.gravity;
};
const maxStep=(route)=>Math.max(...route.slice(1).map((p,i)=>Math.hypot(p[0]-route[i][0],p[1]-route[i][1])));
const checks=[
  {name:'排污渠浮箱',route:[[-2.4,66],[0,70],[2.4,74],[0,78],[-2.4,82],[0,85]],rise:.625},
  {name:'厨房炉台',route:[[-1.6,157],[1.6,161],[-1.6,165],[1.6,169],[-1.6,173]],rise:.68},
  {name:'通风管踏板',route:[[-1.35,185],[1.35,189],[-1.35,193],[1.35,197],[-1.35,201],[1.35,205]],rise:.18}
];
let failed=false;
console.log(`角色同高度最大跳跃距离: ${landingRange(0).toFixed(2)} 方块`);
for(const check of checks){
  const step=maxStep(check.route),range=landingRange(check.rise),ratio=step/range;
  const pass=ratio<=.9;failed||=!pass;
  console.log(`${pass?'PASS':'FAIL'}  ${check.name.padEnd(8)} 跨度 ${step.toFixed(2)} / 能力 ${range.toFixed(2)} / 使用率 ${(ratio*100).toFixed(0)}%`);
}
const spikeCenterGap=3,spikeDangerDiameter=2*(.5+.28),spikeClearance=spikeCenterGap-spikeDangerDiameter;
const spikePass=spikeClearance>=1.2;failed||=!spikePass;
console.log(`${spikePass?'PASS':'FAIL'}  操场尖刺通道  净宽 ${spikeClearance.toFixed(2)} 方块`);
if(failed)process.exitCode=1;
