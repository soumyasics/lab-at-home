import React, { useEffect, useState } from 'react'
import StaffNav from './StaffNav'
import abimg from './img/gallery-06.jpg'
import abimg1 from './img/gallery-08.jpg'
import abimg2 from './img/img-3.jpg'
import abimg3 from './img/gallery-05.jpg'
import axiosInstance from './BaseUrl'

function StaffProfile() {

    const [value, setdoctor] = useState({});
//   const navigate = useNavigate();

  useEffect(()=>{
    // const storedUser = localStorage.getItem("users");
    const id=localStorage.getItem("staffid")
    console.log(id);



  axiosInstance.post(`/viewStaffById/${id}`)
  .then((res)=>{
    console.log(res);

    setdoctor(res.data.data)
    
  })

  },[])

  return (
    <div>
        <StaffNav/>
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
                        <h2>{value.name} <span style={{fontSize:'16px'}}></span></h2><small class='text-success' style={{fontSize:'small'}} > {value.email}</small>
                        <h6 class="mb-4"></h6>
                        <h5><i class="fa fa-check text-primary me-3"></i>{value.qualification}</h5>
                        <h5><i class="fa fa-check text-primary me-3"></i>{value.experience} year experience</h5>
                        <h5><i class="fa fa-check text-primary me-3"></i>{value.aadhar}</h5>
                        <h5><i class="fa fa-check text-primary me-3"></i>{value.address}</h5>
                        <h5><i class="fa fa-check text-primary me-3"></i>{value.contact}</h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default StaffProfile
