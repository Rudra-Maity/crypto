const mongoose = require('mongoose');
// Connect to MongoDB
const MONGO_URI = 'mongodb://localhost:27017/cryptoDB';
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
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