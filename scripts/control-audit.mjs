import assert from 'node:assert/strict';
import * as THREE from 'three';

const up=new THREE.Vector3(0,1,0),target=new THREE.Vector3(0,1.35,0);
for(const yaw of [0,Math.PI/2,Math.PI,-Math.PI/2]){
  const camera=new THREE.PerspectiveCamera(58,16/9,.1,130);
  const offset=new THREE.Vector3(0,Math.sin(.48)*8,-Math.cos(.48)*8).applyAxisAngle(up,yaw);
  camera.position.copy(target).add(offset);camera.lookAt(target);camera.updateMatrixWorld();
  const forward=new THREE.Vector3();camera.getWorldDirection(forward);forward.y=0;forward.normalize();
  const right=new THREE.Vector3().crossVectors(forward,up).normalize();
  const rightOnScreen=target.clone().add(right).project(camera).x;
  const leftOnScreen=target.clone().addScaledVector(right,-1).project(camera).x;
  assert.ok(rightOnScreen>0,`视角 ${yaw} 下右键没有向屏幕右侧移动`);
  assert.ok(leftOnScreen<0,`视角 ${yaw} 下左键没有向屏幕左侧移动`);
}

console.log('PASS  四个相机方向下，左右键均与屏幕方向一致');
