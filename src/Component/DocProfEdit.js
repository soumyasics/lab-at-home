import React from "react";

import axiosInstance from "./BaseUrl";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DocNav from "./DocNav";

function DocProf() {
  const [values,setValue] = useState({});
    const navigate=useNavigate();
  
  
    const id=localStorage.getItem("doctlogid")
  
  
    useEffect(() => {
  
  
      axiosInstance.post(`/viewDoctorById/${id}`)
      .then((res)=>{
      setValue(res.data.data)
      
    })
    }, []);
  
    const updatefcn=(e)=>{
      e.preventDefault();
  
      axiosInstance.post(`/editDoctorById/${id}`,values)
      .then((response)=>{
        console.log(response);
        if (response.data.status==200) {
          alert('Profile Updated')
          navigate('/DocProfView')
        }else{
          alert('Updation Failed')
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
      <DocNav/>
      <div class="container">
        <div class="row" style={{ marginTop: "5rem", marginBottom: "10rem" }}>
          <div class="col-lg-3 col-md-2"></div>
          <div class="col-lg-6 col-md-8 login-box">
            <div class="col-lg-12 login-key">
              <i class="fa fa-key" aria-hidden="true"></i>
            </div>
            <div class="col-lg-12 login-title ">
              <h1>Update Profile</h1>
            </div>

            <div class="col-lg-12 login-form ">
              <div class="col-lg-12 login-form">
                <form className="mt-3" onSubmit={updatefcn}>
                  <div class="row">
                    <div class=" col-6 form-group mb-2">
                      {/* <label class="form-control-label">USER EMAIL</label> */}
                      <input
                        name="name"
                        type="text"
                        class="form-control"
                        value={values.name}
                        placeholder="Name"
                        onChange={changefn}
                      />
                    </div>

                    <div class="col-6 form-group mb-2">
                      <input
                        name="email"
                        type="email"
                        class="form-control"
                        placeholder="e-mail"
                        value={values.email}
                        onChange={changefn}                       
                      />
                    </div>
                    <div class="col-6 form-group mb-2">
                      <input
                        name="specialization"
                        type="text"
                        class="form-control"
                        placeholder="Specialization"
                        value={values.specialization}
                        onChange={changefn}                      />
                    </div>
                    <div class="col-6 form-group mb-2">
                      <input
                        name="experience"
                        type="number"
                        class="form-control"
                        placeholder="experience"
                        value={values.experience}
                        onChange={changefn}                      />
                    </div>
                    {/* <div class="col-6 form-group d-flex justify-content-around mb-2">
                      <div>
                        <label class="form-check-label" for="flexRadioDefault1">
                          Gender
                        </label>
                      </div>
                      <div>
                        <input
                          class="form-check-input"
                          style={{ marginLeft: "10px", marginRight: "10px" }}
                          value="Male"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          type="radio"
                          name="gender"
                          id="gender"
                        />
                        <label class="form-check-label" for="flexRadioDefault1">
                          Male
                        </label>
                        <input
                          class="form-check-input"
                          type="radio"
                          style={{ marginLeft: "10px", marginRight: "10px" }}
                          value="Female"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          name="gender"
                          id="gender"
                        />
                        <label class="form-check-label" for="flexRadioDefault1">
                          Female
                        </label>
                      </div>
                    </div> */}
                    <div class="col-6 form-group mb-2">
                      <input
                        name="age"
                        type="number"
                        class="form-control"
                        placeholder="Age"
                        value={values.age}
                        onChange={changefn}                      />
                    </div>
                    {/* <div class="col-6 form-group mb-2">
                      <input
                        name="city"
                        type="text"
                        class="form-control"
                        placeholder="City"
                        value={values.city}
                        onChange={changefn}                      />
                    </div> */}
                    <div class="col-6 form-group mb-2">
                      <input
                        name="contact"
                        type="number"
                        class="form-control"
                        placeholder="Contact"
                        value={values.contact}
                        onChange={changefn}                      />
                    </div>
                    {/* <div class="col-12 form-group mb-2">
                      <input
                        name="password"
                        type="password"
                        class="form-control"
                        placeholder="Password"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                    </div> */}
                  </div>

                  <div class="col-lg-12 loginbttm">
                    <div class="col-lg-6 login-btm login-text"></div>
                    <div class="col-lg-7 login-btm login-button mt-2">
                      <button type="submit" class="btn btn-success">
                        Update
                      </button>
                      <div class="reg__link"></div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            {/* <div class="col-lg-3 col-md-2"></div> */}
          </div>
        </div>
      </div>
      {/* <div class="container rounded bg-white mt-5 mb-5">
        <div class="row">
          <div class="col-md-3 border-right">
            
          </div>
          <div class="col-md-5 border-right">
            <div class="p-3 py-5">
              <div class="d-flex justify-content-between align-items-center mb-3">
                <h4 class="text-right">Doctor Profile Edit</h4>
              </div>
              <form onSubmit={updatefcn}>
              <div class="row mt-2">
                <div class="col-md-6">
                  <label class="labels">Name</label>
                  <input
                    type="text"
                    class="form-control"
                 
                    value={value.name}
                    name='name'
                    onChange={changefn}
                  />
                </div>
                <div class="col-md-6">
                  <label class="labels">Contact</label>
                  <input
                    type="number"
                    name="contact"
                    class="form-control"
                    value={value.contact}
                  
                    onChange={changefn}
                  />
                </div>
              </div>
              <div class="row mt-3">
                <div class="col-md-12">
                  <label class="labels">Email</label>
                  <input
                    type="email"
                    class="form-control"  
                    value={value.email}
                    name="email"
                    onChange={changefn}
                  />
                </div>
                <div class="col-md-12">
                  <label class="labels">Specialization</label>
                  <input
                    type="text"
                    class="form-control"
                    name="specialization"
                    value={value.specialization}
                  />
                </div>
                <div class="col-md-12">
                  <label class="labels">Gender</label>
                  <input
                    type="text"
                    class="form-control"   
                    value={value.gender}
                    name="gender"
                    onChange={changefn}
                  />
                </div>
                <div class="col-md-12">
                  <label class="labels">Experience</label>
                  <input
                    type="text"
                    class="form-control"
                    name="experience"
                    value={value.experience}
                  />
                </div>
                <div class="col-md-12">
                  <label class="labels">Age</label>
                  <input
                    type="number"
                    class="form-control"
                   
                    value={value.age}
                    onChange={changefn}
                    name="age"
                  />
                </div>
              
              <button type='submit' class='btn btn-primary h-23 w-100 py-2'>Update</button>
                
              </div>
             
              </form>
              
            </div>
          </div>
          
        </div>
      </div> */}
    </div>
  );
}

export default DocProf;
