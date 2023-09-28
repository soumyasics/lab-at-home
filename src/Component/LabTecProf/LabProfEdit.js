import React from 'react'
import axiosInstance from '../BaseUrl';
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LabNav from './LabNav';
function LabProfEdit() {
    const [value,setValue] = useState({});
    const navigate=useNavigate();
  
  
    const id=localStorage.getItem("lablogid")
  
  
    useEffect(() => {
  
  
      axiosInstance.post(`/viewLabById/${id}`)
      .then((res)=>{
      setValue(res.data.data)
      
    })
    }, []);
  
    const updatefcn=(e)=>{
      e.preventDefault();
  
      axiosInstance.post(`/editLabById/${id}`,value)
      .then((response)=>{
        console.log(response);
        if (response.data.status==200) {
          alert('Profile Updated')
          navigate('/LabProfView')
        }else{
          alert('Updation Failed')
        }
  
      })
      .catch((err)=>{
        console.log(err);
      })
    }
  
    const changefn = (e)=>{
  setValue({...value, [e.target.name]:e.target.value})
    }

    useEffect(()=>{
        console.log(value);

    })
  return (
    <div>
      <LabNav/>
          <div class="container rounded bg-white mt-5 mb-5">
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
                  <label class="labels">Email</label>
                  <input
                    type="email"
                    class="form-control"  
                    value={value.email}
                    name="email"
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
                <div class="col-md-6">
                  <label class="labels">City</label>
                  <input
                    type="text"
                    name="city"
                    class="form-control"
                    value={value.city}
                  
                    onChange={changefn}
                  />
                </div>
                <div class="col-md-6">
                  <label class="labels">District</label>
                  <input
                    type="text"
                    class="form-control"   
                    value={value.district}
                    name="district"
                    onChange={changefn}
                  />
                </div>
                <div class="col-md-6">
                  <label class="labels">PinCode</label>
                  <input
                    type="number"
                    pattern='[0-9]*'
                    class="form-control"
                    name="pincode"
                    value={value.pincode}
                    onChange={changefn}

                  />
                </div>
                <div class="col-md-12">
                  <label class="labels">regNo</label>
                  <input
                    type="number"
                    class="form-control"
                   
                    value={value.regNo}
                    onChange={changefn}
                    name="regNo"
                  />
                </div>
              </div>
              <div class="row mt-3">
                
                
                
                
                
              
              <button type='submit' class='btn btn-primary h-23 w-100 py-2'>Update</button>
                
              </div>
             
              </form>
              
            </div>
          </div>
          
        </div>
      </div>

    </div>
  )
}

export default LabProfEdit