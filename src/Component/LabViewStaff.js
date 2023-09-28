import React, { useEffect, useState } from 'react'
import axiosInstance from './BaseUrl';
import { Link } from 'react-router-dom';
import LabNav from './LabTecProf/LabNav';

function LabViewStaff() {

    const [array,setArray]= useState([]);

    const id=localStorage.getItem('lablogid')

    useEffect(()=>{
        axiosInstance.post(`/viewAllStaffByLab/${id}`)
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

    const handleRemove = (id) => {
        axiosInstance.post(`/deleteStaffById/${id}`)
          .then((res) => {
            console.log(res);
            if(res.data.status==200){
                alert('Removed')
                setArray(prevArray => prevArray.filter(item => item._id !== id));
            }
          })
          .catch((err) => {
            console.log(err);
          });
      };

  return (
    <div>
        <LabNav/>
      <div class="container-xxl py-5">
            <div class="container">
                <h1 class="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">Staffs</h1>
                <div class="row g-4">
                    {
                        array.length?array.map((a)=>{
                            return(
                                <div class="col-lg-4 col-sm-6 wow fadeInUp"   data-wow-delay="0.1s">
                        <div class="cat-item rounded p-4"  >
                            <i class="fa fa-3x fa-mail-bulk text-primary mb-4"></i>
                            <h3 class="mb-3 text-success">{a.name}</h3>
                            <h6 class="mb-3 ">{a.email}</h6>
                            <h6 class="mb-3 ">{a.qualification}</h6>
                            <h6 class="mb-3 ">{a.price}</h6>
                            <h6 class="mb-3 ">{a.experience}</h6>
                            <h6 class="mb-3 ">{a.aadhar}</h6>
                            <h6 class="mb-3 ">{a.contact}</h6>
                            <h6 class="mb-3 ">{a.address}</h6>
                        <Link class="btn btn-success py1 px3 mt-3 " to={`/lab_edit_staff/${a._id}`} style={{marginRight:'3px'}} >Edit</Link>
                        <Link class="btn btn-danger py1 px3 mt-3 " onClick={() => handleRemove(a._id)}   >Remove</Link>
                        </div>
                    </div> 
                            )
                        }): <h3 style={{padding:'30px'}} >No staffs Added yet !!</h3>
                    }
                   
                   
                </div>
            </div>
        </div>
    </div>
  )
}

export default LabViewStaff
