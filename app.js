//1. Print odds

function printOdds(count) {
  if (count < 0) {
    count = count * -1; //makes negative into positive
  }
  for (let i = 0; i < count; i++) {
    if (i % 2 != 0) {
      console.log(i);
    }
  }
}
printOdds(10);

function printOddsNegative(count) {
  if (count < 0) {
    for (let i = 0; i > count; i--) {
      if (i % 2 != 0) {
        console.log(i);
      }
    }
  }
}
printOddsNegative(-10);

//2. Check if the person can drive

function checkAge(age, userName) {
  let aboveSixteen = "You can drive";
  let belowSixteem = `Sorry ${userName}, you need to wait until you are 16`;
  if (age >= 16) {
    console.log(aboveSixteen);
  } else if (age < 16) {
    console.log(belowSixteem);
  } else {
    console.log("Invalid entry. Enter in correct value");
  }
}
checkAge(15, "Jackie Chan");
