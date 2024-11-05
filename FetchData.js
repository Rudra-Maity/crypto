const axios = require('axios');
const Ticker = require('./model'); // Ensure this is correctly set up

async function fetchAndStoreData() {
    try {
        const response = await axios.get('https://api.wazirx.com/api/v2/tickers');
        
        // Use Object.entries instead of Object.values to get key-value pairs
        const tickers = Object.entries(response.data).slice(0, 10);

        await Ticker.deleteMany({}); // Clear the database before inserting new data

        // Now we can map over tickers correctly
        const tickerData = tickers.map(([key, data]) => ({
            platform: key,
            name: `${key.slice(0, -3).toUpperCase()} to INR`, // Format name
            last: data.last,
            buy: data.buy,
            sell: data.sell,
            volume: data.volume,
            base_unit: data.base_unit,
        }));

        await Ticker.insertMany(tickerData)
        console.log('Top 10 tickers stored successfully.');
    } catch (error) {
        console.error('Error fetching or storing data:', error);
    }
}

fetchAndStoreData();
