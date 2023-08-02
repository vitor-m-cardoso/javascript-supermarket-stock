const stockProducts = require('./data.json');

const formatVitamins = (vitamins) => {
  const vitaminsInfo = Object.entries(vitamins);
  const formattedVitaminsArr = [];

  for (let index = 0; index < vitaminsInfo.length; index += 1) {
    const vitamin = vitaminsInfo[index];

    formattedVitaminsArr.push(`${vitamin[0]} - ${vitamin[1]}`);
  }

  return formattedVitaminsArr;
};

const getProductsRichInVitamin = () => {
  const prodRichInVitArr = [];

  for (let index = 0; index < stockProducts.length; index += 1) {
    const { description, price, nutritionalInfo } = stockProducts[index];

    if (nutritionalInfo.vitamins) {
      prodRichInVitArr.push({
        description,
        formattedPrice: `R$ ${price}`,
        vitaminsInformation: formatVitamins(nutritionalInfo.vitamins),
      });
    }
  }

  return prodRichInVitArr;
};
