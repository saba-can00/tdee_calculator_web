const MEN = {
  id: "men",
  value: "men",
  label: "男性",
};

const WOMEN = {
  id: "women",
  value: "women",
  label: "女性",
};

Object.freeze(MEN);
Object.freeze(WOMEN);

const SEX = [MEN, WOMEN];
Object.freeze(SEX);

export { SEX, MEN, WOMEN };
