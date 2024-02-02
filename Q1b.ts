// Program#1: Write a program to convert the tempreture from  Fahrenheit to Celsius
function fahrenheitToCelsius(f: number) {
  let c = (f - 32) / 1.8;
  console.log(`The tempreture of ${f} Fahrenheit is ${c} Celsius`);
}

fahrenheitToCelsius(86);
