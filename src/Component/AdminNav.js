import React from 'react'
import { Link } from 'react-router-dom'

function AdminNav() {
  return (
    <div>
      <nav class="navbar navbar-expand bg-dark navbar-dark sticky-top px-4 py-0">
                <a href="index.html" class="navbar-brand d-flex d-lg-none me-4">
                    <h2 class="text-primary mb-0"><i class="fa fa-hashtag"></i></h2>
                </a>
                <a href="#" class="sidebar-toggler flex-shrink-0">
                    <i class="fa fa-bars"></i>
                </a>
                <form class="d-none d-md-flex ms-4">
                    <input class="form-control border-0" type="search" placeholder="Search"/>
                </form>
                <div class="navbar-nav align-items-center ms-auto">
                <div class="nav-item dropdown">
                        <Link to='/admin_home' class="nav-link ">
                            {/* <i class="fa fa-envelope me-lg-2"></i> */}
                            <span class="d-none d-lg-inline-flex">Home</span>
                        </Link>
                        
                    </div>
                <div class="nav-item dropdown">
                        <Link to='/admin_req' class="nav-link ">
                            {/* <i class="fa fa-envelope me-lg-2"></i> */}
                            <span class="d-none d-lg-inline-flex">Requests</span>
                        </Link>
                        
                    </div>
                    <div class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                            <i class="fa fa-envelope me-lg-2"></i>
                            <span class="d-none d-lg-inline-flex">View</span>
                        </a>
                        <div class="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0">
                            <Link to='/admin_docView' class="dropdown-item">
                                <div class="d-flex align-items-center">
                                    <div class="ms-2">
                                        <h6 class="fw-normal mb-0">Doctor Details</h6>
                                    </div>
                                </div>
                            </Link>
                            <hr class="dropdown-divider"/>
                            <Link to="/admin_labView" class="dropdown-item">
                                <div class="d-flex align-items-center">
                                    <div class="ms-2">
                                        <h6 class="fw-normal mb-0">Lab Details</h6>
                                    </div>
                                </div>
                            </Link>
                            <hr class="dropdown-divider"/>
                            {/* <Link to="/admin_bookingDetails" class="dropdown-item">
                                <div class="d-flex align-items-center">
                                    <div class="ms-2">
                                        <h6 class="fw-normal mb-0">Booking Details</h6>
                                    </div>
                                </div>
                            </Link> */}
                            <hr class="dropdown-divider"/>
                            {/* <a href="#" class="dropdown-item">
                                <div class="d-flex align-items-center">
                                    <div class="ms-2">
                                        <h6 class="fw-normal mb-0">Complaints</h6>
                                    </div>
                                </div>
                            </a>
                            <hr class="dropdown-divider"/> */}
                            {/* <a href="#" class="dropdown-item text-center">See all message</a> */}
                        </div>
                    </div>
                    {/* <div class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                            <i class="fa fa-envelope me-lg-2"></i>
                            <span class="d-none d-lg-inline-flex">Designation</span>
                        </a>
                        <div class="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0">
                            <Link to='/admin-view-designation' class="dropdown-item">
                                <div class="d-flex align-items-center">
                                    <div class="ms-2">
                                        <h6 class="fw-normal mb-0">View Designation</h6>
                                    </div>
                                </div>
                            </Link>
                            <hr class="dropdown-divider"/>
                            <Link to='/admin-add-designation' class="dropdown-item">
                                <div class="d-flex align-items-center">
                                    <div class="ms-2">
                                        <h6 class="fw-normal mb-0">Add Designation</h6>
                                    </div>
                                </div>
                            </Link>
                            <hr class="dropdown-divider"/>
                            
                        </div>
                    </div>
                    <div class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                            <i class="fa fa-bell me-lg-2"></i>
                            <span class="d-none d-lg-inline-flex">Edit</span>
                        </a>
                        <div class="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0">
                            <a href="#" class="dropdown-item">
                                <h6 class="fw-normal mb-0">HR team</h6>
                            </a>
                            <hr class="dropdown-divider"/>
                            
                            <a href="#" class="dropdown-item">
                                <h6 class="fw-normal mb-0">Vaccancies</h6>
                            </a>
                            <hr class="dropdown-divider"/>
                        </div>
                    </div> */}
                    <div class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                            <span class="d-none d-lg-inline-flex">Admin</span>
                        </a>
                        <div class="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0">
                           
                            <Link to='/' class="dropdown-item">Log Out</Link>
                        </div>
                    </div>
                </div>
            </nav>
    </div>
  )
}

export default AdminNav
