import React from 'react'
import { Link } from 'react-router-dom'
function LabNav() {
  return (
    <div>
       
    <nav class="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
       <a  class="navbar-brand d-flex align-items-center text-center py-0 px-4 px-lg-5">
           <h1 class="m-0 text-success">LabNet</h1>
       </a>
       <button type="button" class="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
           <span class="navbar-toggler-icon"></span>
       </button>
       <div class="collapse navbar-collapse" id="navbarCollapse">
           <div class="navbar-nav ms-auto p-4 p-lg-0">
               <Link to='/LabHome' class="nav-item nav-link ">Home</Link>
               <div class="nav-item dropdown">
                   <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Tests</a>
                   <div class="dropdown-menu rounded-0 m-0">
                       <Link to='/lab_view_test' class="dropdown-item">View Tests</Link>
                       <Link to='/lab_add_test' class="dropdown-item">Add Tests</Link>
                   </div>
               </div>
               <div class="nav-item dropdown">
                   <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Staffs</a>
                   <div class="dropdown-menu rounded-0 m-0">
                       <Link to='/lab_view_staff' class="dropdown-item">View Staffs</Link>
                       <Link to='/lab_add_staff' class="dropdown-item">Add Staffs</Link>
                   </div>
               </div>
               <Link to='/LabResult' class="nav-item nav-link ">Results</Link>
               <Link to='/LabProfView' class="nav-item nav-link ">Profile</Link>
               <Link to='/' class="nav-item nav-link ">Logout</Link>
               
               {/* <div class="nav-item dropdown">
                   <Link to='/LabProfView' class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Profile</Link>
                   <div class="dropdown-menu rounded-0 m-0">
                       <Link to='/LabProfView' class="dropdown-item">Lab Tech Profile</Link>
                       <Link to="/Lablogin" class="dropdown-item">Lab</Link>
                       <Link to='/Customerlogin' class="dropdown-item">Customer</Link>
                       <a href="404.html" class="dropdown-item">404</a>
                   </div> 


                  
               </div> */}
              
               
                  
              
{/* 
               <a href="contact.html" class="nav-item nav-link">Contact</a> */}
           </div>
         
           {/* <a href="" class="btn btn-danger  rounded-0 py-4 px-lg-5 d-none d-lg-block">POST A FEEDBACK<i class="fa fa-arrow-right ms-3"></i></a> */}
          
       </div>
      
   </nav>
</div>
  )
}

export default LabNav