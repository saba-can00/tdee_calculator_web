// use the The Harris–Benedict equations revised by Roza and Shizgal in 1984 in https://musclewiki.com/Harris%E2%80%93Benedict_equation#cite_note-3
function calcBmr(age, weight, height, sex) {
  switch (sex) {
    case "men": {
      return 88.362 + 13.397 * weight + 4.799 * height - 5.677 * age;
    }
    case "women": {
      return 447.593 + 9.247 * weight + 3.098 * height - 4.33 * age;
    }
    default:
      return 0;
  }
}

// this is use the following formula https://gottasport.com/weight-loss/71/harris-benedict-formula-for-women-and-men.html
// calculate Intake Calorie returns the recommended daily kilocalories to maintain current weight
function calcIntakeCalorie(age, weight, height, sex, activityLevel) {
  let bmr = calcBmr(age, weight, height, sex);
  return Math.floor(bmr * activityLevel);
}
