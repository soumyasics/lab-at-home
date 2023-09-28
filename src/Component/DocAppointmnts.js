import React, { useEffect, useState } from 'react'
import DocNav from './DocNav'
import axiosInstance from './BaseUrl';

function DocAppointmnts() {

    const [array,setArray]= useState([]);

    const id=localStorage.getItem('doctlogid')

    useEffect(()=>{
        axiosInstance.post(`/viewAppointmentByDrId/${id}`)
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
                                            {/* <span class="text-truncate me-3"><i class="far fa-clock text-primary me-2"></i>{a.condition?`Condition: ${a.condition}`:''}</span>
                                            <span class="text-truncate me-0"><i class="far fa-money-bill-alt text-primary me-2"></i>{a.condition?`Comments: ${a.comments}`:''}</span> */}
                                        </div>
                                    </div>
                                    <div class="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                        <div class="d-flex mb-3">
                                            {/* <Link class="btn btn-success" to={`/user_bookTests/${a._id}`}>Book Now</Link> */}
                                        </div>
                                        {/* <small class="text-truncate"><i class="far fa-calendar-alt text-primary me-2"></i>Date Line: 01 Jan, 2045</small> */}
                                    </div>
                                </div>
                                      
                                
                            </div>
                            
                        </div>
                    </div>

)
}) : <h1 style={{padding:'30px',textAlign:'center'}}>No Appointments found</h1>
}
                </div>
            </div>
        </div>
    </div>
  )
}

export default DocAppointmnts
