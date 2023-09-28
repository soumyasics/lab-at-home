

const lab=require('./labschema')
const jwt=require('jsonwebtoken')

const secret = 'your-secret-key'; // Replace this with your own secret key

const createToken = (user) => {
  return jwt.sign({ userId: user._id }, secret, { expiresIn: '1h' });
};

//User Registration 

const registerLab=(req,res)=>{
    const newUser=new lab({
        name:req.body.name,
        regNo:req.body.regNo,
        city:req.body.city,
        district:req.body.district,
        contact:req.body.contact,
        email:req.body.email,
        password:req.body.password,
        pincode:req.body.pincode
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
//Lab Registration -- finished

//login Lab

const login = (req, res) => {
  
  const { email, password } = req.body;

  lab.findOne({ email }).exec().then (user => {
   

    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }

      if (user.password!=password) {
        return res.status(500).json({ msg: 'incorrect pwd' });
      }

    
      const token = createToken(user);

      res.status(200).json({ user, token });
    })
    .catch(err=>{
      
        return res.status(500).json({ msg: 'Something went wrong' });
      
    })
  
};
//validate


const requireAuth = (req, res, next) => {
  const token = req.headers.authorization.split(' ')[1];

  console.log("t1",token);
  console.log("secret",secret);
  if (!token) {
    return res.status(401).json({ msg: 'Unauthorized' });
  }
  jwt.verify(token, secret, (err, decodedToken) => {
    console.log(decodedToken);
    if (err) {
      return res.status(401).json({ messamsgge: 'Unauthorized' ,err:err});
    }

    req.user = decodedToken.userId;
    next();
    return res.status(200).json({ msg: 'ok' ,user:decodedToken.userId});
  });
  console.log(req.user);
};

//Login Lab --finished


//View all Users

const viewAprvdLabs=(req,res)=>{

    lab.find({isactive:true}).exec()
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

// view Labs finished


//update Labs by id
const editLabById=(req,res)=>{


 
  lab.findByIdAndUpdate({_id:(req.params.id)},{
    name:req.body.name,
        regNo:req.body.regNo,
        city:req.body.city,
        district:req.body.district,
        contact:req.body.contact,
        email:req.body.email,
       
        pincode:req.body.pincode
   
 
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

const viewLabById=(req,res)=>{
  lab.findOne({_id:req.params.id}).exec()
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

//Delete  Lab by ID

const deleteLabById=(req,res)=>{
  lab.findByIdAndDelete({_id:req.params.id}).exec()
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

//forgotvPawd  by id
const forgotPwd=(req,res)=>{

  
    
  lab.findOneAndUpdate({email:req.body.email},{
   
    password:req.body.password
    })
.exec().then(data=>{

  if(data!=null)
  res.json({
      status:200,
      msg:"Updated successfully"
  })
  else
  res.json({
    status:500,
    msg:"User Not Found"
   
})
}).catch(err=>{
  console.log(err);
  res.json({
      status:500,
      msg:"Data not Updated",
      Error:err
  })
})
}

 
//View all  Lab requests

const viewLabRequests=(req,res)=>{
  lab.find({isactive:false}).exec()
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
        msg:"Data not obtained",
        Error:err
    })
})

}
//Lab Approval by admin
const ApproveLab=(req,res)=>{

    
  lab.findByIdAndUpdate({_id:req.params.id},{
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


module.exports={registerLab,forgotPwd,deleteLabById,login,requireAuth,
  ApproveLab,viewLabRequests,viewLabById,viewAprvdLabs,editLabById}