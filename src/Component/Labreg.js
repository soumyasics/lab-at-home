import React from 'react'

import { useEffect ,useState} from 'react'
import axiosInstance from './BaseUrl'
// import { useNavigate } from 'react-router-dom'
import Nav from './Nav'
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { LabSchema } from './Schema';


function Labreg() {

  const navigate = useNavigate();

  const onSubmit = (e) => {
    axiosInstance
      .post("/registerLab", values)
      .then((response) => {
        console.log(response);

        if (response.data.status === 200) {
          alert("Registration Success");
          navigate("/Lablogin");
        } else {
          alert("Registration Failed");
        }
      })
      .catch((err) => {
        console.log("error", err);
        alert("Registration Failed");
      });
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        name:'',
        regNo:'',
        city:'',
        district:'',
        email:'',
        contact:'',
        password:"",
        pincode:""
      },
      validationSchema: LabSchema,
      onSubmit,
    });
    

  return (
    <div>
         <Nav/>
         <div class="container">
        <div class="row" style={{ marginTop: "5rem", marginBottom: "10rem" }}>
          <div class="col-lg-3 col-md-2"></div>
          <div class="col-lg-6 col-md-8 login-box">
            <div class="col-lg-12 login-key">
              <i class="fa fa-key" aria-hidden="true"></i>
            </div>
            <div class="col-lg-12 login-title ">
              <h1>LAB SIGNIN</h1>
            </div>

            <div class="col-lg-12 login-form ">
              <div class="col-lg-12 login-form">
                <form className="mt-3" onSubmit={handleSubmit}>
                  <div class="row">
                    <div class=" col-6 form-group mb-2">
                      {/* <label class="form-control-label">USER EMAIL</label> */}
                      <input
                        name="name"
                        type="text"
                        class="form-control"
                        value={values.name}
                        placeholder="Lab Name"
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
                        type="email"
                        class="form-control"
                        placeholder="e-mail"
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
                        name="regNo"
                        type="text"
                        class="form-control"
                        placeholder="Registration Number"
                        value={values.regNo}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.regNo && touched.regNo && (
                        <span className="err">{errors.regNo}</span>
                      )}
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
                      {errors.gender && touched.gender && (
                        <span className="err">{errors.gender}</span>
                      )}
                    </div> */}
                    
                    <div class="col-6 form-group mb-2">
                      <input
                        name="city"
                        type="text"
                        class="form-control"
                        placeholder="City"
                        value={values.city}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.city && touched.city && (
                        <span className="err">{errors.city}</span>
                      )}
                    </div>
                    <div class="col-6 form-group mb-2">
                      <input
                        name="district"
                        type="text"
                        class="form-control"
                        placeholder="District"
                        value={values.district}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.district && touched.district && (
                        <span className="err">{errors.district}</span>
                      )}
                    </div>
                    <div class="col-6 form-group mb-2">
                      <input
                        name="pincode"
                        type="number"
                        class="form-control"
                        placeholder="Pincode"
                        value={values.pincode}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.pincode && touched.pincode && (
                        <span className="err">{errors.pincode}</span>
                      )}
                    </div>
                    <div class="col-6 form-group mb-2">
                      <input
                        name="contact"
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
                        name="password"
                        type="password"
                        class="form-control"
                        placeholder="Password"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.password && touched.password && (
                        <span className="err">{errors.password}</span>
                      )}
                    </div>
                  </div>

                  <div class="col-lg-12 loginbttm">
                    <div class="col-lg-6 login-btm login-text"></div>
                    <div class="col-lg-7 login-btm login-button mt-2">
                      <button type="submit" class="btn btn-success">
                      SIGNIN
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

    </div>
  )
}

export default Labreg