const stockProducts = require('./data.json');

const searchProductByName = (prodName) => {
  let result = null;

  for (let index = 0; index < stockProducts.length; index += 1) {
    const { productName, description, price } = stockProducts[index];

    if (productName === prodName) {
      result = {
        description,
        formattedPrice: `R$ ${price}`,
      };
    }
  }

  return result;
};

module.exports = { searchProductByName };
