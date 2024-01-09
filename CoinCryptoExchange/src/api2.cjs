
const express = require('express');
const app = express();
const request = require('request');
const cors = require('cors');
app.use(cors())

console.log("oi")

app.get('/api', (req, res) => {

  const url = `https://pro-api.coinmarketcap.com/v1/cryptocurrency/map`;

  const url2 = `https://pro-api.coinmarketcap.com/v1/cryptocurrency/map`;

  request.get({
    url: url2,
    json: true,
    headers: {
      'X-CMC_PRO_API_KEY': '0d8d4312-d22c-412a-8cae-8e0772b84117'
    }
  }, (error, response, data) => {

    if (error) {
      return res.send({
        error: error
      });
    }
    res.send({
      data: data
    });

  });

});


app.listen(3000, () => {
  console.log('Server listening on port 3000');
});