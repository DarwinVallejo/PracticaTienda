const productosData=require('../data/productos')
const productoModel = require('../models/productos')

async function obtenerProductos(){
   
    productoModel.find().exec((err,resp)=>{
        if(err) throw err
        return resp
    })
}

/**
 *Función que guarda el producto
 *
 * @param {*} producto datos del producto
 * @returns retorna el registro del producto con su respectivo id
 */
async function guardarProducto(producto) {
    
    producto.id = await productosData.guardarProducto(producto)
    //Se crea en la base de mongo
    let objModel = new productoModel({
        uuid: producto.id,
        nombre: producto.nombre,
        precio: producto.precio,
        precioUnitario: producto.precioUnitario
    })
    objModel.save((err, resp) => {
        if (err) console.log(err)
    })
    return producto
}

async function actualizarProducto(producto) {

    producto.id = await productosData.actualizarProducto(producto)
    //Se actualiza en mongo
    productoModel.updateOne({ uuid: producto.id }, {
        nombre: producto.nombre,
        precio: producto.precio,
        precioUnitario: producto.precioUnitario
    }).exec((err, resp) => {
        if (err) console.log(err)
        console.log(resp)
    })

    return producto
}

async function eliminarProducto(id) {

    await productosData.eliminarProducto(id)
    //se elimina en mongo
    productoModel.deleteOne({uuid: producto.id}).exec((err, resp)=>{
        if(err) console.log(err)
        console.log(resp)
    })

}

module.exports = {
    obtenerProductos,
    guardarProducto,
    actualizarProducto,
    eliminarProducto
}
