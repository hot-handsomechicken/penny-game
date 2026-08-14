export const MODE_CONFIG={
  escape:{stageCount:20,title:'经典越狱',winTitle:'越狱成功！',winCopy:'本次 20 关逃脱用时'},
  math:{stageCount:12,title:'数学期末考试',winTitle:'期末满分！',winCopy:'梅东老师认可了你的 12 关成绩'},
  rescue:{stageCount:15,title:'球星拯救',winTitle:'全员获救！',winCopy:'你带领球员们完成了 15 关撤离'},
  rosister:{stageCount:5,title:'萝姐挑战',winTitle:'萝姐获救！',winCopy:'你在限时答题中救出了萝姐'},
};
export const STAR_FACE_TEXTURE_SIZE=64;
export const STAR_FACE_STYLE='dot-eyes-smile';
export const MEDONG_APPEARANCE=Object.freeze({beard:0x3a251d,facialHair:'short-full-beard'});

export const RESCUE_PLAYERS=[
  {name:'萝姐',buff:'attack',country:'葡萄牙',team:'portugal',number:7,color:0xb51f2e,accent:0x17633f,shortsColor:0x17633f,appearance:{skin:0xd09a72,hair:0x190d07,style:'swept-forelock',faceWidth:.75,faceHeight:.74}},
  {name:'小狐狸',buff:'attack',country:'葡萄牙',team:'portugal',number:11,color:0xb51f2e,accent:0x17633f,shortsColor:0x17633f,appearance:{skin:0xd8a17b,hair:0x211109,style:'fluffy-curls',faceWidth:.71,faceHeight:.76}},
  {name:'外马尔',buff:'strength',country:'巴西',team:'brazil',number:10,color:0xf2d52b,accent:0x158447,shortsColor:0x2455a4,appearance:{skin:0xb97955,hair:0x55351f,style:'spiky-highlight-crop',faceWidth:.72,faceHeight:.73}},
  {name:'黄金小兔兔',buff:'strength',country:'克罗地亚',team:'croatia',number:10,color:0xf2f2ed,accent:0xd6293b,shortsColor:0x173f77,appearance:{skin:0xe0ae86,hair:0x8f6738,hairAccent:0x684623,style:'dark-golden-pageboy',faceWidth:.68,faceHeight:.82}},
  {name:'姆久佩',buff:'attack',country:'法国',team:'france',number:10,color:0x173d78,accent:0xd5263a,shortsColor:0x132c57,appearance:{skin:0x8b573e,hair:0x090909,style:'close-crop',faceWidth:.77,faceHeight:.72}},
  {name:'朱古力',buff:'speed',country:'英格兰',team:'england',number:10,color:0xf1f2ee,accent:0x1b2d50,shortsColor:0x1b2d50,appearance:{skin:0x7e503a,hair:0x1d0f08,style:'rounded-curly-top',faceWidth:.74,faceHeight:.76}},
  {name:'哈哈哈',buff:'speed',country:'挪威',team:'norway',number:9,color:0xd72837,accent:0x142b54,shortsColor:0x142b54,appearance:{skin:0xe5bb98,hair:0xefd2a5,style:'short-blond-brush',faceWidth:.73,faceHeight:.82}},
  {name:'小孩哥',buff:'strength',country:'西班牙',team:'spain',number:19,color:0xb51f2e,accent:0xf0c529,shortsColor:0x263b70,appearance:{skin:0x9e6549,hair:0x918979,hairAccent:0x12100e,style:'bleached-tight-curls',faceWidth:.72,faceHeight:.73}},
  {name:'小美叔叔',buff:'jump',country:'英格兰',team:'england',number:9,color:0xf1f2ee,accent:0x1b2d50,shortsColor:0x1b2d50,appearance:{skin:0xdbac89,hair:0xa68f6c,beard:0x76583d,facialHair:'short-full-beard',style:'blond-side-sweep',faceWidth:.76,faceHeight:.78}},
  {name:'德克米',buff:'jump',country:'英格兰',team:'england',number:4,color:0xf1f2ee,accent:0x1b2d50,shortsColor:0x1b2d50,appearance:{skin:0xd7a37e,hair:0x100d0b,style:'messy-short-crop',faceWidth:.74,faceHeight:.74}},
  {name:'拉墨水',buff:'attack',country:'西班牙',team:'spain',number:4,color:0xb51f2e,accent:0xf0c529,shortsColor:0x263b70,appearance:{skin:0x9c654a,hair:0x1a130f,style:'lms-short-undercut',faceWidth:.74,faceHeight:.75}},
  {name:'白雪公主-卡',buff:'strength',country:'巴西',team:'brazil',number:10,color:0xf2d52b,accent:0x158447,shortsColor:0x2455a4,appearance:{skin:0xe5bb98,hair:0x100c09,style:'kk-long-fringe',faceWidth:.75,faceHeight:.76}},
  {name:'饿的糕',buff:'speed',country:'挪威',team:'norway',number:10,color:0xd72837,accent:0x142b54,shortsColor:0x142b54,appearance:{skin:0xe1b28e,hair:0x5f4633,style:'edg-flat-crop',faceWidth:.74,faceHeight:.77}},
  {name:'小马宝莉',buff:'jump',country:'法国',team:'france',number:9,color:0x173d78,accent:0xd5263a,shortsColor:0x132c57,appearance:{skin:0xb87958,hair:0x251812,style:'bzm-widow',faceWidth:.76,faceHeight:.74}},
  {name:'带刀侍卫',buff:'strength',country:'葡萄牙',team:'portugal',number:3,color:0xb51f2e,accent:0x17633f,shortsColor:0x17633f,appearance:{skin:0xb97955,hair:0x17120f,style:'bald',faceWidth:.76,faceHeight:.76}},
];
export const RESCUE_MODE_PLAYER_INDICES=Object.freeze(RESCUE_PLAYERS.slice(1).map((_,index)=>index+1));
export const RESCUE_MODE_PLAYERS=Object.freeze(RESCUE_MODE_PLAYER_INDICES.map(index=>RESCUE_PLAYERS[index]));

