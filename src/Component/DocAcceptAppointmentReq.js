import React, { useEffect, useState } from 'react'
import DocNav from './DocNav'
import axiosInstance from './BaseUrl';
import { Link } from 'react-router-dom';

function DocAcceptAppointmentReq() {
    const [array,setArray]= useState([]);

    const id=localStorage.getItem('doctlogid')

    useEffect(()=>{
        axiosInstance.post(`/viewAppointmentReqbyDrId/${id}`)
        .then((response)=>{
            console.log(response);
            if(response.data.msg=='No Data obtained '){
                setArray([])

            }else if(response.data.status==200){
                setArray(response.data.data)

            }
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])

    useEffect(()=>{
        console.log(id);

    })

    const handleRemove = (id) => {
        axiosInstance.post(`/approveAppointments/${id}`)
          .then((res) => {
            console.log(res);
            if(res.data.status==200){
                alert('Approved')
                setArray(prevArray => prevArray.filter(item => item._id !== id));
            }
          })
          .catch((err) => {
            console.log(err);
          });
      };

  return (
    <div>
      <DocNav/>
      <div class="container-xxl py-5">
            <div class="container">
                <h1 class="text-center text-success mb-5 wow fadeInUp" data-wow-delay="0.1s">Appointments</h1>
                <div class="tab-class text-center wow fadeInUp" data-wow-delay="0.3s">
                {
                                    array.length?array.map((a)=>{
                                        return(
                    <div class="tab-content">
                        <div id="tab-1" class="tab-pane fade show p-0 active">
                            <div class="job-item p-4 mb-4">
                               
                                            <div class="row g-4">
                                    <div class="col-sm-12 col-md-8 d-flex align-items-center">
                                        <div class="text-start ps-4">
                                            <h5 class="mb-3"><small>Patient Name: </small>{a.userid.name}</h5>
                                            <span class="text-truncate me-3"><i class="fa fa-map-marker-alt text-primary "></i>{a.userid.email}</span>
                                            <span class="text-truncate me-3"><i class="fa fa-map-marker-alt text-primary "></i>{a.userid.contact}</span>
                                            <span class="text-truncate me-3"><i class="fa fa-map-marker-alt text-primary "></i>{a.date}</span>
                                            <span class="text-truncate me-3"><i class="fa fa-map-marker-alt text-primary "></i>{a.time}</span>
                                            <p class="text-truncate me-0"><i class="far fa-money-bill-alt text-primary "></i>{a.comments?`Comments: ${a.comments}`:''}</p>
                                        </div>
                                    </div>
                                    <div class="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                        <div class="d-flex mb-3">
                                            <button class="btn btn-success" onClick={() => handleRemove(a._id)}>Approve Now</button>
                                        </div>
                                        {/* <small class="text-truncate"><i class="far fa-calendar-alt text-primary me-2"></i>Date Line: 01 Jan, 2045</small> */}
                                    </div>
                                </div>
                                      
                                
                            </div>
                            
                        </div>
                    </div>

)
}) : <h1 style={{padding:'30px',textAlign:'center'}}>No Appointments Request found</h1>
}
                </div>
            </div>
        </div>
    </div>
  )
}

export default DocAcceptAppointmentReq
