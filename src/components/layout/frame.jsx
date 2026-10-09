export const FRAME_WIDTH = 1440;
export const FRAME_HEIGHT = 1080;

export const cq = (px) =>
  px == null ? undefined : `calc(${px} / ${FRAME_WIDTH} * 100cqw)`;

export const cqMin = (px, min) =>
  px == null ? undefined : `clamp(${min}px, ${cq(px)}, ${px}px)`;
