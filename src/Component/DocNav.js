import React from "react";
import { Link } from "react-router-dom";
import Carousel from "./Carousel";

function DocNav() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
        <a
          href="Home"
          class="navbar-brand d-flex align-items-center text-center py-0 px-4 px-lg-5"
        >
          <h1 class="m-0 text-success">LabNet</h1>
        </a>
        <button
          type="button"
          class="navbar-toggler me-4"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <div class="navbar-nav ms-auto p-4 p-lg-0">
            <Link to="/DocHome" class="nav-item nav-link">
              Home
            </Link>
            <div class="nav-item dropdown">
              <a
                href="#"
                class="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Appointment
              </a>
              <div class="dropdown-menu rounded-0 m-0">
                <Link to="/doc_appointments" class="dropdown-item">
                  Appointments
                </Link>{" "}
                <Link to="/doc_appointments_req" class="dropdown-item">
                  Requests
                </Link>
              </div>
            </div>
            <Link to="/DocProfView" class="nav-item nav-link">
              Profile
            </Link>
            <Link to="/" class="nav-item nav-link">
              Logout
            </Link>
            {/* <Link to='/About' class="nav-item nav-link">About</Link> */}
            
            {/* <div class="nav-item dropdown">
              <a
                href="#"
                class="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Doctor
              </a>
              <div class="dropdown-menu rounded-0 m-0">
                <Link to="/DocProfView" class="dropdown-item">
                  Doctors Profile
                </Link>
                <Link to="/Lablogin" class="dropdown-item">
                  Lab
                </Link>
                <Link to="/Customerlogin" class="dropdown-item">
                  Customer
                </Link>
                <a href="404.html" class="dropdown-item">
                  404
                </a>
              </div>
            </div> */}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default DocNav;
