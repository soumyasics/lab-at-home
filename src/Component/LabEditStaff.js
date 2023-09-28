import React, { useEffect, useState } from 'react'
import LabNav from './LabTecProf/LabNav'
import abimg from './img/gallery-06.jpg'
import abimg1 from './img/gallery-08.jpg'
import abimg2 from './img/img-3.jpg'
import abimg3 from './img/gallery-05.jpg'
import { useNavigate, useParams } from 'react-router-dom'
import axiosInstance from './BaseUrl'

function LabEditStaff() {

    const [values,setValue] = useState({});
    const navigate=useNavigate();
  
  
    const id=useParams();
  
  
    useEffect(() => {
  
  
      axiosInstance.post(`/viewStaffById/${id.id}`)
      .then((res)=>{
      setValue(res.data.data)
      
    })
    }, []);
  
    const updatefcn=(e)=>{
      e.preventDefault();
  
      axiosInstance.post(`/editStaffById/${id.id}`,values)
      .then((response)=>{
        console.log(response);
        if (response.data.status==200) {
          alert('Staff Updated')
          navigate('/lab_view_staff')
        }else{
          alert('Test Failed')
        }
  
      })
      .catch((err)=>{
        console.log(err);
      })
    }
  
    const changefn = (e)=>{
  setValue({...values, [e.target.name]:e.target.value})
    }

    useEffect(()=>{
        console.log(values);

    })

  return (
    <div>
      <LabNav/>
      <div class="container-xxl py-5">
            <div class="container">
                <div class="row g-5 " >
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
                    <div class="col-lg-6 wow fadeIn" data-wow-delay="0.5s" style={{marginTop:'10rem'}}>
                    <h1 class="mb-4">Add Staff</h1>

                    <form onSubmit={updatefcn} >
                  <div class="row">
                    <div class=" col-6 form-group mb-2">
                      <input
                        name="name"
                        id="name"
                        type="text"
                        class="form-control"
                        placeholder="Staff Name"
                        value={values.name}
                        onChange={changefn}
                      />
                      
                    </div>

                    <div class="col-6 form-group mb-2">
                      <input
                        name="email"
                        id="email"
                        type="email"
                        class="form-control"
                        placeholder="E-mail"
                        value={values.email}
                        onChange={changefn}
                      />
                      
                    </div>

                    <div class="col-6 form-group mb-2">
                      <input
                        name="qualification"
                        id="qualification"
                        type="text"
                        class="form-control"
                        placeholder="Qualification"
                        value={values.qualification}
                        onChange={changefn}
                      />
                      
                    </div>
                    <div class="col-6 form-group mb-2">
                      <input
                        name="experience"
                        id="experience"
                        type="number"
                        class="form-control"
                        placeholder="Experience"
                        value={values.experience}
                        onChange={changefn}
                      />
                    
                    </div>
                    <div class="col-6 form-group mb-2">
                      <input
                        name="contact"
                        id="contact"
                        type="number"
                        class="form-control"
                        placeholder="Contact"
                        value={values.contact}
                        onChange={changefn}
                      />
                     
                    </div>
                    

                    <div class="col-6 form-group mb-2">
                      <input
                        name="aadhar"
                        id="aadhar"
                        type="number"
                        class="form-control"
                        placeholder="Aadhaar Number"
                        value={values.aadhar}
                        onChange={changefn}
                      />
                      
                    </div>
                  
                    <div class="col-12 form-group mb-2">
                    <textarea name="address" id="address"
                        type="text"
                        value={values.address}
                         class="form-control" placeholder='Address' rows="3" onChange={changefn}/>
                      
                      
                    </div>
                    
                    
                   
                    
                  </div>

                  <div class="col-lg-12 loginbttm">
                    <div class="col-lg-6 login-btm login-text"></div>
                    <div class="col-lg-7 login-btm login-button mt-2">
                      <button type="submit" class="btn btn-success">
                        Add
                      </button>
                      <div class="reg__link"></div>
                    </div>
                  </div>
                </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LabEditStaff
