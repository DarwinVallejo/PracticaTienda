const mongoose=require('../connections/connection-mongo')
const productosSrv = require('../services/productos')

async function obtenerProductos(req, resp) {
    let data = []
    let connection=await mongoose.connectionMongo()

    try{
        data = await productosSrv.obtenerProductos()
        connection.close()
        return resp.status(200).send(data)
    }catch(err){
        connection.close()
        console.log(err)
        return resp.status(500).send(err)
    }
}

async function guardarProducto(req, resp) {
    try {
        let connection=await mongoose.connectionMongo()

        let producto = req.body.producto
        producto.id = await productosSrv.guardarProducto(producto)
        connection.close()

        return resp.status(201).send(producto)

    } catch (error) {
        connection.close()

        return resp.status(500).send('Ocurrio un error')
    }
}

async function actualizarProducto(req,resp) {
    try {
        let connection=await mongoose.connectionMongo()

        let producto = req.body.producto
        producto.id = await productosSrv.actualizarProducto(producto)
        connection.close()

        return resp.status(201).send(producto)

    } catch (error) {
        connection.close()

        return resp.status(500).send('Ocurrio un error')
    }
}

async function eliminarProducto(req,resp) {

    try {
        let connection=await mongoose.connectionMongo()

        await productosSrv.eliminarProducto(req.body.id)
        connection.close()

        return resp.status(200).send(req.body.id)
    } catch (error) {
        connection.close()

        return resp.status(500).send('Ocurrio un error')
    }
    

}

module.exports = {
    obtenerProductos,
    guardarProducto,
    actualizarProducto,
    eliminarProducto
}