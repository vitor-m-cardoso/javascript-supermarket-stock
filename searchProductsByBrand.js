const stockProducts = require('./data.json');

const searchProductsByBrand = (productBrand) => {
  const result = [];

  for (let index = 0; index < stockProducts.length; index += 1) {
    const { brand, description, price } = stockProducts[index];

    if (brand === productBrand) {
      result.push({ description, formattedPrice: `R$ ${price}` });
    }
  }

  return result;
};

module.exports = { searchProductsByBrand };
