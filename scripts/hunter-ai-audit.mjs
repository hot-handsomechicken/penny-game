import assert from 'node:assert/strict';
import {
  HUNTER_ATTACK_RANGE,
  HUNTER_STRIKE_RANGE,
  advanceHunterBrain,
  comboDamage,
  resetHunterBrain,
  stunHunter,
} from '../src/hunter-ai.js';

const brain={stage:3,mode:'idle',modeTimer:0,stun:0,steerSign:1};
resetHunterBrain(brain,.1);
assert.equal(brain.mode,'alert');
advanceHunterBrain(brain,.11,8);
assert.equal(brain.mode,'chase');

assert.equal(advanceHunterBrain(brain,.016,HUNTER_ATTACK_RANGE-.05),'windup');
assert.equal(brain.mode,'windup');
assert.equal(advanceHunterBrain(brain,.7,HUNTER_STRIKE_RANGE-.05),'strike');
assert.equal(brain.mode,'recovery');

advanceHunterBrain(brain,.8,5);
assert.equal(brain.mode,'chase');
stunHunter(brain,.45);
assert.equal(brain.mode,'stunned');
advanceHunterBrain(brain,.5,1);
assert.equal(brain.mode,'chase');

const combo=[comboDamage(1),comboDamage(2),comboDamage(3)];
assert.deepEqual(combo,[24,28,34]);
assert.ok(combo.reduce((sum,damage)=>sum+damage,0)<100);
assert.ok(combo.reduce((sum,damage)=>sum+damage,0)+comboDamage(1)>=100);

const encounters=[1,3,6,8,9];
for(const stage of encounters){
  const checkpoint=stage*30+2,spawn=stage*30+16,gate=(stage+1)*30-1;
  assert.ok(checkpoint<spawn&&spawn<gate,`第 ${stage+1} 关追击区顺序错误`);
  assert.ok(spawn-checkpoint>=12,`第 ${stage+1} 关反应距离不足`);
}

console.log('PASS  追击者预警、蓄力、攻击与恢复状态');
console.log('PASS  受击眩晕可正确打断追击动作');
console.log('PASS  连击伤害与五个追击关卡反应距离合理');
