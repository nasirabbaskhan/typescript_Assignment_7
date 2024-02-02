//  Program#4: Write a program to caculate the discount for a products based on its price.
//  if the price is above $100 apply 10% discount otherwise apply 5 percent discount

function discountCalculate(price: number) {
  if (price > 100) {
    let discountPrice = (price * 10) / 100;
    let remainingPrice = price - discountPrice;
    console.log(
      `The original price of product is ${price}$, So we have applied 10 % discount that the amount is : ${discountPrice}`
    );
  } else {
    let discountPrice = (price * 5) / 100;
    let remainingPrice = price - discountPrice;
    console.log(
      `The original price of product is ${price} $, So we have applied 5 % discount that the amount is : ${discountPrice}`
    );
  }
}

discountCalculate(139);
