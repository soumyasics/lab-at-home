import React, { useState } from 'react'
import LabNav from './LabTecProf/LabNav'
import abimg from './img/gallery-06.jpg'
import abimg1 from './img/gallery-08.jpg'
import abimg2 from './img/img-3.jpg'
import abimg3 from './img/gallery-05.jpg'
import { Link } from 'react-router-dom'
import axiosInstance from './BaseUrl'
import { useFormik } from 'formik'
import { addTestSchema } from './Schema'

function LabAddTest() {

    // const navigate = useNavigate();
    const id=localStorage.getItem('lablogid')

    const[value,setValue]=useState({
      name:'',
      price:'',
      labId:id,
      condition:'',
      duration:'',
      comments:'',
      details:[]
})


const addDescription = () => {
  const description = document.getElementById('description').value;
  const minrange = document.getElementById('minrange').value;
  const maxrange = document.getElementById('maxrange').value;

  // Check if all fields have values before adding the new object
  if (description && minrange && maxrange) {
    const newDetail = {
      description: description,
      minrange: minrange,
      maxrange: maxrange,
    };

    setValue((prevState) => ({
      ...prevState,
      details: [...prevState.details, newDetail],
    }));
  }
};



    const onSubmit = (e) => {
        e.preventDefault();
console.log(value);
      axiosInstance
        .post("/addTest", value)
        .then((response) => {
          console.log(response);
          if(response.data.status==200){
            alert('Test added')
          }else{
            alert('Failed')
          }
  
        })
        .catch((err) => {
          console.log("error", err);
          alert("Failed");
        });
    };

  
  
    

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
                    <h1 class="mb-4">Add test</h1>

                    <form onSubmit={onSubmit} >
                  <div class="row">
                    <div class=" col-6 form-group mb-2">
                      <input
                        name="name"
                        id="name"
                        type="text"
                        class="form-control"
                        placeholder="Test Name"
                        onChange={(e)=>{setValue({...value,name:e.target.value})}}

                      />
                      
                    </div>

                    <div class="col-6 form-group mb-2">
                      <input
                        name="condition"
                        id="condition"
                        type="text"
                        class="form-control"
                        placeholder="Condition"
                        onChange={(e)=>{setValue({...value,condition:e.target.value})}}
                      />
                     
                    </div>
                    <div class="col-6 form-group mb-2">
                      <input
                        name="duration"
                        id="duration"
                        type="text"
                        class="form-control"
                        placeholder="Duration"
                        onChange={(e)=>{setValue({...value,duration:e.target.value})}}

                      />
                     
                    </div>
                    <div class="col-6 form-group mb-4">
                      <input
                        name="price"
                        id="price"
                        type="number"
                        class="form-control"
                        placeholder="Price"
                        onChange={(e)=>{setValue({...value,price:e.target.value})}}

                      />                   
                    </div>

                    <div class="col-12 form-group mb-2">
                      <input
                        name="description"
                        id="description"
                        type="text"
                        class="form-control"
                        placeholder="Description"
                        // onChange={(e)=>{setValue({...value,price:e.target.value})}}
                      />                   
                    </div>
                    
                    <div class="col-6 form-group mb-2">
                      <input
                        name="minrange"
                        id="minrange"
                        type="number"
                        class="form-control"
                        placeholder="Min Range"
                        // onChange={(e)=>{setValue({...value,price:e.target.value})}}

                      />                   
                    </div>
                    <div class="col-6 form-group mb-2">
                      <input
                        name="maxrange"
                        id="maxrange"
                        type="number"
                        class="form-control"
                        placeholder="Max Range"
                        // onChange={(e)=>{setValue({...value,price:e.target.value})}}

                      />                   
                    </div>
                    <div class="col-lg-12 login-btm login-button mt-2" >
                      <button type="button" class="btn btn-success" style={{float:'right',marginBottom:'5px'}} onClick={addDescription}>
                        Add description
                      </button>
                      <div class="reg__link"></div>
                    </div>

                    <div class="col-12 form-group mb-2">
                    <textarea name="comments" id="comments"
                        type="text"
                        class="form-control" placeholder='Comments' rows="3" onChange={(e)=>{setValue({...value,comments:e.target.value})}}
                        />
                      
                    </div>
                    
                    
                   
                    
                  </div>

                  <div class="col-lg-12 loginbttm">
                    <div class="col-lg-6 login-btm login-text"></div>
                    <div class="col-lg-7 login-btm login-button mt-2">
                      <button type="submit" class="btn btn-success" >
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

export default LabAddTest
