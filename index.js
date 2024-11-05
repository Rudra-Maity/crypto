const express = require('express');
const mongoose = require('mongoose');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = 4000;
require('./FetchData');
const Ticker=require('./model');
const tickersController = require('./tickersController');

app.get('/',(req,res)=>res.sendFile(__dirname+'/index.html'))
app.get('/api/tickers',tickersController);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
