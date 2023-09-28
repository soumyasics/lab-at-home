import React from 'react'
import { useNavigate } from 'react-router-dom';
import axiosInstance from './BaseUrl';
import { useFormik } from 'formik';
import { forgotPasswordScheme } from './Schema';
import Nav from './Nav';

function LabForgotPass() {

    const navigate=useNavigate();   

    const onSubmit=(e)=>{


        axiosInstance.post("/forgetPwdLab",values)
        .then((response)=>{
            console.log(response);
            
            if (response.data.status===200) {
                alert("Updated Successfully")
                navigate("/Lablogin")
            }else{
                alert("Updation Failed")
            }
        })
        .catch((err)=>{
            console.log('error',err);
            alert("Updation Failed")
        })

    }

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
        initialValues: {
            email: "",
            password: "",
          },
          validationSchema: forgotPasswordScheme,
          onSubmit,
          
    })

  return (
    <div>
        <Nav/>
      <div class="container">
        <div class="row" style={{marginTop:'5rem',marginBottom:'10rem'}}>
            <div class="col-lg-3 col-md-2"></div>
            <div class="col-lg-6 col-md-8 login-box">
                <div class="col-lg-12 login-key">
                    <i class="fa fa-key" aria-hidden="true"></i>
                </div>
                <div class="col-lg-12 login-title mb-5 mt-5">
                    <h1>Update Password</h1>
                </div>

                <div class="col-lg-12 login-form">
                    <div class="col-lg-12 login-form">
                        <form onSubmit={handleSubmit}>
                            <div class="form-group  mb-3">
                                <label class="form-control-label mb-2">LAB EMAIL</label>
                                <input 
                                type="email" class="form-control" value={values.email} onChange={handleChange} onBlur={handleBlur} id="email" placeholder="Your Email"/>
                            </div>
                            {errors.email && touched.email && (<span className="err">{errors.email}</span>)}

                            <div class="form-group  mb-3">
                                <label class="form-control-label mb-2">NEW PASSWORD</label>
                                <input 
                                type="password" class="form-control" 
                                 placeholder="Password"
                                />
                            </div>
                            {errors.password && touched.password && (<p className="err">{errors.password}</p>)}

                            <div class="col-lg-12 loginbttm">
                                <div class="col-lg-6 login-btm login-text">
                                  
                                </div>
                                <div class="col-lg-7 login-btm login-button mt-2">
                                   
                                 <button type="submit" class="btn btn-success">Update</button>
                                 
                               
                                </div>
                                </div>
                            
                        </form>
                    </div>
                </div>
                {/* <div class="col-lg-3 col-md-2"></div> */}
            </div>
        </div>





    </div>
    </div>
  )
}

export default LabForgotPass
