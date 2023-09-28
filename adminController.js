const labschema = require("./Lab/labschema")

  
//view Lab reqs
const viewLabRequests=(req,res)=>{
    labschema.find({isactive:false}).exec()
    .then(data=>{
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
      res.json({
          status:500,
          msg:"Data not Inserted",
          Error:err
      })
  })

  
  }
  
  
//Lab Approval 
const ApproveLab=(req,res)=>{

  labschema.findByIdAndUpdate({_id:req.params.id},{
    isactive:true
    })
.exec().then(data=>{
  res.json({
      status:200,
      msg:"Updated successfully"
  })
}).catch(err=>{
  res.json({
      status:500,
      msg:"Data not Updated",
      Error:err
  })
})
}


module.exports={ApproveLab,viewLabRequests}