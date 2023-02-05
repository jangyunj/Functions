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

//1.5 Print evens

function printEvens(count) {
  for (let i = 0; i < count; i++) {
    if (i % 2 == 0) {
      console.log(i);
    }
  }
}
printEvens(20);

function printEvensNegative(count) {
  for (let i = 0; i > count; i--) {
    if (i % 2 == 0) {
      console.log(i);
    }
  }
}
printEvensNegative(-20);

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

//3. Which quadrant is it?

function quad(x, y) {
  if (x > 0 && y > 0) {
    console.log(`${(x, y)} is in Quadrant 1`);
  } else if (x > 0 && y < 0) {
    console.log(`${(x, y)} is in Quadrant 4`);
  } else if (x < 0 && y > 0) {
    console.log(`${(x, y)} is in Quadrant 2`);
  } else if (x < 0 && y < 0) {
    console.log(`${(x, y)} is in Quadrant 3`);
  } else if (x != 0 && y == 0) {
    console.log(`${(x, y)} is on the X axis`);
  } else if (x == 0 && y != 0) {
    console.log(`${(x, y)} is on the Y axis`);
  } else {
    console.log(`${(x, y)} is on the Origin`);
  }
}
quad(2, -3);

//4. What type of triangle is it?

function typeOfTriangle(x, y, z) {
  let isValid = false;
  if (x + y > z && x + z > y && y + z > x) {
    isValid = true;
  } else {
    console.log("Invalid triangle");
  }
  if (isValid) {
    if (x == y && y == z) {
      console.log("Equilateral triangle");
    } else if (x == y || y == z) {
      console.log("Isosceles triangle");
    } else if (x != y && y != z) {
      console.log("Scalene triangle");
    }
  }
}
typeOfTriangle(3, 3, 3);
typeOfTriangle(2, 2, 3);
typeOfTriangle(4, 5, 7);
typeOfTriangle(1, 1, 2);

//5. Data Plan Status

function dataUsage(planLimit, day, usage) {
  let remainingDays = 30 - day;
  let averageUsagePerMonth = planLimit / 30;
  let averageUsageInCurrentDay = usage / day;
  let potentialUsageOverload = (usage / day) * 30 - planLimit;
  let usageLeftToStayInPlan = (planLimit - usage) / remainingDays;

  console.log(
    `Average daily use is: ${averageUsagePerMonth.toFixed(2)} GB/day`
  ); //fixes to two decimal places

  if (potentialUsageOverload < 0) {
    console.log("You didn't exceed the plan.");
  } else if (potentialUsageOverload > 0) {
    console.log(`You are EXCEEDING your average daily use (${averageUsageInCurrentDay} GB/day),
            continuing this high usage, you'll exceed your data plan by ${potentialUsageOverload}GB. \n
            To stay below your data plan, use no more than ${usageLeftToStayInPlan} GB/day.`);
  } else {
    console.log(
      `Currently, you have: ${day} used, ${remainingDays} remaining.`
    );
  }
}

dataUsage(100, 15, 56);
dataUsage(50, 12, 25);
dataUsage(50, 15, 25);
dataUsage(50, 10, 25);
