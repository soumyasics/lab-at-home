const mongoose= require("mongoose");

const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    labId:{
        type:mongoose.Schema.Types.ObjectId,
       ref:"labs",
        required:true
    },
    condition:{
        type:String
    },
  
    duration:{
        type:String,
        required:true,
       
    },
    comments:{
        type:String
    },
   details:
    [{
        description:String,
        minrange:Number,
        maxrange:Number
    }]
   
    
});
module.exports=mongoose.model('tests',userSchema)

