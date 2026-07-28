export const HERO_HEIGHT = 1.65;
export const HERO_RADIUS = 0.4;
export const COLLISION_EPSILON = 0.05;

export function overlapsHorizontal(position, bounds, pad = HERO_RADIUS) {
  return (
    position.x > bounds.min.x - pad &&
    position.x < bounds.max.x + pad &&
    position.z > bounds.min.z - pad &&
    position.z < bounds.max.z + pad
  );
}

export function overlapsVertical(
  position,
  bounds,
  height = HERO_HEIGHT,
  epsilon = COLLISION_EPSILON,
) {
  return (
    position.y < bounds.max.y - epsilon &&
    position.y + height > bounds.min.y + epsilon
  );
}

export function intersectsBody(
  position,
  bounds,
  pad = 0.5,
  height = HERO_HEIGHT,
) {
  return (
    overlapsHorizontal(position, bounds, pad) &&
    position.y + height > bounds.min.y &&
    position.y < bounds.max.y + 0.15
  );
}

export function resolveVerticalSweep(
  previousY,
  nextY,
  velocityY,
  bounds,
  height = HERO_HEIGHT,
  epsilon = COLLISION_EPSILON,
) {
  if (
    velocityY <= 0 &&
    previousY >= bounds.max.y - epsilon &&
    nextY <= bounds.max.y + epsilon
  ) {
    return { y: bounds.max.y, velocityY: 0, grounded: true };
  }

  if (
    velocityY > 0 &&
    previousY + height <= bounds.min.y + epsilon &&
    nextY + height >= bounds.min.y - epsilon
  ) {
    return { y: bounds.min.y - height, velocityY: 0, grounded: false };
  }

  return null;
}
