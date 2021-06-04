const LEVEL_LITTLE = {
  label: "ほぼ運動しない。座っていることが多い",
  value: 1.2,
};
const LEVEL_LIGHT = {
  label: "週に1、2回の運動をしている。",
  value: 1.375,
};
const LEVEL_MODERATE = {
  label: "週に3、4回の運動をしている",
  value: 1.55,
};

const LEVEL_HARD = {
  label: "ほぼ毎日、運動をしている",
  value: 1.725,
};

const LEVEL_ATHLETE = {
  label: "毎日、2回以上の運動をしている",
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

export { ACTIVITY_LEVEL, LEVEL_LITTLE };
