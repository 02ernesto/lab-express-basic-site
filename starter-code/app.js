const express = require('express')
const app = express()

app.use(express.static('public'))

app.get('/', (req, res) => {
console.log(req)
res.sendFile(`${__dirname}/views/home.html`)
})

app.get('/about', (req, res) => {
  res.sendFile(`${__dirname}/views/about.html`)
})

app.get('/slides', (req, res) => {
  res.sendFile(`${__dirname}/views/slides.html`)
})

app.listen(3000,() => {
  console.log('Estoy en elPuerto 3000 :) ')
})