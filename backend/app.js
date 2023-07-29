const express=require("express")
const port=process.env.PORT || 8000;
const app=express()
const cors = require("cors");
require("./db/conn")
const Curd=require("./models/createSchema")
app.use(express.json())
app.use(cors())
app.post("/Create",async(req,res)=>{
    try{
        const user=new Curd({
            name:req.body.name,
            email:req.body.email,
        })
        const userData=await user.save()
       
        res.send(userData)

    }catch(e){
        res.send(e)
    }
})
 app.get('/',async(req,res)=>{
      try{
        const insertData=await Curd.find()
        
        res.send(insertData)

      }catch(err){
        res.send(err)
      }
    
 })
app.delete('/:id',async(req,res)=>{
    try{
        const DeleteData=await Curd.findByIdAndDelete(req.params.id)
        if(!DeleteData){
            return res.status(404).send()
        }else{
            res.send(DeleteData)
        }

    }catch(e){
        res.send(e)
    }
})

app.get('/edit/:id',async(req,res)=>{
    try{
       const inletData=await Curd.find()
       res.send('inletData')

    }catch(e){
        res.send(e)
    }
})

app.put('/edit/:id',async(req,res)=>{
    try{
        const _id=req.params.id;
        
        const updateData=await Curd.findByIdAndUpdate(_id,req.body)
        res.send(updateData)

    }catch(e){
        res.send(e)
    }
})

app.listen(port,()=>{
    console.log(`connected to port no ${port}`)
})