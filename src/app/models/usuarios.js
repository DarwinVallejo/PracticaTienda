const moongose=require('../connections/connection-mongo')


async function model(){
    let connection=await mongoose.connectionMongo();
    const usuarios=connection.Schema({
        uuid:Number,
        user:String,
        pass:String,
        status:Number,
        created_at:{type:Date,require:true,default:Date.now}
    })

    return connection.model('usuarios',usuarios)
}

module.exports={
    model
}