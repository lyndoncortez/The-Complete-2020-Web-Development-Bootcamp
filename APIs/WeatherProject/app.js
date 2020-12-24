const express = require("express");
const https = require("https");

const app = express();

app.get('/', function(req, res) {

    const url = 'https://api.openweathermap.org/data/2.5/find?q=London&units=metric&appid=523dd7c965deb23c46e31f47afadf37d';
    https.get(url, function(response) {
        console.log(response);
    })

    res.send("Server is app and running")
})

app.listen(3000, function() {
    console.log("Server is running on port 3000")
})