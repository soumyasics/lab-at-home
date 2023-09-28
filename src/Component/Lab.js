import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import axiosInstance from './BaseUrl'
import Nav from './Nav'


function Lablogin() {
    const[log,setLog]=useState({
        email:"",
        password:""
    })
    const changehandleSubmit  = (a)=> {
        setLog({...log,[a.target.name]:a.target.value})
        
      }
      useEffect(() =>{
        console.log(log);
      })
      const navigate=useNavigate();
      const submitt=(b)=>{
        // console.log('submitted')
        b.preventDefault()
        axiosInstance.post('/loginLab',log)
        .then((result)=>{
          console.log('data entered',result)
          if (result.status==200) {
            navigate('/LabHome')
            console.log(result);
            localStorage.setItem("lablogid", result.data.user._id);
           alert('login sucessfully')
          }
          else{
            alert('login Failed')
          }
        })
        .catch((error)=>{
          console.log('error',error)
          alert('login Failed')

        })
      }
  return (
    <div>
       <Nav/>
          <div>
         <div class="container">
        <div class="row" style={{marginTop:'5rem',marginBottom:'10rem'}}>
            <div class="col-lg-3 col-md-2"></div>
            <div class="col-lg-6 col-md-8 login-box">
                <div class="col-lg-12 login-key">
                    <i class="fa fa-key" aria-hidden="true"></i>
                </div>
                <div class="col-lg-12 login-title">
                    <h1>LAB TEC LOGIN</h1>
                </div>

                <div class="col-lg-12 login-form">
                    <div class="col-lg-12 login-form">
                        <form onSubmit={submitt}>
                            <div class="form-group1">
                                <label class="form-control-label1">USER EMAIL</label>
                                <input 
                                name='email'
                                type="email" 
                                class="form-control"
                                value={log.email}
                                onChange={changehandleSubmit}/>
                            </div>
                            <div class="form-group1">
                                <label class="form-control-label1">PASSWORD</label>
                                <input
                                name='password'
                                 type="password" 
                                 class="form-control" i
                                 value={log.password}
                                onChange={changehandleSubmit}/>
                            </div>

                            <div class="col-lg-12 loginbttm">
                                <div class="col-lg-6 login-btm login-text">
                                  
                                </div>
                                <div class="col-lg-7 login-btm login-button mt-2">
                                <button type="submit" class="btn btn-success">LOGIN</button>
                                
                                </div>
                                <div class="reg__link mt-3 d-flex justify-content-between">
                                 <p>Don't have an Account? <Link to="/Labreg" class="reg text-success">Register</Link></p>
                                 <p><Link to="/Lab_forgot_pass" class="reg text-success">Forgot Password</Link></p>
                                 
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="col-lg-3 col-md-2"></div>
            </div>
        </div>





    </div>
    </div>
    </div>
  )
}

export default Lablogin