export const RESCUE_STAGE_SCENES=Object.freeze([
  {name:'地下接应暗道',mission:'绕过掩体找到钥匙',kind:'cover-maze'},
  {name:'巡逻犬舍外围',mission:'利用犬舍间隙避开巡逻灯',kind:'patrol-yard'},
  {name:'高压配电中心',mission:'沿绝缘平台穿过电缆区',kind:'power-grid'},
  {name:'隔离医务通道',mission:'避开移动病床完成营救',kind:'medical-run'},
  {name:'访客登记迷宫',mission:'穿过交错隔墙寻找牢笼',kind:'visitor-maze'},
  {name:'货运升降井',mission:'踩稳货台越过深坑',kind:'freight-lift'},
  {name:'监控服务器层',mission:'避开扫描激光爬上平台',kind:'server-floor'},
  {name:'垃圾压缩站',mission:'观察压缩机节奏穿过通道',kind:'compactor'},
  {name:'排水泵房',mission:'沿泵房踏板跨过积水',kind:'pump-room'},
  {name:'伪造证件库',mission:'绕过档案柜和安检门',kind:'identity-vault'},
  {name:'监狱厕所入口',mission:'进入监狱厕所',kind:'shared-toilet'},
  {name:'四选一隔间',mission:'找到固定的正确隔间',kind:'shared-toilet'},
  {name:'厕所下水道',mission:'沿厕所地洞爬过下水道',kind:'shared-toilet'},
  {name:'地下押运月台',mission:'避开横移行李车抵达出口',kind:'transfer-platform'},
  {name:'梅东最终围捕',mission:'与全体获救球员击败最终梅东',kind:'shared-final-boss'},
]);
export const RESCUE_SHARED_STAGE_INDICES=Object.freeze([10,11,12,14]);
export const RESCUE_UNIQUE_STAGE_INDICES=Object.freeze([0,1,2,3,4,5,6,7,8,9,13]);
export const RESCUE_FINAL_BOSS_STAGE=14;
export const RESCUE_PLATFORM_ROUTES=Object.freeze({
  freight:Object.freeze([[-1.6,157],[1.5,161],[-1.5,165],[1.5,169],[-1.6,173],[0,177]]),
  pump:Object.freeze([[0,248],[-1.3,251.6],[1.3,255.2],[-1.3,258.8],[1.3,262.4],[0,266],[0,270]]),
});

export const RESCUE_BUFF_LABELS=Object.freeze({attack:'攻击力',strength:'力量',jump:'弹跳',speed:'速度'});
export const RESCUE_BUFF_EFFECTS=Object.freeze({attackDamage:1,strengthRange:.16,strengthKnockback:.16,jumpVelocity:.65,speed:.55});
export const STAGE14_TUNING=Object.freeze({staticBeamZ:416,staticBeamWidth:7.4,rotatingArmLength:6.2,rotatingArmSpeed:.48,hitPadding:.08,hunterSpawnOffset:7});
export function rescueBuffTotals(rescuedIndices=[]){
  const totals={attack:0,strength:0,jump:0,speed:0};
  for(const index of rescuedIndices){const type=RESCUE_PLAYERS[index]?.buff;if(type)totals[type]++}
  return totals;
}
export function rescueModeBuffTotals(rescuedIndices=[]){
  const totals={attack:0,strength:0,jump:0,speed:0};
  for(const index of rescuedIndices){const type=RESCUE_MODE_PLAYERS[index]?.buff;if(type)totals[type]++}
  return totals;
}
export function hunterSpawnForStage(stage,{isMech=false,stageLength=30}={}){
  if(isMech)return{x:0,z:stage*stageLength+22};
  if(stage===RESCUE_FINAL_BOSS_STAGE)return{x:0,z:stage*stageLength+16};
  if(stage===13)return{x:0,z:stage*stageLength+STAGE14_TUNING.hunterSpawnOffset};
  return{x:stage%2?4:-4,z:stage*stageLength+16};
}
export function launchShortcut(search=''){
  const params=new URLSearchParams(search);
  const play=params.get('play'),rescuedIndices=RESCUE_MODE_PLAYERS.map((_,index)=>index);
  if(play==='rescue-toilet')return{mode:'rescue',stage:10,rescuedIndices};
  if(play==='rescue-stage14')return{mode:'rescue',stage:13,rescuedIndices};
  if(play==='final-boss')return{mode:'escape',stage:19,rescuedIndices:[]};
  if(play==='rosister')return{mode:'rosister',stage:0,rescuedIndices:[]};
  return null;
}

