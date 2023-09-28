import React, { useEffect } from 'react'
import { useState } from "react";
import axiosInstance from '../BaseUrl';
import { Link } from "react-router-dom";
import LabNav from './LabNav'
import abimg from '../img/gallery-06.jpg'
import abimg1 from '../img/gallery-08.jpg'
import abimg2 from '../img/img-3.jpg'
import abimg3 from '../img/gallery-05.jpg'


function LabProfView() {


  const [lab, setlab] = useState({});
  
  useEffect(()=>{
    const id=localStorage.getItem("lablogid")
    console.log(id)



  axiosInstance.post(`/viewLabById/${id}`)
  .then((res)=>{
    setlab(res.data.data)
    console.log(res.data.data);
    
  })

  },[])
  return (
    <div>
      <LabNav/>
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
                        <h2>{lab.name}</h2><small class='text-success' style={{fontSize:'small'}} > {lab.email}</small>
                        <h6 class="mb-4"></h6>
                        <h5><i class="fa fa-check text-primary me-3"></i>{lab.regNo}</h5>
                        <h5><i class="fa fa-check text-primary me-3"></i>{lab.contact}</h5>
                        <h5><i class="fa fa-check text-primary me-3"></i>{lab.city}</h5>
                        <h5><i class="fa fa-check text-primary me-3"></i>{lab.district}</h5>
                        <h5><i class="fa fa-check text-primary me-3"></i>{lab.pincode}</h5>
                        <Link to='/LabProfEdit' class="btn btn-success py-3 px-5 mt-3">Edit</Link>
                    </div>
                </div>
            </div>
        </div>  


    </div>
  )
}

export default LabProfView