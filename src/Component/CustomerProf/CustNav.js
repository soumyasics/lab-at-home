import React from 'react'
import { Link } from 'react-router-dom'

function CustNav() {
  return (
    <div>
          <nav class="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
       <a href="Home" class="navbar-brand d-flex align-items-center text-center py-0 px-4 px-lg-5">
           <h1 class="m-0 text-success">LabNet</h1>
       </a>
       <button type="button" class="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
           <span class="navbar-toggler-icon"></span>
       </button>
       <div class="collapse navbar-collapse" id="navbarCollapse">
           <div class="navbar-nav ms-auto p-4 p-lg-0">
               <Link to='/CustHome' class="nav-item nav-link ">Home</Link>
               <Link to='/view_labs' class="nav-item nav-link ">Labs</Link>
               <Link to='/view_doctors' class="nav-item nav-link ">Doctors</Link>
               {/* <Link to='/CustProfView' class="nav-item nav-link ">Profile</Link> */}
               {/* <Link to='/About' class="nav-item nav-link">About</Link> */}
               <div class="nav-item dropdown">
                   <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Profile</a>
                   <div class="dropdown-menu rounded-0 m-0">
                       <Link to='/CustProfView' class="dropdown-item">My profile</Link>
                       <Link to='/custBookings' class="dropdown-item">View Bookings</Link>
                       <Link to='/custAppointments' class="dropdown-item">View Appointments</Link>
                       <Link to='/custResults' class="dropdown-item">View Results</Link>
                   </div>
               </div>
               <Link to='/' class="nav-item nav-link ">Logout</Link>   

           </div>
         
           {/* <a href="" class="btn btn-danger  rounded-0 py-4 px-lg-5 d-none d-lg-block">POST A FEEDBACK<i class="fa fa-arrow-right ms-3"></i></a> */}
          
       </div>
      
   </nav>

    </div>
  )
}

export default CustNav