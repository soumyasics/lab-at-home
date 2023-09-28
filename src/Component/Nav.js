import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
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
                    <Link to='/Home' class="nav-item nav-link ">Home</Link>
                    <Link to='/about' class="nav-item nav-link">About</Link>
                    {/* <div class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Appointment</a>
                        <div class="dropdown-menu rounded-0 m-0">
                            <a href="job-list.html" class="dropdown-item">Job List</a>
                            <Link to='/appointment' class="dropdown-item">Register</Link>
                        </div>
                    </div> */}
                    <div class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Login</a>
                        <div class="dropdown-menu rounded-0 m-0">
                            <Link to='/Doctorlogin' class="dropdown-item">Doctors</Link>
                            <Link to="/Lablogin" class="dropdown-item">Lab</Link>
                            <Link to='/Customerlogin' class="dropdown-item">Customer</Link>
                            <Link to='/Staff_login' class="dropdown-item">Staff</Link>
                            {/* <a href="404.html" class="dropdown-item">404</a> */}
                        </div> 
                       
                    </div>
                    
                       
                    

                    {/* <a href="contact.html" class="nav-item nav-link">Contact</a> */}
                </div>
                {/* <a href="" class="btn btn-danger  rounded-0 py-4 px-lg-5 d-none d-lg-block">POST A FEEDBACK<i class="fa fa-arrow-right ms-3"></i></a> */}
            </div>
        </nav>
    </div>
  )
}

export default Nav