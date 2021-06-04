const LEVEL_LITTLE = {
  label: "ほぼ運動しない。デスクワーク中心。",
  value: 1.2,
};
const LEVEL_LIGHT = {
  label: "週に1,2回は運動をする。",
  value: 1.375,
};
const LEVEL_MODERATE = {
  label: "週に3,4回は運動をする",
  value: 1.55,
};

const LEVEL_HARD = {
  label: "毎日、30分-1時間の運動をする",
  value: 1.725,
};

const LEVEL_ATHLETE = {
  label: "毎日、30-1時間の運動を2回以上している",
  value: 1.9,
};

Object.freeze(LEVEL_LITTLE);
Object.freeze(LEVEL_LIGHT);
Object.freeze(LEVEL_MODERATE);
Object.freeze(LEVEL_HARD);
Object.freeze(LEVEL_ATHLETE);

const ACTIVITY_LEVEL = [
  LEVEL_LITTLE,
  LEVEL_LIGHT,
  LEVEL_MODERATE,
  LEVEL_HARD,
  LEVEL_ATHLETE,
];
Object.freeze(ACTIVITY_LEVEL);

export { ACTIVITY_LEVEL };
