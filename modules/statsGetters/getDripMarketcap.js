const getStats = require('../../utils/data/getDrip');
const moneyFormat = require('../../utils/moneyFormat');

module.exports = async () => {
  const [stats] = await getStats(null, {
    limit: 1,
    sort: {
      date: -1,
    },
  });

  const { marketCap } = stats; // might need to change to drip

  return moneyFormat(marketCap, 10);
};
