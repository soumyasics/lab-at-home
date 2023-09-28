import React, { useEffect, useState } from 'react'
import CustNav from './CustomerProf/CustNav'
import axiosInstance from './BaseUrl';
import { Link } from 'react-router-dom';

function UserLabView() {

    const [array,setArray]= useState([]);


    useEffect(()=>{
        axiosInstance.post('/viewLabs')
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
        console.log(array);

    })

  return (
    <div>
      <CustNav/>
      <div class="container-xxl py-5">
            <div class="container">
                <h1 class="text-center mb-5 wow fadeInUp text-success" data-wow-delay="0.1s">Our Labs</h1>
                <div class="row g-4">
                    {
                        array.length?array.map((a)=>{
                            return(
                                <div class="col-lg-4 col-sm-6 wow fadeInUp"   data-wow-delay="0.1s">
                        <div class="cat-item rounded p-4"  >
                            <i class="fa fa-3x fa-mail-bulk text-primary mb-4"></i>
                            <h3 class="mb-3 text-success">{a.name}</h3>
                            <h6 class="mb-3 ">{a.email}</h6>
                            <h6 class="mb-3 ">{a.city}</h6>
                            <h6 class="mb-3 ">{a.district}</h6>
                            <h6 class="mb-3 ">{a.contact}</h6>
                            <h6 class="mb-3 ">{a.pincode}</h6>
                        <Link class="btn btn-success py1 px3 mt-3 " to={`/user_labTests/${a._id}`} style={{marginRight:'3px'}} >View tests</Link>
                        {/* <Link class="btn btn-danger py1 px3 mt-3 " onClick={() => handleRemove(a._id)}   >Remove</Link> */}
                        </div>
                    </div> 
                            )
                        }): <h3 style={{padding:'30px'}} >No Lab found</h3>
                    }
                   
                   
                </div>
            </div>
        </div>
    </div>
  )
}

export default UserLabView
