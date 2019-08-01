require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const app = express()

let producto = require('./routes/productos')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.use('/producto', producto);
app.listen('3500', () =>{
    console.log('Se inicio el server en el puerto 3500')
})
