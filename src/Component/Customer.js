
import React from 'react'
import { Link } from 'react-router-dom'
import { useState,useEffect } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import axiosInstance from './BaseUrl'
import Nav from './Nav'

function Customer() {
    const[login,setLogin]=useState({
        email:'',
        password:''
    })
    const changehandleSubmit  = (a)=> {
        setLogin({...login,[a.target.name]:a.target.value})
        
      }
      useEffect(() =>{
        console.log(login);
      })
      const navigate=useNavigate();
      const submitt=(b)=>{
        console.log('submitted')
        b.preventDefault()
        axiosInstance.post('/loginUser',login)
        .then((result)=>{
          console.log('data entered',result)
          if (result.status==200) {
            localStorage.setItem("custlogid", result.data.user._id);
             navigate('/CustHome')
            alert('login Sucessfully...')
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
                    <h1>USER LOGIN</h1>
                </div>

                <div class="col-lg-12 login-form">
                    <div class="col-lg-12 login-form">
                        <form onSubmit={submitt}>
                            <div class="form-group">
                                <label class="form-control-label">USER EMAIL</label>
                                <input type="email" class="form-control"name='email' value={login.email} onChange={changehandleSubmit}/>
                            </div>
                            <div class="form-group">
                                <label class="form-control-label">PASSWORD</label>
                                <input type="password" class="form-control" name='password'value={login.password} onChange={changehandleSubmit}i/>
                            </div>

                            <div class="col-lg-12 loginbttm">
                                <div class="col-lg-6 login-btm login-text">
                                  
                                </div>
                                <div class="col-lg-7 login-btm login-button mt-2">
                                   
                                   <button type="submit" class="btn btn-success">LOGIN</button>
                                   
                                 
                                  </div>
                                  <div class="reg__link mt-3 d-flex justify-content-between">
                                 <p>Don't have an Account? <Link to="/CandReg" class="reg text-success">Register</Link></p>
                                 <p><Link to="/user_forgot_pass" class="reg text-success">Forgot Password</Link></p>
                                 
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>





    </div>
    </div>
    </div>
  )
}

export default Customer