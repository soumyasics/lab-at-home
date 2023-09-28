const mongoose= require("mongoose");

const Schema=mongoose.Schema({
    date:{
        type:String,
        required:true
    },
    userid:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'users'
    },
    drid:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'doctors'
    },
    time:{
        type:String
    },
  
    comments:{
        type:String
    },isactive:{
        type:Boolean,
        default:false
    }
});
module.exports=mongoose.model('appointments',Schema)

