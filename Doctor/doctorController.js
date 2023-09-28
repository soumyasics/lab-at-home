

const doctors=require('./doctorSchema')
const jwt=require('jsonwebtoken')

const secret = 'your-secret-key'; // Replace this with your own secret key

const createToken = (user) => {
  return jwt.sign({ userId: user._id }, secret, { expiresIn: '1h' });
};

//User Registration 

const registerDoctor=(req,res)=>{
    const newDoctor=new doctors({
        name:req.body.name,
        gender:req.body.gender,
        experience:req.body.experience,
        specialization:req.body.specialization,
        contact:req.body.contact,
        email:req.body.email,
        password:req.body.password,
        age:req.body.age
    })
    newDoctor.save().then(data=>{
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
//Doctor Registration -- finished

//login Doctor

const login = (req, res) => {
  
  const { email, password } = req.body;

  doctors.findOne({ email }).exec().then (user => {
   

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

//Login Doctors --finished


//View all Doctors

const viewDoctors=(req,res)=>{

  doctors.find().exec()
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


//update Users by id
const editDoctorById=(req,res)=>{


 
  doctors.findByIdAndUpdate({_id:(req.params.id)},{
    name:req.body.name,
    gender:req.body.gender,
    experience:req.body.experience,
    specialization:req.body.specialization,
    contact:req.body.contact,
    email:req.body.email,
    password:req.body.password,
    age:req.body.age
   
 
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
//View  Doctor by ID

const viewDoctorById=(req,res)=>{
  doctors.findOne({_id:req.params.id}).exec()
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

//Delete  Doctor by ID

const deleteDoctorById=(req,res)=>{
  doctors.findByIdAndDelete({_id:req.params.id}).exec()
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

  
    
  doctors.findOneAndUpdate({email:req.body.email},{
   
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

module.exports={registerDoctor,forgotPwd,deleteDoctorById,login,requireAuth,viewDoctorById,viewDoctors,editDoctorById}