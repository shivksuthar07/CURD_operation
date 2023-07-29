const mongoose=require("mongoose")
const CurdSchema=new mongoose.Schema({
    name:String,
    email:String,
})
const Curd=new mongoose.model("Curd",CurdSchema)
module.exports=Curd;