export const SKIN_CATALOG=[
  {id:'prisoner',name:'默认囚犯',color:0xd9771f,kind:'default'},
  {id:'ponytail',name:'马尾女孩',color:0xe68b2c,kind:'default'},
  {id:'medong',name:'梅东',color:0x74c8ee,kind:'medong'},
  ...RESCUE_PLAYERS.map((player,index)=>({id:`rescue-${index}`,name:player.name,country:player.country,color:player.color,accent:player.accent,kind:'rescue'})),
];
export const RESCUE_REWARD_SKIN_IDS=RESCUE_MODE_PLAYER_INDICES.map(index=>`rescue-${index}`);
export const RESCUE_ROSISTER_SKIN_ID='rescue-0';
export function unlockedSkinIds({claimedMedong=false,rescueCompleted=false,rosisterCompleted=false}={}){
  const unlocked=['prisoner','ponytail'];
  if(claimedMedong)unlocked.push('medong');
  if(rescueCompleted)unlocked.push(...RESCUE_REWARD_SKIN_IDS);
  if(rosisterCompleted)unlocked.push(RESCUE_ROSISTER_SKIN_ID);
  return unlocked;
}

export const TOILET_LAYOUT=Object.freeze(['corpse','tunnel','medong','corpse']);
export function isToiletNoCombat(mode,stage){return (mode==='escape'||mode==='rescue')&&stage===11}

// 队友平时使用不规则松散队形；战斗时收拢在玩家两侧，不排成整齐纵队。
export const RESCUE_TRAIL_OFFSETS=Object.freeze([
  [-1.45,-1.3],[1.05,-2.15],[-.25,-3.05],[2.2,-3.55],[-2.4,-4.05],
  [.75,-4.8],[-1.15,-5.55],[2.45,-5.95],[-2.65,-6.55],[.15,-7.05],[-2.8,-7.7],[2.8,-8.2],[-1.2,-8.8],[1.3,-9.3],[-.2,-10.1],
]);
export const RESCUE_BATTLE_OFFSETS=Object.freeze([
  [-1.2,-.15],[1.35,.1],[-2.05,.55],[2.15,-.5],[-1.65,-1.25],
  [1.8,-1.45],[-2.65,-.65],[2.7,.7],[-.65,-2.05],[.8,-1.95],[-2.4,-1.7],[2.4,-1.7],[-1.8,-2.3],[1.8,-2.3],[0,-2.6],
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
  {key:[4.6,.15,304],cage:[-4.6,0,326]},
  {key:[-4.6,.15,334],cage:[4.6,0,356]},
  {key:[4.6,.15,364],cage:[-4.6,0,386]},
  {key:[-4.6,.15,394],cage:[4.6,0,406]},
  {key:[4.6,.15,424],cage:[-4.6,0,446]},
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

const ROSISTER_FACTS=Object.freeze([
  {prompt:'C罗第一次获得欧洲冠军联赛冠军是哪一年？',choices:['2004','2006','2008','2010'],answer:'2008'},
  {prompt:'C罗第一次参加世界杯是哪一年？',choices:['2002','2006','2010','2014'],answer:'2006'},
  {prompt:'C罗第一次获得金球奖是哪一年？',choices:['2007','2008','2013','2014'],answer:'2008'},
  {prompt:'C罗在葡萄牙国家队最经典的球衣号码是多少？',choices:['3','7','9','17'],answer:'7'},
  {prompt:'葡萄牙第一次赢得欧洲杯冠军是哪一年？',choices:['2004','2012','2016','2020'],answer:'2016'},
]);
export function createRosisterQuestion(stage,rng=Math.random){
  const index=Math.max(0,Math.min(ROSISTER_FACTS.length-1,stage));
  if(index>=3){
    const math=createMathQuestion(index===3?10:11,rng);
    return Object.freeze({...math,kind:'math',limit:18});
  }
  const source=ROSISTER_FACTS[index];
  return Object.freeze({...source,kind:'choice',limit:14+index*2,choices:Object.freeze([...source.choices])});
}
export function isRosisterAnswerCorrect(questionValue,input){
  const value=String(input??'').trim();
  return questionValue.kind==='math'?isMathAnswerCorrect(questionValue,value):value===String(questionValue.answer);
}

export function requiredRescueForCheckpoint(nextStage){return nextStage>=1&&nextStage<=RESCUE_MODE_PLAYERS.length?nextStage-1:null}
export function rescueHunterHp(stage){return 170+Math.max(0,stage)*24}
export const MEDONG_PRAISE=['不错，脑子转得很快！','答得漂亮，继续保持！','梅东老师认可你了！','这一步很稳，下一间教室见！','完全正确，有点东西！'];
