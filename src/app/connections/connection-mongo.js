const mongo=require('mongoose')

const url='mongodb://localhost/tienda'

async function connectionMongo(){
    try {
        return await mongo.createConnection(url,{useNewUrlParser:true})        
    } catch (error) {
        console.log(error)
    }
}


module.exports={
    connectionMongo
}
