const mongoose= require("mongoose");

const Schema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    
    contact:{
        type:Number,
        required:true
    },
  
    email:{
        type:String,
        unique:true,
        required:true,
       
        dropDups: true
    },
    password:{
        type:String,
        required:true
    },
    specialization:{
        type:String,
        required:true
    },gender:{
        type:String,
        required:true
    },experience:{
        type:Number,
        required:true
    },
    age:{
        type:Number,
        required:true
    }
});
module.exports=mongoose.model('doctors',Schema)

