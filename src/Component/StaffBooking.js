import React, { useEffect, useState } from 'react'
import StaffNav from './StaffNav'
import axiosInstance from './BaseUrl';
import { Link } from 'react-router-dom';

function StaffBooking() {

    const [array,setArray]= useState([]);

    const id=localStorage.getItem('staffid')

    useEffect(()=>{
        axiosInstance.post(`/viewPastBookingforStaff/${id}`)
        .then((response)=>{
            console.log(response);
            if(response.data.msg=='No Data obtained'){
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
        console.log(array);

    })

    
  return (
    <div>
      <StaffNav/>
      <div class="container-xxl py-5">
            <div class="container">
                <h1 class="text-center text-success mb-5 wow fadeInUp" data-wow-delay="0.1s">Booking Details</h1>
                <div class="row g-4">
                    {
                        array.length?array.map((a)=>{
                            return(
                                <div class="col-lg-6 col-sm-6 wow fadeInUp"   data-wow-delay="0.1s">
                        <div class="d-flex cat-item rounded p-4 justify-content-around"  >
                            <div>
                            <h3 class="mb-3 text-success">{a.userid.name}</h3>
                            <p class="mb-3 ">{a.userid.email}</p>
                            <p class="mb-3 ">{a.userid.contact}</p>
                            <p class="mb-3 ">{a.userid.district}</p>
                            <p class="mb-3 ">{a.userid.city}</p>
                            <p class="mb-3 ">{a.userid.pincode}</p>
                            </div>
                            <div>
                            <h6 class="mb-3 text-success">{a.testid.name}</h6>
                            <p>{a.testid.condition?a.testid.condition:'no condition'}</p>
                            <p>{a.testid.duration}</p>
                            <p>{a.testid.comments?a.testid.comments:'no comments'}</p>
                            <p>{a.date}</p>
                            <p>{a.time}</p>
                            <Link class="btn btn-success py1 px3 mt-3 " to={`/staff_add_result/${a._id}/${a.testid._id}`} style={{marginRight:'3px'}} >Add result</Link>

                            </div>
                            
                           
                        {/* <Link class="btn btn-danger py1 px3 mt-3 " onClick={() => handleRemove(a._id)}   >Remove</Link> */}
                        </div>
                    </div> 
                            )
                        }): <h3 style={{padding:'30px',textAlign:'center'}} >No new bookings</h3>
                    }
                   
                   
                </div>
            </div>
        </div>
    </div>
  )
}

export default StaffBooking
