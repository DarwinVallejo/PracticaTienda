const mongoose = require('mongoose')
let Schema = mongoose.Schema
let productoSchema =new Schema({
        uuid: Number,
        nombre: String,
        precio: Number,
        precioUnitario: Number,
        created_at: { type: Date, require: true, default: Date.now }
})

module.exports = mongoose.model('productos',productoSchema)