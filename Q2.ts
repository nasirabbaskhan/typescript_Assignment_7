// Program#2: Write a program to calculate percentage

function calculatePercentage(yourNumber: number, percentage: number) {
  let yorPercentage = (yourNumber * percentage) / 100;
  console.log(`the ${percentage} % of ${yourNumber} is ${yorPercentage} `);
}
calculatePercentage(500, 3);
