var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "PUC@2023",
  database: "cryptocoindb"
});

async function pegarValor() {
    try {
        const response = await fetch('http://127.0.0.1:3000/api');
        if (!response.ok) {
            throw new Error('Network response was not ok.');
        }
        const data = await response.json();
        let moeda = data.data.data;
        return moeda; // Returning the specific value instead of the entire data object
    } catch (error) {
        console.error('Error:', error);
        // Handle errors in fetching data
        return null; // Or handle error by returning a default value or indicating failure
    }
    }
    async function processValor() {
        try {
            const valor = await pegarValor();
            console.log('Received value:', valor);
            console.log(valor.length())
            con.connect(function(err) {
                if (err) throw err;
                console.log("Connected!");
                var sql = `INSERT INTO Coins (id, name,quotes) VALUES (2, 'Bitcoin',900)`;
                con.query(sql, function (err, result) {
                  if (err) throw err;
                  console.log("1 record inserted");
                });
              });
            return joao
        } catch (error) {
            console.error('Error in processing:', error);
        }
    }

processValor();