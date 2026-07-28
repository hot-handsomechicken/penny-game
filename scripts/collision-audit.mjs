import assert from 'node:assert/strict';
import {
  HERO_HEIGHT,
  intersectsBody,
  overlapsHorizontal,
  overlapsVertical,
  resolveVerticalSweep,
} from '../src/collision.js';

const platform = {
  min: { x: -1.5, y: 0.5, z: -1.5 },
  max: { x: 1.5, y: 1, z: 1.5 },
};

assert.equal(overlapsHorizontal({ x: 0, z: 0 }, platform), true);
assert.equal(overlapsHorizontal({ x: 3, z: 0 }, platform), false);
assert.equal(
  overlapsVertical({ y: 1.02 }, platform, HERO_HEIGHT),
  false,
  'standing on a platform must not count as a side collision',
);
assert.equal(
  overlapsVertical({ y: 0.7 }, platform, HERO_HEIGHT),
  true,
  'a body inside a wall must count as a side collision',
);

assert.deepEqual(
  resolveVerticalSweep(1.4, 0.72, -19, platform),
  { y: 1, velocityY: 0, grounded: true },
  'fast downward movement must land instead of tunnelling through a platform',
);
assert.deepEqual(
  resolveVerticalSweep(-1.3, -0.45, 16, platform),
  { y: 0.5 - HERO_HEIGHT, velocityY: 0, grounded: false },
  'fast upward movement must stop at a ceiling',
);
assert.equal(
  resolveVerticalSweep(0.7, 0.6, -2, platform),
  null,
  'an already overlapping body must not be snapped onto a platform',
);
assert.equal(
  intersectsBody({ x: 0, y: 0.4, z: 0 }, platform, 0.28),
  true,
);

console.log('PASS  高速下落不会穿透平台');
console.log('PASS  头顶碰撞会停止上升');
console.log('PASS  地面接触不会误判为侧面碰撞');
