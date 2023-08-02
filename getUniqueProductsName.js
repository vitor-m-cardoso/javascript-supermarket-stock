const stockProducts = require('./data.json');

const getUniqueProductsName = () => {
  const productsArr = [];
  for (let index = 0; index < stockProducts.length; index += 1) {
    const product = stockProducts[index];
    productsArr.push(product.productName);
  }
  return productsArr;
};
