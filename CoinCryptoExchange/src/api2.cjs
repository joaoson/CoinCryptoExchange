
const express = require('express');
const app = express();
const request = require('request');
const cors = require('cors');
var mysql = require('mysql');
//import mysql from "mysql2"


var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "PUC@2023",
  database: "cryptocoindb"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
})

app.use(cors())

app.get('/api', (req, res) => {

  const url = `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest`;

  const url2 = `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest`;

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
    // console.log(data.data.length)
    //   for(let i = 0;i<data.data.length;i++){
    //     var sql = `INSERT INTO Coins (id, name,quotes) VALUES (${data.data[i].id}, "${data.data[i].name}",0)`;
    //     con.query(sql, function (err, result) {
    //       if (err) throw err;
    //       console.log("1 record inserted");
    //     });
    //   }
    res.send({
      data: data
    });

  });

});


app.listen(3000, () => {
  console.log('Server listening on port 3000');
});