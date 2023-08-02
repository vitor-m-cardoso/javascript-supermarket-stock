const stockProducts = require('./data.json');

const getProductsWithAllergyOrIntoleranceInfo = () => {
  const prodWithAllerOrIntolArr = [];

  for (let index = 0; index < stockProducts.length; index += 1) {
    const { description, price, allergyOrIntolerance } = stockProducts[index];

    if (allergyOrIntolerance) {
      prodWithAllerOrIntolArr.push({
        description,
        formattedPrice: `R$ ${price}`,
        allergyOrIntoleranceMessage: `Pode conter: ${allergyOrIntolerance.join(' ')}`,
      });
    } else {
      prodWithAllerOrIntolArr.push({
        description,
        formattedPrice: `R$ ${price}`,
      });
    }
  }

  return prodWithAllerOrIntolArr;
};
