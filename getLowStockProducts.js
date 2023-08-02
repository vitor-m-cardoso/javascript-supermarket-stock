const stockProducts = require('./data.json');

const getLowStockProducts = () => {
  const lowStockArr = [];

  for (let index = 0; index < stockProducts.length; index += 1) {
    const { quantityInStock, productName } = stockProducts[index];

    if (quantityInStock > 0 && quantityInStock <= 10) {
      lowStockArr.push(`${productName}: ${quantityInStock} unidades`);
    }
  }

  return lowStockArr;
};
