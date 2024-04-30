const express = require('express')
const fs = require('fs')
const path = require('path')
const PORT = 3500;

const app = express();

app.use(express.static('public'));

app.get('/index', (req, res) => {
    fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
        if(err){
            res.status(500).send("500 - erro do servidor");
        }else{
            res.status(200).type('text/html').send(data);
        }
    })

})

app.get('/appPizzaria.js', (req, res) => {
    fs.readFile(path.join(__dirname, 'appPizzaria.js'), (err, data) => {
        if(err){
            res.status(500).send("500 - erro do servidor");
        }else{
            res.status(200).type('text/javascript').send(data);
        }
    })

})


app.listen(PORT, () => {
    console.log(`[OK] - Servidor iniciado em http://localhost:${PORT} ...`);
});