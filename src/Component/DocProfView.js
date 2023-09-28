import React, { useEffect } from "react";
import { useState } from "react";
import axiosInstance from "./BaseUrl";
import DocNav from "./DocNav";
import './DocProfView.css';
import { Link } from "react-router-dom";
import img from './img/prof.jpg'
// import DocNav from "./DocNav";
import abimg from './img/gallery-06.jpg'
import abimg1 from './img/gallery-08.jpg'
import abimg2 from './img/img-3.jpg'
import abimg3 from './img/gallery-05.jpg'

function DocProfView() {
    const [doctor, setdoctor] = useState({});
//   const navigate = useNavigate();

  useEffect(()=>{
    // const storedUser = localStorage.getItem("users");
    const id=localStorage.getItem("doctlogid")
    console.log(id);



  axiosInstance.post(`/viewDoctorById/${id}`)
  .then((res)=>{
    console.log(res);

    setdoctor(res.data.data)
    
  })

  },[])
  return (
    <div>
        <DocNav/>
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
                        <h2>{doctor.name} <span style={{fontSize:'16px'}}>({doctor.age})</span></h2><small class='text-success' style={{fontSize:'small'}} > {doctor.email}</small>
                        <h6 class="mb-4"></h6>
                        <h5><i class="fa fa-check text-primary me-3"></i>{doctor.specialization}</h5>
                        <h5><i class="fa fa-check text-primary me-3"></i>{doctor.experience} year experience</h5>
                        <h5><i class="fa fa-check text-primary me-3"></i>{doctor.contact}</h5>
                        <Link to='/DocProfEdit' class="btn btn-success py-3 px-5 mt-3">Edit</Link>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  );
}

export default DocProfView;
