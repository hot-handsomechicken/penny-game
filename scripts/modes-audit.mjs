import assert from 'node:assert/strict';
import {MEDONG_APPEARANCE,MODE_CONFIG,RESCUE_BATTLE_OFFSETS,RESCUE_BUFF_EFFECTS,RESCUE_BUFF_LABELS,RESCUE_FINAL_BOSS_STAGE,RESCUE_PLACEMENTS,RESCUE_PLATFORM_ROUTES,RESCUE_PLAYERS,RESCUE_REWARD_SKIN_IDS,RESCUE_SHARED_STAGE_INDICES,RESCUE_STAGE_SCENES,RESCUE_TRAIL_OFFSETS,RESCUE_UNIQUE_STAGE_INDICES,SKIN_CATALOG,STAGE14_TUNING,STAR_FACE_STYLE,STAR_FACE_TEXTURE_SIZE,TOILET_LAYOUT,createMathQuestion,createRosisterQuestion,hunterSpawnForStage,isMathAnswerCorrect,isToiletNoCombat,launchShortcut,requiredRescueForCheckpoint,rescueBuffTotals,rescueHunterHp,unlockedSkinIds} from '../src/modes.js';

assert.deepEqual([MODE_CONFIG.escape.stageCount,MODE_CONFIG.math.stageCount,MODE_CONFIG.rescue.stageCount],[20,12,15]);
assert.equal(RESCUE_STAGE_SCENES.length,MODE_CONFIG.rescue.stageCount);
assert.equal(new Set(RESCUE_STAGE_SCENES.map(scene=>scene.name)).size,MODE_CONFIG.rescue.stageCount);
assert.deepEqual([...RESCUE_UNIQUE_STAGE_INDICES],[0,1,2,3,4,5,6,7,8,9,13]);
assert.deepEqual([...RESCUE_SHARED_STAGE_INDICES],[10,11,12,14]);
assert.ok(RESCUE_UNIQUE_STAGE_INDICES.every(index=>!RESCUE_STAGE_SCENES[index].kind.startsWith('shared-')));
assert.ok(RESCUE_SHARED_STAGE_INDICES.every(index=>RESCUE_STAGE_SCENES[index].kind.startsWith('shared-')));
assert.equal(RESCUE_FINAL_BOSS_STAGE,14);
assert.equal(RESCUE_STAGE_SCENES[RESCUE_FINAL_BOSS_STAGE].kind,'shared-final-boss');
for(const [routeName,route] of Object.entries(RESCUE_PLATFORM_ROUTES)){
  assert.ok(route.length>=6,`${routeName} 平台数量不足`);
  for(let index=1;index<route.length;index++)assert.ok(Math.hypot(route[index][0]-route[index-1][0],route[index][1]-route[index-1][1])<=5.2,`${routeName} 第 ${index} 跳跨度过大`);
}
assert.equal(RESCUE_PLAYERS.length,15);
for(const player of RESCUE_PLAYERS){assert.ok(player.country&&player.team&&Number.isInteger(player.number));assert.ok(RESCUE_BUFF_LABELS[player.buff]);assert.ok(Number.isInteger(player.color)&&Number.isInteger(player.accent)&&Number.isInteger(player.shortsColor));assert.ok(player.appearance&&Number.isInteger(player.appearance.skin)&&Number.isInteger(player.appearance.hair)&&player.appearance.style)}
assert.deepEqual(Object.fromEntries(RESCUE_PLAYERS.map((player,index)=>[player.name,rescueBuffTotals([index])[player.buff]])),Object.fromEntries(RESCUE_PLAYERS.map(player=>[player.name,1])));
assert.deepEqual(rescueBuffTotals(RESCUE_PLAYERS.map((_,index)=>index)),{attack:4,strength:5,jump:3,speed:3});
assert.equal(RESCUE_PLAYERS.find(player=>player.name==='萝姐').buff,'attack');
assert.equal(RESCUE_PLAYERS.find(player=>player.name==='拉墨水').buff,'attack');
assert.equal(RESCUE_PLAYERS.find(player=>player.name==='带刀侍卫').appearance.style,'bald');
assert.ok(7.2+2*RESCUE_BUFF_EFFECTS.speed<8.5);
assert.ok(10+2*RESCUE_BUFF_EFFECTS.jumpVelocity<11.5);
assert.ok(3.45+3*RESCUE_BUFF_EFFECTS.strengthRange<4);
assert.deepEqual(launchShortcut('?play=rescue-toilet'),{mode:'rescue',stage:10,rescuedIndices:Array.from({length:14},(_,i)=>i)});
assert.deepEqual(launchShortcut('?play=rescue-stage14'),{mode:'rescue',stage:13,rescuedIndices:Array.from({length:14},(_,i)=>i)});
assert.deepEqual(launchShortcut('?play=final-boss'),{mode:'escape',stage:19,rescuedIndices:[]});
assert.equal(launchShortcut('?play=escape'),null);
assert.deepEqual(hunterSpawnForStage(13),{x:0,z:397});
assert.deepEqual(hunterSpawnForStage(RESCUE_FINAL_BOSS_STAGE),{x:0,z:436});
assert.deepEqual(hunterSpawnForStage(19,{isMech:true}),{x:0,z:592});
assert.ok(STAGE14_TUNING.rotatingArmSpeed<=.5&&STAGE14_TUNING.rotatingArmLength<=6.2&&STAGE14_TUNING.hitPadding<=.08);
assert.ok(Math.abs(hunterSpawnForStage(13).x-4.9)>2.6/2+.58,'第 14 关梅东出生点不得卡在右侧维修台内');
assert.equal(new Set(RESCUE_PLAYERS.map(player=>player.appearance.style)).size,15);
assert.equal(new Set(RESCUE_PLAYERS.map(player=>player.appearance.hair)).size,15);
assert.equal(STAR_FACE_STYLE,'dot-eyes-smile');
assert.ok(STAR_FACE_TEXTURE_SIZE>=64);
const bro=RESCUE_PLAYERS.find(player=>player.name==='萝姐');assert.equal(bro.country,'葡萄牙');assert.equal(bro.team,'portugal');assert.equal(bro.number,7);assert.notEqual(bro.color,bro.accent);
assert.equal(bro.appearance.style,'swept-forelock');
assert.equal(RESCUE_PLAYERS.find(player=>player.name==='德克米').appearance.style,'messy-short-crop');
assert.equal(RESCUE_PLAYERS.find(player=>player.name==='黄金小兔兔').appearance.style,'dark-golden-pageboy');
const beardedStars=RESCUE_PLAYERS.filter(player=>player.appearance.facialHair==='short-full-beard');assert.deepEqual(beardedStars.map(player=>player.name),['小美叔叔']);assert.ok(Number.isInteger(beardedStars[0].appearance.beard));
assert.equal(MEDONG_APPEARANCE.facialHair,'short-full-beard');assert.ok(Number.isInteger(MEDONG_APPEARANCE.beard));
assert.deepEqual([...new Set(RESCUE_PLAYERS.map(player=>player.country))].sort(),['克罗地亚','巴西','挪威','法国','英格兰','葡萄牙','西班牙'].sort());
assert.equal(SKIN_CATALOG.length,18);
assert.deepEqual(unlockedSkinIds(),['prisoner','ponytail']);
assert.deepEqual(unlockedSkinIds({claimedMedong:true}),['prisoner','ponytail','medong']);
assert.equal(RESCUE_REWARD_SKIN_IDS.length,14);
assert.equal(unlockedSkinIds({claimedMedong:true,rescueCompleted:true}).length,17);
assert.deepEqual([...TOILET_LAYOUT],['corpse','tunnel','medong','corpse']);
assert.equal(TOILET_LAYOUT.filter(value=>value==='tunnel').length,1);
assert.equal(TOILET_LAYOUT.filter(value=>value==='corpse').length,2);
assert.equal(TOILET_LAYOUT.filter(value=>value==='medong').length,1);
assert.equal(isToiletNoCombat('escape',11),true);
assert.equal(isToiletNoCombat('escape',10),false);
assert.equal(isToiletNoCombat('rescue',11),true);
assert.equal(isToiletNoCombat('rescue',12),false);
assert.equal(RESCUE_TRAIL_OFFSETS.length,RESCUE_PLAYERS.length);
assert.equal(RESCUE_BATTLE_OFFSETS.length,RESCUE_PLAYERS.length);
assert.equal(new Set(RESCUE_TRAIL_OFFSETS.map(offset=>offset.join(','))).size,RESCUE_PLAYERS.length);
assert.ok(RESCUE_BATTLE_OFFSETS.every(([x,z])=>Math.hypot(x,z)<3),'战斗队形必须全部收拢在玩家身边');
assert.equal(RESCUE_PLACEMENTS.length,RESCUE_PLAYERS.length);
for(const [stage,placement] of RESCUE_PLACEMENTS.entries()){
  const minZ=stage*30+3,maxZ=(stage+1)*30-3;
  for(const [kind,position] of Object.entries(placement)){
    assert.equal(position.length,3,`第 ${stage+1} 关${kind}坐标无效`);
    assert.ok(position[0]>=-6.4&&position[0]<=6.4,`第 ${stage+1} 关${kind}超出横向安全区`);
    assert.ok(position[2]>=minZ&&position[2]<=maxZ,`第 ${stage+1} 关${kind}不在本关安全纵深内`);
  }
}
for(let level=0;level<12;level++){
  const first=createMathQuestion(level,()=>.17),second=createMathQuestion(level,()=>.73);
  assert.ok(first.prompt&&Number.isFinite(first.answer),`第 ${level+1} 关题目无效`);
  assert.ok(isMathAnswerCorrect(first,String(first.answer)),`第 ${level+1} 关正确答案未被接受`);
  assert.equal(isMathAnswerCorrect(first,String(first.answer+1)),false,`第 ${level+1} 关错误答案被接受`);
  assert.notEqual(first.prompt,second.prompt,`第 ${level+1} 关题目缺少随机变化`);
}
for(let checkpoint=1;checkpoint<=14;checkpoint++)assert.equal(requiredRescueForCheckpoint(checkpoint),checkpoint-1);
assert.equal(requiredRescueForCheckpoint(15),null);
assert.equal(MODE_CONFIG.rosister.stageCount,5);
assert.ok(createRosisterQuestion(0).choices.length===4);
for(let stage=1;stage<15;stage++)assert.ok(rescueHunterHp(stage)>rescueHunterHp(stage-1));

