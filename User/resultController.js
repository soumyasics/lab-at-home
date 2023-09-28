const staffSchema = require('../Lab/staffSchema')
const booking=require('./bookingSchema')
const results=require('./resultSchema')
let mongoose=require('mongoose')
let bookingSchema=require('./appointmentSchema')
const testSchema = require('../Test/testSchema')
const addResult=async (req,res)=>{
  
  let date=new Date()
  let needcomment=false
  let comment="Everything is Normal, Have a Nice Day"
let newres=[{
  description:'',
  value:0,
  deviation:0,
  problem:false
}]
let deviation=0,problem=false
let result=req.body.resultdata
let details=[]
await testSchema.findById({_id:req.body.testid}).exec().then(data1=>{
  details=data1.details
})

for(let i=0;i<details.length;i++){
  console.log("details[i].description",details[i].description,result[i].value);
newres[i].description=details[i].description
console.log("val",result[i].value);
  newres[i].value=result[i].value
  console.log(newres[i].value,details[i].minrange);
  if(newres[i].value<details[i].minrange){
    console.log("in min");
    newres[i].deviation=newres[i].value-details[i].minrange
    console.log("minra",newres[i].value-details[i].minrange);
  }
   if(newres[i].value>details[i].maxrange){
    console.log("in max");
  newres[i].deviation=newres[i].value-details[i].maxrange
  console.log("mxnra",newres[i].value-details[i].maxrange);

   }

  if( newres[i].deviation>0){
  newres[i].problem=true
  needcomment=true
  }
  else  
  newres[i].problem=false
  newres.push({
    description:'',
    value:0,
    deviation:0,
    problem:false
  })

}


console.log("new",newres);
for(let i=0;i<details.length;i++){

newres[newres.length-1].description.length?null:newres.pop()
}
if(needcomment==true){
  comment="Please consult a doctor as you have some variations with your reports."
}
console.log("new",newres);
      const newUser=new results({
        userid:req.body.userid,
        bookingid:req.body.bookingid,
        staffid:req.body.staffid,
        comments:comment,
        testid:req.body.testid,
        date:date,
        resultdata:newres
        
    })
   await newUser.save().then(data=>{
      bookingSchema.findByIdAndUpdate({_id:req.body.bookingid},{result:true}).then(datas=>{
        res.json({
          status:200,
          msg:"Inserted successfully",
          data:data
      })
      })
    .catch(err=>{
      console.log(err);
        res.json({
            status:500, 
            msg:"Data not Inserted",
            Error:err
        })
      })
        
    }).catch(err=>{
      console.log(err);

        res.json({
            status:500, 
            msg:"Data not Inserted",
            Error:err
        })
      })
  
    }
  
  

  
  
  //View  Result by ID
  
  const viewResultById=(req,res)=>{
    results.findOne({_id:req.params.id}).
    populate('bookingid').
    populate('userid').
    populate('staffid').
    populate('testid').exec()
    .then(data=>{
      console.log(data);
      res.json({
          status:200,
          msg:"Data obtained successfully",
          data:data
      })
    
  }).catch(err=>{
    console.log(err);
      res.json({
          status:500,
          msg:"No Data obtained",
          Error:err
      })
  })
  
  }
  

  //View  booking by booking id
  
  const viewResultByBookingId=(req,res)=>{
    let bookingid=req.params.id
   
     results.find({bookingid:bookingid}).
    populate('userid').
    populate('staffid').
    populate('testid')
     
     exec().then(data=>{
      res.json({
        status:200,
        data:data
      })
     }).catch(err=>{
      res.json({
        status:500,
        err:err
      })
     })
   
  
  }



const viewResultByUserId=async (req,res)=>{
  results.find({userid:req.params.id}).populate('testid').exec().then(data=>{
    res.json({
      status:200,
      data:data
    })
   }).catch(err=>{
    res.json({
      status:500,
      err:err
    })
   })
 

}


const viewResultId = (req, res) => {
  results.findOne({ _id: req.params.id }).populate('testid').exec()
    .then(data => {
      emps = data
      console.log(data);
      res.json({
        status: 200,
        msg: "Data obtained successfully",
        data: data
      })

    }).catch(err => {
      console.log(err);
      res.json({
        status: 500,
        msg: "No Data obtained",
        Error: err
      })
    })

}


const viewResultforStaff=async (req,res)=>{
  results.find({staffid:req.params.id}).populate('userid').populate('testid').exec().then(data=>{
    res.json({
      status:200,
      data:data
    })
   }).catch(err=>{
    res.json({
      status:500,
      err:err
    })
   })
 

}


const viewResultByLabId=async (req,res)=>{
  results.find({labId:req.params.id}).populate('userid').populate('testid')
  .populate('staffid').exec().then(data=>{
    res.json({
      status:200,
      data:data
    })
   }).catch(err=>{
    res.json({
      status:500,
      err:err
    })
   })
 

}






  
  module.exports={addResult,viewResultByBookingId,viewResultByLabId,
    viewResultByUserId,viewResultforStaff,viewResultById,viewResultId}
  