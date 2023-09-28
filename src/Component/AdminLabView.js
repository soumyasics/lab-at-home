import React, { useEffect, useState } from 'react'
import AdminNav from './AdminNav'
import axiosInstance from './BaseUrl';
import { Link, useNavigate } from 'react-router-dom';

function AdminLabView() {

    const [array,setArray]= useState([]);
    const navigate=useNavigate();

    useEffect(()=>{
        axiosInstance.post("/viewLabs")
        .then((response)=>{
            if(response.data.msg=='No Data obtained '){
                setArray([])

            }else if(response.data.status==200){
                setArray(response.data.data)

            }
            console.log(response);
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])

    useEffect(()=>{
        console.log(array);

    })

    const handleRemove = (id) => {
        axiosInstance.post(`/deleteLabById/${id}`)
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
      <AdminNav/>
      <div class="container-fluid pt-4 px-4 p-5" >
                <div class="bg-light text-center rounded p-5">
                    <div class="d-flex align-items-center justify-content-between mb-5">
                        <h6 class="mb-0">Lab Details</h6>
                        {/* <a href="">Show All</a> */}
                    </div>
                    <div class="table-responsive">
                        <table class="table text-start align-middle table-bordered table-hover mb-0">
                            <thead>
                                <tr class="text-dark">
                                    <th scope="col">Name</th>
                                    <th scope="col">E-mail</th>
                                    <th scope="col">Registration</th>
                                    <th scope="col">City</th>
                                    <th scope="col">District</th>
                                    <th scope="col">Pincode</th>
                                    <th scope="col">Contact</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    array.length?array.map((a)=>{
                                        return(
                                            <tr>
                                            <td>{a.name}</td>
                                            <td>{a.email}</td>
                                            <td>{a.regNo}</td>
                                            <td>{a.city}</td>
                                            <td>{a.district}</td>
                                            <td>{a.pincode}</td>
                                            <td>{a.contact}</td>
                                            
                                            <td><Link to={`/admin_testView/${a._id}`} ><button style={{marginRight:'3px'}} class="btn btn-sm btn-primary"  >View</button></Link><button class="btn btn-sm btn-danger" onClick={() => handleRemove(a._id)} >Remove</button></td>
                                        </tr>

                                        )
                                       

                                    }):<td>No Lab found</td>
                                }
                                
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default AdminLabView
