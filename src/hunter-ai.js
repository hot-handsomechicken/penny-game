export const HUNTER_ATTACK_RANGE = 1.65;
export const HUNTER_STRIKE_RANGE = 1.9;
export const HUNTER_WINDUP_SECONDS = 0.58;
export const HUNTER_RECOVERY_SECONDS = 0.72;

export function resetHunterBrain(brain, alertSeconds = 0.8) {
  brain.mode = 'alert';
  brain.modeTimer = alertSeconds;
  brain.stun = 0;
  brain.steerSign = brain.stage % 2 ? 1 : -1;
}

export function stunHunter(brain, seconds) {
  brain.stun = Math.max(brain.stun, seconds);
  brain.mode = 'stunned';
  brain.modeTimer = brain.stun;
}

export function advanceHunterBrain(brain, dt, distance) {
  if (brain.stun > 0) {
    brain.stun = Math.max(0, brain.stun - dt);
    brain.mode = brain.stun > 0 ? 'stunned' : 'chase';
    brain.modeTimer = brain.stun;
    return null;
  }

  if (brain.mode === 'alert') {
    brain.modeTimer = Math.max(0, brain.modeTimer - dt);
    if (brain.modeTimer === 0) brain.mode = 'chase';
    return null;
  }

  if (brain.mode === 'windup') {
    brain.modeTimer -= dt;
    if (brain.modeTimer <= 0) {
      brain.mode = 'recovery';
      brain.modeTimer = HUNTER_RECOVERY_SECONDS;
      return 'strike';
    }
    return null;
  }

  if (brain.mode === 'recovery') {
    brain.modeTimer = Math.max(0, brain.modeTimer - dt);
    if (brain.modeTimer === 0) brain.mode = 'chase';
    return null;
  }

  if (distance <= HUNTER_ATTACK_RANGE) {
    brain.mode = 'windup';
    brain.modeTimer = HUNTER_WINDUP_SECONDS;
    return 'windup';
  }

  brain.mode = 'chase';
  return null;
}

export function comboDamage(combo) {
  return [24, 28, 34][Math.max(0, Math.min(2, combo - 1))];
}
