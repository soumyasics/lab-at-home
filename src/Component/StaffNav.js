import React from 'react'
import { Link } from 'react-router-dom'

function StaffNav() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
            <a href="Home" class="navbar-brand d-flex align-items-center text-center py-0 px-4 px-lg-5">
                <h1 class="m-0" style={{color:'#00b074'}}>LabNet</h1>
            </a>
            <button type="button" class="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <div class="navbar-nav ms-auto p-4 p-lg-0">
                    <Link to='/staff_home' class="nav-item nav-link ">Home</Link>
                    <div class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Bookings</a>
                        <div class="dropdown-menu rounded-0 m-0">
                            <Link to='/staff_booking' class="dropdown-item">Bookings</Link>
                            <Link to='/staff_upcominBookings' class="dropdown-item">Upcoming Bookings</Link>
                        </div>
                    </div>
                    {/* <Link to='/staff_booking' class="nav-item nav-link">Bookings</Link> */}
                    <Link to='/staff_viewResults' class="nav-item nav-link">Results</Link>
                    <Link to='/staff_profile' class="nav-item nav-link">Profile</Link>
                    <Link to='/' class="nav-item nav-link">Logout</Link>
                    
                    
                    
                       
                    

                    {/* <a href="contact.html" class="nav-item nav-link">Contact</a> */}
                </div>
                {/* <a href="" class="btn btn-danger  rounded-0 py-4 px-lg-5 d-none d-lg-block">POST A FEEDBACK<i class="fa fa-arrow-right ms-3"></i></a> */}
            </div>
        </nav>
    </div>
  )
}

export default StaffNav
