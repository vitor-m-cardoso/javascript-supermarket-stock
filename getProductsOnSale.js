const stockProducts = require('./data.json');

const getProductsOnSale = () => {
  const prodOnSaleArr = [];

  for (let index = 0; index < stockProducts.length; index += 1) {
    const { description, price, onSale } = stockProducts[index];

    if (onSale) {
      prodOnSaleArr.push({
        description,
        formattedPrice: `R$ ${price}`,
        onSale,
      });
    }
  }

  return prodOnSaleArr;
};
