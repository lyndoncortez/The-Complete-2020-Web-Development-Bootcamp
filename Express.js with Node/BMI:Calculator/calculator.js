const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/bmiCalculator.html')
})

app.post('/bmicalculator', function(req, res) {
    var height = Number(req.body.height)
    var weight = Number(req.body.weight)
    let n = weight / (height * height)
    res.send("Your BMI is " + n)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})