import React, { useEffect, useState } from 'react'
import CustNav from './CustomerProf/CustNav'
import axiosInstance from './BaseUrl';

function UserBookings() {

    const [array,setArray]= useState([]);
    const id=localStorage.getItem('custlogid')

    useEffect(()=>{
        axiosInstance.post(`/viewBookingByUserId/${id}`)
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

   

    const handleRemove = (id) => {
        axiosInstance.post(`/cancelBooking/${id}`)
          .then((res) => {
            console.log(res);
            if(res.data.status==200&&res.data.msg=="Can't be deleted as Date Over"){
                alert(res.data.msg)
                // setArray(prevArray => prevArray.filter(item => item._id !== id));
            }else if(res.data.status==200){
                alert(res.data.msg)
                setArray(prevArray => prevArray.filter(item => item._id !== id));

            }
          })
          .catch((err) => {
            console.log(err);
          });
      };

  return (
    <div>
      <CustNav/>
      <div class="container-xxl py-5"  >
            <div class="container" style={{minHeight:'400px'}}>
                <h1 class="text-center text-success mb-5 wow fadeInUp" data-wow-delay="0.1s">View Bookings</h1>
                <div class="row g-4">
                    {
                        array.length?array.map((a,index)=>{
                            return(
                                <div className="col-6" key={index}>
                        <div class="row gy-4">
                            <div class="col-md-12 wow fadeIn" data-wow-delay="0.1s">
                                <div class=" align-items-center rounded p-4" style={{backgroundColor:'#effdf5'}}>
                                    
                                    <div>
                                      
                                        <h3>{a.labId.name}</h3>
                                    </div>
                                    <div>
                                        <h5 >{a.testid.name}</h5>
                                    </div>
                                    <div class="d-flex align-items-center rounded justify-content-between">
                                            <p>{a.date}</p>
                                            <p>{a.time}</p>
                                            <p>₹{a.testid.price}</p>
                                            <button class='btn btn-danger' onClick={() => handleRemove(a._id)} >Cancel</button>
                                    </div>
                                   
                                </div>
                            </div>
                            
                        </div>
                    </div>
                            )
                        }):<h2 style={{padding:'30px',textAlign:'center'}} >No bookings</h2>
                    }
                    
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default UserBookings
