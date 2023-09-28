const appointmentSchema = require('./appointmentSchema')
let mongoose=require('mongoose')

const addBooking=(req,res)=>{
  console.log(req.body.drid);
    const newUser=new appointmentSchema({
      userid:req.body.userid,
    
      drid:req.body.drid,
      comments:req.body.comments,
      time:req.body.time,
      date:req.body.date
     
      
  })
  newUser.save().then(data=>{
      res.json({
          status:200,
          msg:"Inserted successfully",
          data:data
      })
  }).catch(err=>{
      res.json({
          status:500, 
          msg:"Data not Inserted",
          Error:err
      })
  })
}


  
  
//View all  appointments

const viewBookings=(req,res)=>{

    appointmentSchema.find({isactive:true}).exec()
    .then(data=>{
      emps=data
      if(data.length>0){
      res.json({
          status:200,
          msg:"Data obtained successfully",
          data:data
      })
    }else{
      res.json({
        status:200,
        msg:"No Data obtained "
    })
    }
  }).catch(err=>{
    console.log(err);
      res.json({
          status:500,
          msg:"No Data obtained",
          Error:err
      })
  })
  
  }
  
  // view Users finished
  
  
  //View   appointment by ID
  
  const viewBookingById=(req,res)=>{
    appointmentSchema.findOne({_id:req.params.id}).exec()
    .then(data=>{
    emps=data
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
  

  
  //View   appointment by  dr ID
  
  const viewBookingBydrId=(req,res)=>{
  
     appointmentSchema.find({drid:req.params.id}).populate('userid').exec().then(data=>{
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


  
  //View   appointment reqs by  dr ID
  
  const viewBookingBydrReqsId=(req,res)=>{
  
    appointmentSchema.find({drid:req.params.id,isactive:false}).populate('userid').exec().then(data=>{
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

  //Approve reqs by  dr ID
  
  const approveBookingBydrReqsId=(req,res)=>{
  
    appointmentSchema.findByIdAndUpdate({_id:req.params.id},{isactive:true}).exec().then(data=>{
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


//View approved appointment  by  dr ID

const viewApprovedBookingByUserId= (req,res)=>{
  appointmentSchema.find({userid:req.params.id}).populate('drid').exec().then(data=>{

    console.log(data);
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


//View pending appointment  by  dr ID

const viewPendingBookingByUserId= (req,res)=>{
  appointmentSchema.find({userid:req.params.id,isactive:false}).populate('drid').exec().then(data=>{

    console.log(data);
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







  
  module.exports={addBooking,viewBookingById,viewBookingBydrId,viewBookings,viewApprovedBookingByUserId,viewBookingBydrId,viewBookingBydrReqsId,
  viewPendingBookingByUserId,approveBookingBydrReqsId}
  