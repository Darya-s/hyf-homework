let boughtCandyPrices = [];
let price = 0;
let i = 0;
let totPrice = 0;
let amountToSpend = Math.floor(Math.random() * 100);
addCandy = (candyType, weight) => {
  switch (candyType) {
    case "Sweet":
      price = weight * 0.5;
      break;
    case "Chocolate":
      price = weight * 0.7;
      break;
    case "Toffee":
      price = weight * 1.1;
      break;
    case "Chewing-gum":
      price = weight * 0.03;
      break;

    default:
      "You are not entering a candy!";
  }

  boughtCandyPrices.push(candyType, price);
};

canBuyMoreCandy = () => {
  while (i < boughtCandyPrices.length) {
    totPrice += boughtCandyPrices[1];
    i++;
  }
  console.log(totPrice + " VS " + amountToSpend);

  if (totPrice <= amountToSpend) {
    console.log("You can buy more, so please do!");
  } else {
    console.log("Enough candy for you!");
  }
};

addCandy("Sweet", 2);
addCandy("Chocolate", 3);
addCandy("Toffee", 4);
addCandy("Chewing-gum", 10);

console.log(boughtCandyPrices);

canBuyMoreCandy();
