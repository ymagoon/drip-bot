const mongoose = require('mongoose');
const Stats = mongoose.model('drip');

module.exports = async (select, options = { limit: 100 }) => {
  return await Drip.find({}, select, options).exec();
};
