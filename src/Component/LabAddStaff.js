import React, { useEffect } from 'react'
import LabNav from './LabTecProf/LabNav'
import abimg from './img/gallery-06.jpg'
import abimg1 from './img/gallery-08.jpg'
import abimg2 from './img/img-3.jpg'
import abimg3 from './img/gallery-05.jpg'
import axiosInstance from './BaseUrl'
import { useFormik } from 'formik'
import { addStaffSchema, addTestSchema } from './Schema'

function LabAddStaff() {

    const id=localStorage.getItem('lablogid')
    console.log(id);

    const onSubmit = (e) => {
        // e.preventDefault();
      axiosInstance
        .post(`/addStaff/${id}`, values)
        .then((response) => {
          console.log(response);
          if(response.data.status==200){
            alert('Staff added')
          }else  if(response.data.status==500){
            alert('Staff already exist')
          }else{
            alert('Failed')
          }
  
        })
        .catch((err) => {
          console.log("error", err);
          alert("Failed");
        });
    };
  
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
      useFormik({
        initialValues: {
            name:'',
            experience:'',
            qualification:'',
            address:'',
            contact:'',
            aadhar:'',
            labid:id,
            email:'',
            password:''
        },
        validationSchema: addStaffSchema,
        onSubmit,
      });

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

                    <form onSubmit={handleSubmit} >
                  <div class="row">
                    <div class=" col-6 form-group mb-2">
                      <input
                        name="name"
                        id="name"
                        type="text"
                        class="form-control"
                        placeholder="Staff Name"
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.name && touched.name && (
                        <span className="err">{errors.name}</span>
                      )}
                    </div>

                    <div class="col-6 form-group mb-2">
                      <input
                        name="email"
                        id="email"
                        type="email"
                        class="form-control"
                        placeholder="E-mail"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.email && touched.email && (
                        <span className="err">{errors.email}</span>
                      )}
                    </div>

                    <div class="col-6 form-group mb-2">
                      <input
                        name="qualification"
                        id="qualification"
                        type="text"
                        class="form-control"
                        placeholder="Qualification"
                        value={values.qualification}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.qualification && touched.qualification && (
                        <span className="err">{errors.qualification}</span>
                      )}
                    </div>
                    <div class="col-6 form-group mb-2">
                      <input
                        name="experience"
                        id="experience"
                        type="number"
                        class="form-control"
                        placeholder="Experience"
                        value={values.experience}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.experience && touched.experience && (
                        <span className="err">{errors.experience}</span>
                      )}
                    </div>
                    <div class="col-6 form-group mb-2">
                      <input
                        name="contact"
                        id="contact"
                        type="number"
                        class="form-control"
                        placeholder="Contact"
                        value={values.contact}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.contact && touched.contact && (
                        <span className="err">{errors.contact}</span>
                      )}
                    </div>
                    

                    <div class="col-6 form-group mb-2">
                      <input
                        name="aadhar"
                        id="aadhar"
                        type="number"
                        class="form-control"
                        placeholder="Aadhaar Number"
                        value={values.aadhar}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.aadhar && touched.aadhar && (
                        <span className="err">{errors.aadhar}</span>
                      )}
                    </div>
                    <div class="col-12 form-group mb-2">
                      <input
                        name="password"
                        type="password"
                        class="form-control"
                        placeholder="Give Password"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.password && touched.password && (
                        <span className="err">{errors.password}</span>
                      )}
                    </div>
                    <div class="col-12 form-group mb-2">
                    <textarea name="address" id="address"
                        type="text"
                        value={values.address}
                        onChange={handleChange}
                        onBlur={handleBlur} class="form-control" placeholder='Address' rows="3"/>
                      
                      {errors.address && touched.address && (
                        <span className="err">{errors.address}</span>
                      )}
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

export default LabAddStaff
