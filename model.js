const mongoose = require('mongoose');
// Connect to MongoDB
const MONGO_URI = process.env.URI ;
mongoose.connect(MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

const tickerSchema = new mongoose.Schema({
platform:String,
  name: String,
  last: String,
  buy: String,
  sell: String,
  volume: String,
  base_unit: String,
});

module.exports=mongoose.model('ticker',tickerSchema)