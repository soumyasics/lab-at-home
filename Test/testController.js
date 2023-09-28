

const tests=require('./testSchema')


//add test
const addTest=async(req,res)=>{


    // const newTest=new tests({
    //     name:req.body.name,
    //     price:req.body.price,
    //     labId:req.body.labId,
    //     condition:req.body.condition,
    //     duration:req.body.duration,
    //     comments:req.body.comments,
    //     details:req.body.details
    //     // description1:d1,
    //     // rangemin1:min1,
    //     // rangemax1:max1,
    //     // description2:req.body.description2,
    //     // rangemin2:req.body.rangemin2,
    //     // rangemax2:req.body.rangemax2,
    //     // description3:req.body.description3,
    //     // rangemin3:req.body.rangemin3,
    //     // rangemax13:req.body.rangemax3,
    //     // description4:req.body.description4,
    //     // rangemin4:req.body.rangemin4,
    //     // rangemax4:req.body.rangemax4,
    //     // description5:req.body.description5,
    //     // rangemin5:req.body.rangemin5,
    //     // rangemax5:req.body.rangemax5,
    //     // description6:req.body.description6,
    //     // rangemin6:req.body.rangemin6,
    //     // rangemax6:req.body.rangemax6,
    //     // description7:req.body.description7,
    //     // rangemin7:req.body.rangemin7,
    //     // rangemax7:req.body.rangemax7,
    //     // description8:req.body.description8,
    //     // rangemin8:req.body.rangemin8,
    //     // rangemax8:req.body.rangemax8,
    //     // description9:req.body.description9,
    //     // rangemin9:req.body.rangemin9,
    //     // rangemax9:req.body.rangemax9,
    //     // description10:req.body.description10,
    //     // rangemin10:req.body.rangemin10,
    //     // rangemax10:req.body.rangemax10
    // })
    // newTest.save()


    const { name, price, labId, condition, duration, comments, details } = req.body;
    const newTest = new tests({
      name,
      price,
      labId,
      condition,
      duration,
      comments,
      details, 
    });

    await newTest.save()
    .then(data=>{
        res.json({
            status:200,
            msg:"Inserted successfully",
            data:data
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



//View all Tests

const viewTests=(req,res)=>{

    tests.find().exec()
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
  console.log(err);
    res.json({
        status:500,
        msg:"No Data obtained",
        Error:err
    })
})

}

// view Tests finished


//update Labs by id
const ediTestById=(req,res)=>{

  tests.findByIdAndUpdate({_id:(req.params.id)},{
    name:req.body.name,
        price:req.body.price,
        labId:req.body.labId,
        condition:req.body.condition,
        duration:req.body.duration,
        comments:req.body.comments,
   details:req.body.details
 
    })
.exec().then(data1=>{
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
//View  Lab by ID

const viewTestById=(req,res)=>{
  tests.findOne({_id:req.params.id}).exec()
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

//Delete  Lab by ID

const deleteTestById=(req,res)=>{
  tests.findByIdAndDelete({_id:req.params.id}).exec()
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


const viewTestByLabId=(req,res)=>{
    tests.find({labId:req.params.id}).exec()
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
module.exports={addTest,deleteTestById,viewTestById,viewTests,ediTestById,viewTestByLabId}