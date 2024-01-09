const express = require('express');
const axios = require('axios');
const app = express();

// Your API endpoint
app.get('/teste', async (req, res) => {
  try {
    // Make a request to the external API using Axios
    const response = await axios.get('https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
      headers: {
        'X-CMC_PRO_API_KEY': '0d8d4312-d22c-412a-8cae-8e0772b84117'
      }
    });
    
    // Send the data received from the external API to the front end
    res.json(response.data);
    console.log(response.data)
  } catch (error) {
    // Handle errors
    res.status(500).json({ error: error.message });
  }
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});