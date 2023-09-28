import React, { useEffect } from 'react'
import { useState } from "react";
import axiosInstance from '../BaseUrl';
import { Link } from "react-router-dom";
import CustNav from './CustNav';
import abimg from '../img/gallery-06.jpg'
import abimg1 from '../img/gallery-08.jpg'
import abimg2 from '../img/img-3.jpg'
import abimg3 from '../img/gallery-05.jpg'
function CustProfView() {
    const [cust, setcust] = useState({});
    useEffect(()=>{
      // const storedUser = localStorage.getItem("users");
      const id=localStorage.getItem("custlogid")
      console.log(id)
  ;
  
  
  
    axiosInstance.post(`/viewuserById/${id}`)
    .then((res)=>{
      setcust(res.data.data)
      
    })
  
    },[])
  return (
    <div>
        <CustNav/>
        <div class="container-xxl py-5">
            <div class="container">
                <div class="row g-5 ">
                    <div class="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                        <div class="row g-0 about-bg rounded overflow-hidden">
                            <div class="col-6 text-start">
                                <img class="img-fluid w-100" src={abimg}/>
                            </div>
                            <div class="col-6 text-start">
                                <img class="img-fluid" src={abimg1} style={{width: "85%",marginTop: "15%"}}/>
                            </div>
                            <div class="col-6 text-end">
                                <img class="img-fluid" src={abimg2} style={{width:" 85%;"}}/>
                            </div>
                            <div class="col-6 text-end">
                                <img class="img-fluid w-100" src={abimg3}/>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 wow fadeIn " style={{marginTop:'6rem'}} data-wow-delay="0.5s">
                        <h1 class="mb-4 text-success">Profile</h1>
                        <h2>{cust.name}</h2><small class='text-success' style={{fontSize:'small'}} > {cust.email}</small>
                        <h6 class="mb-4"></h6>
                        {/* <h5><i class="fa fa-check text-primary me-3"></i>{cust.regNo}</h5> */}
                        <h5><i class="fa fa-check text-primary me-3"></i>{cust.contact}</h5>
                        <h5><i class="fa fa-check text-primary me-3"></i>{cust.city}</h5>
                        <h5><i class="fa fa-check text-primary me-3"></i>{cust.district}</h5>
                        <h5><i class="fa fa-check text-primary me-3"></i>{cust.pincode}</h5>
                        <Link to='/CustEditView' class="btn btn-success py-3 px-5 mt-3">Edit</Link>
                    </div>
                </div>
            </div>
        </div>  

    </div>
  )
}

export default CustProfView