var mongoose=require('mongoose')

var Schemadata=new mongoose.Schema({
    name:String,
    price:String,
    category:String,
    userId:String,
    company:String
})

module.exports= mongoose.model('products',Schemadata)