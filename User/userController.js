

const Users=require('./userSchema')
const jwt=require('jsonwebtoken')

const secret = 'your-secret-key'; // Replace this with your own secret key

const createToken = (user) => {
  return jwt.sign({ userId: user._id }, secret, { expiresIn: '1h' });
};

//User Registration 

const registerUser=(req,res)=>{
    const newUser=new Users({
        name:req.body.name,
        gender:req.body.gender,
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
//User Registration -- finished

//login Users

const login = (req, res) => {
  
  const { email, password } = req.body;

  Users.findOne({ email }).exec().then (user => {
   

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

//Login Users --finished


//View all Users

const viewUsers=(req,res)=>{

  Users.find().exec()
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
const editUserById=(req,res)=>{


 
  Users.findByIdAndUpdate({_id:(req.params.id)},{
    name:req.body.name,
        gender:req.body.gender,
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
//View  Employer by ID

const viewUserById=(req,res)=>{
  Users.findOne({_id:req.params.id}).exec()
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

//Delete  Employer by ID

const deleteUserById=(req,res)=>{
  Users.findByIdAndDelete({_id:req.params.id}).exec()
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

//forgotvPawd  by id
const forgotPwd=(req,res)=>{

  
    
  Users.findOneAndUpdate({email:req.body.email},{
   
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

module.exports={registerUser,forgotPwd,deleteUserById,login,requireAuth,viewUserById,viewUsers,editUserById}