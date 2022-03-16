const mongoose = require('mongoose');
const { Schema } = mongoose;

const dripSchema = new Schema({
  marketCap: Number, //In USD
  supply: Number,
  vault: Number,
  priceDEX: Number, //In USD
  pricePCS: Number, //In USD
  holders: Number,
  date: Date,
});

mongoose.model('drip', dripSchema);
