const getStats = require('../../utils/data/getDrip');
const moneyFormat = require('../../utils/moneyFormat');

module.exports = async () => {
  const [stats] = await getStats(null, {
    limit: 1,
    sort: {
      date: -1,
    },
  });

  const { pricePCS } = stats;

  return moneyFormat(price, 6);
};
