import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import axiosInstance from "./BaseUrl";
import Nav from "./Nav";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { DocRegSchema } from "./Schema";

function DoctorReg() {
  const navigate = useNavigate();

  const onSubmit = (e) => {
    axiosInstance
      .post("/registerDoctor", values)
      .then((response) => {
        console.log(response);

        if (response.data.status === 200) {
          alert("Registration Success");
          navigate("/Doctorlogin");
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
        name: "",
        gender: "",
        city: "",
        specialization: "",
        email: "",
        password: "",
        experience: "",
        age: "",
        contact: "",
      },
      validationSchema: DocRegSchema,
      onSubmit,
    });

  return (
    <div>
      <Nav />

      <div class="container">
        <div class="row" style={{ marginTop: "5rem", marginBottom: "10rem" }}>
          <div class="col-lg-3 col-md-2"></div>
          <div class="col-lg-6 col-md-8 login-box">
            <div class="col-lg-12 login-key">
              <i class="fa fa-key" aria-hidden="true"></i>
            </div>
            <div class="col-lg-12 login-title ">
              <h1>DOCTORS SIGNIN</h1>
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
                        placeholder="Name"
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
                        name="specialization"
                        type="text"
                        class="form-control"
                        placeholder="Specialization"
                        value={values.specialization}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.specialization && touched.specialization && (
                        <span className="err">{errors.specialization}</span>
                      )}
                    </div>
                    <div class="col-6 form-group mb-2">
                      <input
                        name="experience"
                        type="number"
                        class="form-control"
                        placeholder="experience"
                        value={values.experience}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.experience && touched.experience && (
                        <span className="err">{errors.experience}</span>
                      )}
                    </div>
                    <div class="col-6 form-group d-flex justify-content-around mb-2">
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
                    </div>
                    <div class="col-6 form-group mb-2">
                      <input
                        name="age"
                        type="number"
                        class="form-control"
                        placeholder="Age"
                        value={values.age}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      {errors.age && touched.age && (
                        <span className="err">{errors.age}</span>
                      )}
                    </div>
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
                    <div class="col-12 form-group mb-2">
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
  );
}

export default DoctorReg;
