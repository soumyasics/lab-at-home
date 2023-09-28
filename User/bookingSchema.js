const mongoose= require("mongoose");

const Schema=mongoose.Schema({
    date:{
        type:String,
        required:true
    },
    testid:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'tests'
    },
    labId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'labs'
    },
    time:{
        type:String
    },
  
    userid:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"users"
       
    },
    staffid:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'staffs'
    },
    comments:{
        type:String
    },isactive:{
        type:Boolean,
        default:true
    },result:{
        type:Boolean,
        default:false
    }
});
module.exports=mongoose.model('bookings',Schema)
