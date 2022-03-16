const getStats = require('../../utils/data/getDrip');

module.exports = async () => {
  const [stats] = await getStats(null, {
    limit: 1,
    sort: {
      date: -1,
    },
  });

  const { holders } = stats;

  return holders.toLocaleString('en-US');
};
