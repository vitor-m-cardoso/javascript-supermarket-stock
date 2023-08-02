const stockProducts = require('./data.json');

const getProductsAmount = () => {
  let productsAmount = 0;

  for (let index = 0; index < stockProducts.length; index += 1) {
    const { quantityInStock } = stockProducts[index];

    productsAmount += quantityInStock;
  }

  return productsAmount;
};