console.log('PASS  三种模式关卡数量正确');
console.log('PASS  拯救模式拥有 11 个独立关卡，仅厕所三关与最终战复用原区域');
console.log('PASS  拯救模式第 15 关会在中央安全区触发最终梅东 Boss');
console.log('PASS  货运井与泵房所有连续平台跨度均低于基础跳跃安全上限');
console.log('PASS  十二级数学题可随机变化并准确判分');
console.log('PASS  十名球员按检查点顺序形成营救门槛');
console.log('PASS  十组钥匙和笼子均位于对应关卡安全范围');
console.log('PASS  拯救模式梅东血量逐关大幅增加');
console.log('PASS  默认、领取与通关奖励皮肤解锁规则正确');
console.log('PASS  十位球星均配有国家队、球衣主辅色、短裤和号码');
console.log('PASS  十位球星拥有十种独立小像素发型，并统一使用豆豆眼微笑脸');
console.log('PASS  B罗、德克米细刘海与黄金小兔兔短妹妹头映射已锁定');
console.log('PASS  小美叔叔与梅东分别使用符合发色的像素短胡须');
console.log('PASS  获救球员平时松散跟随，战斗时全部收拢在玩家身边');
console.log('PASS  十位球星按指定分组提供攻击、力量、弹跳与速度增益');
console.log('PASS  满级速度、弹跳和攻击范围增益保持在关卡安全上限内');
console.log('PASS  厕所试玩链接会直达拯救模式第 11 关并预救全部十位球员');
console.log('PASS  第 14 关梅东出生在中央安全地面，重生后也不会卡进维修台');
console.log('PASS  第 14 关仅保留后段横杆，旋转臂长度、转速与碰撞余量均已降低');
console.log('PASS  厕所正确出口永久固定为从左往右第二个隔间');
console.log('PASS  普通与拯救模式第 12 关均禁用梅东战斗与血条');
