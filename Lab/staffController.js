const staffSchema = require("./staffSchema")
const jwt=require('jsonwebtoken')

const secret = 'your-secret-key'; // Replace this with your own secret key

const createToken = (user) => {
  return jwt.sign({ userId: user._id }, secret, { expiresIn: '1h' });
};
const addStaff=(req,res)=>{
    const newUser=new staffSchema({
        name:req.body.name,
        experience:req.body.experience,
        qualification:req.body.qualification,
        address:req.body.address,
        contact:req.body.contact,
        aadhar:req.body.aadhar,
        labid:req.params.id,
        email:req.body.email,
        password:req.body.password

       
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



//login Staff

const login = (req, res) => {
  
    const { email, password } = req.body;
  
    staffSchema.findOne({ email }).exec().then (user => {
     
  
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
  
  //Login Staff --finished


  const viewStaffById=(req,res)=>{
    staffSchema.findById({_id:req.params.id}).exec()
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
  
  const deleteLabById=(req,res)=>{
    staffSchema.findByIdAndDelete({_id:req.params.id}).exec()
    .then(data=>{
  
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
  //View all  staffs

const viewAllStaffs=(req,res)=>{
    staffSchema.find().exec()
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

//View all  staff by Labid

const viewAllStaffByLab=(req,res)=>{
    staffSchema.find({labid:req.params.id}).exec()
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


//update staff data
const editStaffById=(req,res)=>{


 
    staffSchema.findByIdAndUpdate({_id:(req.params.id)},{
      name:req.body.name,
      experience:req.body.experience,
      qualification:req.body.qualification,
      address:req.body.address,
      contact:req.body.contact,
      aadhar:req.body.aadhar,
      email:req.body.email,
      password:req.body.password
     
   
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
  
  

module.exports={addStaff,login,requireAuth,viewStaffById,deleteLabById,viewAllStaffs,viewAllStaffByLab
,editStaffById}