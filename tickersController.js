const Ticker=require('./model')
module.exports= async (req, res) => {
    try {
      const tickers = await Ticker.find({});
      res.json(tickers);
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving tickers', error });
    }
  }