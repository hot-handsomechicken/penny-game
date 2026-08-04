import assert from 'node:assert/strict';
import {MODE_CONFIG,RESCUE_PLACEMENTS,RESCUE_PLAYERS,RESCUE_REWARD_SKIN_IDS,SKIN_CATALOG,TOILET_LAYOUT,createMathQuestion,isMathAnswerCorrect,isToiletNoCombat,requiredRescueForCheckpoint,rescueHunterHp,unlockedSkinIds} from '../src/modes.js';

assert.deepEqual([MODE_CONFIG.escape.stageCount,MODE_CONFIG.math.stageCount,MODE_CONFIG.rescue.stageCount],[20,12,15]);
assert.equal(RESCUE_PLAYERS.length,10);
for(const player of RESCUE_PLAYERS){assert.ok(player.country&&player.team&&Number.isInteger(player.number));assert.ok(Number.isInteger(player.color)&&Number.isInteger(player.accent)&&Number.isInteger(player.shortsColor))}
const bro=RESCUE_PLAYERS.find(player=>player.name==='B罗');assert.equal(bro.country,'葡萄牙');assert.equal(bro.team,'portugal');assert.equal(bro.number,7);assert.notEqual(bro.color,bro.accent);
assert.deepEqual([...new Set(RESCUE_PLAYERS.map(player=>player.country))].sort(),['克罗地亚','巴西','挪威','法国','英格兰','葡萄牙','西班牙'].sort());
assert.equal(SKIN_CATALOG.length,13);
assert.deepEqual(unlockedSkinIds(),['prisoner','ponytail']);
assert.deepEqual(unlockedSkinIds({claimedMedong:true}),['prisoner','ponytail','medong']);
assert.equal(RESCUE_REWARD_SKIN_IDS.length,10);
assert.equal(unlockedSkinIds({claimedMedong:true,rescueCompleted:true}).length,13);
assert.deepEqual([...TOILET_LAYOUT],['corpse','tunnel','medong','corpse']);
assert.equal(TOILET_LAYOUT.filter(value=>value==='tunnel').length,1);
assert.equal(TOILET_LAYOUT.filter(value=>value==='corpse').length,2);
assert.equal(TOILET_LAYOUT.filter(value=>value==='medong').length,1);
assert.equal(isToiletNoCombat('escape',11),true);
assert.equal(isToiletNoCombat('escape',10),false);
assert.equal(isToiletNoCombat('rescue',11),false);
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
for(let checkpoint=1;checkpoint<=10;checkpoint++)assert.equal(requiredRescueForCheckpoint(checkpoint),checkpoint-1);
assert.equal(requiredRescueForCheckpoint(11),null);
for(let stage=1;stage<15;stage++)assert.ok(rescueHunterHp(stage)>rescueHunterHp(stage-1));

console.log('PASS  三种模式关卡数量正确');
console.log('PASS  十二级数学题可随机变化并准确判分');
console.log('PASS  十名球员按检查点顺序形成营救门槛');
console.log('PASS  十组钥匙和笼子均位于对应关卡安全范围');
console.log('PASS  拯救模式梅东血量逐关大幅增加');
console.log('PASS  默认、领取与通关奖励皮肤解锁规则正确');
console.log('PASS  十位球星均配有国家队、球衣主辅色、短裤和号码');
console.log('PASS  厕所正确出口永久固定为从左往右第二个隔间');
console.log('PASS  只有普通模式第 12 关禁用梅东战斗与血条');
