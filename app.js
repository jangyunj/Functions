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
