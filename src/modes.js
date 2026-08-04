export const MODE_CONFIG={
  escape:{stageCount:20,title:'经典越狱',winTitle:'越狱成功！',winCopy:'本次 20 关逃脱用时'},
  math:{stageCount:12,title:'数学期末考试',winTitle:'期末满分！',winCopy:'梅东老师认可了你的 12 关成绩'},
  rescue:{stageCount:15,title:'球星拯救',winTitle:'全员获救！',winCopy:'你带领球员们完成了 15 关撤离'},
};

export const RESCUE_PLAYERS=[
  {name:'B罗',color:0xd8d8d0},
  {name:'小狐狸',color:0xe45e3b},
  {name:'外马尔',color:0xe4c43b},
  {name:'黄金小兔兔',color:0xd7aa45},
  {name:'姆久佩',color:0x4866b3},
  {name:'朱古力',color:0x6f422b},
  {name:'哈哈哈',color:0x7ccbe8},
  {name:'小孩哥',color:0x8d4ab7},
  {name:'小美叔叔',color:0xe2e2de},
  {name:'德克米',color:0xb93338},
];

export const SKIN_CATALOG=[
  {id:'prisoner',name:'默认囚犯',color:0xd9771f,kind:'default'},
  {id:'ponytail',name:'马尾女孩',color:0xe68b2c,kind:'default'},
  {id:'medong',name:'梅东',color:0x74c8ee,kind:'medong'},
  ...RESCUE_PLAYERS.map((player,index)=>({id:`rescue-${index}`,name:player.name,color:player.color,kind:'rescue'})),
];
export const RESCUE_REWARD_SKIN_IDS=RESCUE_PLAYERS.map((_,index)=>`rescue-${index}`);
export function unlockedSkinIds({claimedMedong=false,rescueCompleted=false}={}){
  const unlocked=['prisoner','ponytail'];
  if(claimedMedong)unlocked.push('medong');
  if(rescueCompleted)unlocked.push(...RESCUE_REWARD_SKIN_IDS);
  return unlocked;
}

export function createToiletLayout(rng=Math.random){
  const layout=['tunnel','corpse','corpse','medong'];
  for(let i=layout.length-1;i>0;i--){const j=Math.floor(rng()*(i+1));[layout[i],layout[j]]=[layout[j],layout[i]]}
  return layout;
}
export function isToiletNoCombat(mode,stage){return mode==='escape'&&stage===11}

// 每组钥匙与笼子都落在对应关卡的安全落脚区域，避免隔墙拾取或必须踩机关才能营救。
export const RESCUE_PLACEMENTS=[
  {key:[-4.6,.15,8],cage:[4.7,0,18]},
  {key:[4.4,.15,36],cage:[-4.4,0,56]},
  {key:[-1.5,.65,66],cage:[0,.65,84.5]},
  {key:[-4.8,.15,94],cage:[4.8,0,116]},
  {key:[4.8,.15,124],cage:[-4.8,0,146]},
  {key:[-1.6,.7,157],cage:[-1.6,.7,173]},
  {key:[-1.35,.5,185],cage:[1.35,1.4,205]},
  {key:[-5.5,.15,214],cage:[0,0,236]},
  {key:[0,.15,244],cage:[0,0,266]},
  {key:[-4.5,.15,274],cage:[4.5,0,296]},
];

const integer=(rng,min,max)=>Math.floor(rng()*(max-min+1))+min;
const gcd=(a,b)=>b?gcd(b,a%b):a;
const question=(prompt,answer)=>({prompt,answer:Number(answer.toFixed?.(4)??answer)});

export function createMathQuestion(level,rng=Math.random){
  const difficulty=Math.max(0,Math.min(11,level));
  if(difficulty===0){const a=integer(rng,4,12),b=integer(rng,3,10);return question(`${a} + ${b} = ?`,a+b)}
  if(difficulty===1){const b=integer(rng,5,18),answer=integer(rng,4,16);return question(`${b+answer} − ${b} = ?`,answer)}
  if(difficulty===2){const a=integer(rng,3,8),b=integer(rng,3,9);return question(`${a} × ${b} = ?`,a*b)}
  if(difficulty===3){const answer=integer(rng,3,12),divisor=integer(rng,2,9);return question(`${answer*divisor} ÷ ${divisor} = ?`,answer)}
  if(difficulty===4){const a=integer(rng,3,9),b=integer(rng,2,7),c=integer(rng,2,12);return question(`${a} × ${b} + ${c} = ?`,a*b+c)}
  if(difficulty===5){const answer=integer(rng,4,18),add=integer(rng,3,14);return question(`x + ${add} = ${answer+add}，x = ?`,answer)}
  if(difficulty===6){const denominator=integer(rng,4,10),a=integer(rng,1,denominator-2),b=integer(rng,1,denominator-a);const total=a+b,g=gcd(total,denominator);return question(`${a}/${denominator} + ${b}/${denominator} = ?（填小数）`,total/denominator)}
  if(difficulty===7){const percent=[10,20,25,50][integer(rng,0,3)],base=integer(rng,2,12)*20;return question(`${base} 的 ${percent}% 是多少？`,base*percent/100)}
  if(difficulty===8){const a=integer(rng,2,5),power=integer(rng,2,3),minus=integer(rng,1,8);return question(`${a} 的 ${power} 次方 − ${minus} = ?`,a**power-minus)}
  if(difficulty===9){const length=integer(rng,5,14),width=integer(rng,3,9);return question(`长方形长 ${length}、宽 ${width}，面积是多少？`,length*width)}
  if(difficulty===10){const answer=integer(rng,3,12),factor=integer(rng,2,6),add=integer(rng,4,18);return question(`${factor}x + ${add} = ${factor*answer+add}，x = ?`,answer)}
  const answer=integer(rng,3,10),factor=integer(rng,2,5),left=integer(rng,2,9);return question(`${factor}(x + ${left}) = ${factor*(answer+left)}，x = ?`,answer)
}

export function isMathAnswerCorrect(questionValue,input){
  const value=Number(String(input).trim());
  return Number.isFinite(value)&&Math.abs(value-questionValue.answer)<.01;
}

export function requiredRescueForCheckpoint(nextStage){return nextStage>=1&&nextStage<=RESCUE_PLAYERS.length?nextStage-1:null}
export function rescueHunterHp(stage){return 170+Math.max(0,stage)*24}
export const MEDONG_PRAISE=['不错，脑子转得很快！','答得漂亮，继续保持！','梅东老师认可你了！','这一步很稳，下一间教室见！','完全正确，有点东西！'];
