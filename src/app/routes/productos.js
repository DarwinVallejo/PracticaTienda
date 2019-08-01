const express = require('express')
const productosController=require('../controllers/productos')

var app = express.Router()

app.get('/',productosController.obtenerProductos)

app.post('/',productosController.guardarProducto)

app.patch('/',productosController.actualizarProducto)

app.delete('/',productosController.eliminarProducto)

module.exports=app