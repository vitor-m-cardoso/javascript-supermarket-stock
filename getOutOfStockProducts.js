const stockProducts = require('./data.json');

const getOutOfStockProducts = () => {
  const outOfStockArr = [];

  for (let index = 0; index < stockProducts.length; index += 1) {
    const product = stockProducts[index];

    if (product.quantityInStock < 1) {
      outOfStockArr.push(product.productName);
    }
  }

  return outOfStockArr;
};
