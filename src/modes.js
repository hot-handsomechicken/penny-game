export const MODE_CONFIG={
  escape:{stageCount:20,title:'经典越狱',winTitle:'越狱成功！',winCopy:'本次 20 关逃脱用时'},
  math:{stageCount:12,title:'数学期末考试',winTitle:'期末满分！',winCopy:'梅东老师认可了你的 12 关成绩'},
  rescue:{stageCount:15,title:'球星拯救',winTitle:'全员获救！',winCopy:'你带领球员们完成了 15 关撤离'},
};
export const STAR_FACE_TEXTURE_SIZE=64;
export const STAR_FACE_STYLE='dot-eyes-smile';
export const MEDONG_APPEARANCE=Object.freeze({beard:0x3a251d,facialHair:'short-full-beard'});

export const RESCUE_PLAYERS=[
  {name:'B罗',buff:'attack',country:'葡萄牙',team:'portugal',number:7,color:0xb51f2e,accent:0x17633f,shortsColor:0x17633f,appearance:{skin:0xd09a72,hair:0x190d07,style:'swept-forelock',faceWidth:.75,faceHeight:.74}},
  {name:'小狐狸',buff:'attack',country:'葡萄牙',team:'portugal',number:11,color:0xb51f2e,accent:0x17633f,shortsColor:0x17633f,appearance:{skin:0xd8a17b,hair:0x211109,style:'fluffy-curls',faceWidth:.71,faceHeight:.76}},
  {name:'外马尔',buff:'strength',country:'巴西',team:'brazil',number:10,color:0xf2d52b,accent:0x158447,shortsColor:0x2455a4,appearance:{skin:0xb97955,hair:0x55351f,style:'spiky-highlight-crop',faceWidth:.72,faceHeight:.73}},
  {name:'黄金小兔兔',buff:'strength',country:'克罗地亚',team:'croatia',number:10,color:0xf2f2ed,accent:0xd6293b,shortsColor:0x173f77,appearance:{skin:0xe0ae86,hair:0x8f6738,hairAccent:0x684623,style:'dark-golden-pageboy',faceWidth:.68,faceHeight:.82}},
  {name:'姆久佩',buff:'attack',country:'法国',team:'france',number:10,color:0x173d78,accent:0xd5263a,shortsColor:0x132c57,appearance:{skin:0x8b573e,hair:0x090909,style:'close-crop',faceWidth:.77,faceHeight:.72}},
  {name:'朱古力',buff:'speed',country:'英格兰',team:'england',number:10,color:0xf1f2ee,accent:0x1b2d50,shortsColor:0x1b2d50,appearance:{skin:0x7e503a,hair:0x1d0f08,style:'rounded-curly-top',faceWidth:.74,faceHeight:.76}},
  {name:'哈哈哈',buff:'speed',country:'挪威',team:'norway',number:9,color:0xd72837,accent:0x142b54,shortsColor:0x142b54,appearance:{skin:0xe5bb98,hair:0xefd2a5,style:'short-blond-brush',faceWidth:.73,faceHeight:.82}},
  {name:'小孩哥',buff:'strength',country:'西班牙',team:'spain',number:19,color:0xb51f2e,accent:0xf0c529,shortsColor:0x263b70,appearance:{skin:0x9e6549,hair:0x918979,hairAccent:0x12100e,style:'bleached-tight-curls',faceWidth:.72,faceHeight:.73}},
  {name:'小美叔叔',buff:'jump',country:'英格兰',team:'england',number:9,color:0xf1f2ee,accent:0x1b2d50,shortsColor:0x1b2d50,appearance:{skin:0xdbac89,hair:0xa68f6c,beard:0x76583d,facialHair:'short-full-beard',style:'blond-side-sweep',faceWidth:.76,faceHeight:.78}},
  {name:'德克米',buff:'jump',country:'英格兰',team:'england',number:4,color:0xf1f2ee,accent:0x1b2d50,shortsColor:0x1b2d50,appearance:{skin:0xd7a37e,hair:0x100d0b,style:'messy-short-crop',faceWidth:.74,faceHeight:.74}},
];

export const RESCUE_BUFF_LABELS=Object.freeze({attack:'攻击力',strength:'力量',jump:'弹跳',speed:'速度'});
export const RESCUE_BUFF_EFFECTS=Object.freeze({attackDamage:1,strengthRange:.16,strengthKnockback:.16,jumpVelocity:.65,speed:.55});
export const STAGE14_TUNING=Object.freeze({staticBeamZ:416,staticBeamWidth:7.4,rotatingArmLength:6.2,rotatingArmSpeed:.48,hitPadding:.08,hunterSpawnOffset:7});
export function rescueBuffTotals(rescuedIndices=[]){
  const totals={attack:0,strength:0,jump:0,speed:0};
  for(const index of rescuedIndices){const type=RESCUE_PLAYERS[index]?.buff;if(type)totals[type]++}
  return totals;
}
export function hunterSpawnForStage(stage,{isMech=false,stageLength=30}={}){
  if(isMech)return{x:0,z:stage*stageLength+22};
  if(stage===13)return{x:0,z:stage*stageLength+STAGE14_TUNING.hunterSpawnOffset};
  return{x:stage%2?4:-4,z:stage*stageLength+16};
}
export function launchShortcut(search=''){
  const params=new URLSearchParams(search);
  const play=params.get('play'),rescuedIndices=RESCUE_PLAYERS.map((_,index)=>index);
  if(play==='rescue-toilet')return{mode:'rescue',stage:10,rescuedIndices};
  if(play==='rescue-stage14')return{mode:'rescue',stage:13,rescuedIndices};
  if(play==='final-boss')return{mode:'escape',stage:19,rescuedIndices:[]};
  return null;
}

export const SKIN_CATALOG=[
  {id:'prisoner',name:'默认囚犯',color:0xd9771f,kind:'default'},
  {id:'ponytail',name:'马尾女孩',color:0xe68b2c,kind:'default'},
  {id:'medong',name:'梅东',color:0x74c8ee,kind:'medong'},
  ...RESCUE_PLAYERS.map((player,index)=>({id:`rescue-${index}`,name:player.name,country:player.country,color:player.color,accent:player.accent,kind:'rescue'})),
];
export const RESCUE_REWARD_SKIN_IDS=RESCUE_PLAYERS.map((_,index)=>`rescue-${index}`);
export function unlockedSkinIds({claimedMedong=false,rescueCompleted=false}={}){
  const unlocked=['prisoner','ponytail'];
  if(claimedMedong)unlocked.push('medong');
  if(rescueCompleted)unlocked.push(...RESCUE_REWARD_SKIN_IDS);
  return unlocked;
}

export const TOILET_LAYOUT=Object.freeze(['corpse','tunnel','medong','corpse']);
export function isToiletNoCombat(mode,stage){return (mode==='escape'||mode==='rescue')&&stage===11}

// 队友平时使用不规则松散队形；战斗时收拢在玩家两侧，不排成整齐纵队。
export const RESCUE_TRAIL_OFFSETS=Object.freeze([
  [-1.45,-1.3],[1.05,-2.15],[-.25,-3.05],[2.2,-3.55],[-2.4,-4.05],
  [.75,-4.8],[-1.15,-5.55],[2.45,-5.95],[-2.65,-6.55],[.15,-7.05],
]);
export const RESCUE_BATTLE_OFFSETS=Object.freeze([
  [-1.2,-.15],[1.35,.1],[-2.05,.55],[2.15,-.5],[-1.65,-1.25],
  [1.8,-1.45],[-2.65,-.65],[2.7,.7],[-.65,-2.05],[.8,-1.95],
]);

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
