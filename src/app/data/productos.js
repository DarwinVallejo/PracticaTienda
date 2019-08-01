const data = require('../datacore/execution-sql')

async function guardarProducto(producto) {

    producto.id = await data.executeInsert('INSERT INTO PRODUCTOS(nombre,precio,precioUnitario) VALUES(?,?,?)', [producto.nombre, producto.precio, producto.precioUnitario])
    
    return producto
}

async function actualizarProducto(producto) {
    producto.id = await data.executeInsert(`UPDATE PRODUCTOS SET nombre=?,precio=?,precioUnitario=? WHERE id=${producto.id}`, [producto.nombre, producto.precio, producto.precioUnitario])
    //Se actualiza en mongo

    return producto
}

async function eliminarProducto(id) {
    data.eliminarProducto(id)
    

}

module.exports = {
    guardarProducto,
    actualizarProducto,
    eliminarProducto
}

