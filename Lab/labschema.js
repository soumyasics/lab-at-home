const mongoose= require("mongoose");

const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    pincode:{
        type:Number,
        required:true
    },
    city:{
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
    district:{
        type:String,
        required:true
    },
    regNo:{
        type:String,
        unique:true,
        required:true,
       
        dropDups: true
    },
    isactive:{
        type:Boolean,
        default:false
    }
});
module.exports=mongoose.model('labs',userSchema)

