const mongoose= require("mongoose");

const Schema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    experience:{
        type:Number,
        required:true
    },
    qualification:{
        type:String,
        required:true
    },
    contact:{
        type:Number,
        required:true
    },
    address:{
        type:String,
        required:true
    },
  
    email:{
        type:String,
        unique:true,
        required:true,
       
        dropDups: true
    },
    aadhar:{
        type:Number,
        required:true
    },
    isactive:{
        type:Boolean,
        default:false
    },
    password:{
        type:String
    },
    labid:{
        type:mongoose.Schema.Types.ObjectId,
       ref:"labs",
        required:true
    }
});
module.exports=mongoose.model('staffs',Schema)

