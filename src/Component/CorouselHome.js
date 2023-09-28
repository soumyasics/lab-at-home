import React from 'react'
import img from './img/lab.jpg'

function CorouselHome() {
  return (
    <div>
       <div class="container-fluid p-0">
    <div class="owl-carousel header-carousel position-relative">
        <div class="owl-carousel-item position-relative">
            <img class="img-fluid" src={img} alt=""/>
            <div class="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{background: "rgba(43, 57, 64, .5);"}}>
                <div class="container">
                    <div class="row justify-content-start">
                        <div class="col-10 col-lg-8">
                            <h1 class="display-3 text-black animated slideInDown mb-4">Welcome To <span class='text-success'><b>LabNet</b></span></h1>
                            <p class="fs-5 fw-medium text-black mb-4 pb-2">Welcome to our platform where users can conveniently request tests, book appointments with doctors, and view their results. Admins can oversee all details, approve labs and doctors, while labs and doctors can manage their profiles, staff, and provide efficient services.</p>
                            {/* <a href="" class="btn btn-danger py-md-3 px-md-5 me-3 animated slideInLeft">Search a Doctors</a> */}
                            {/* <a href="" class="btn btn-secondary py-md-3 px-md-5 animated slideInRight">Find A Talent</a> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <div class="owl-carousel-item position-relative">
             <img class="img-fluid" src={img1} alt=""/> 
            <div class="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{background: "rgba(43, 57, 64, .5);"}}>
                <div class="container">
                    <div class="row justify-content-start">
                        <div class="col-10 col-lg-8">
                            <h1 class="display-3 text-white animated slideInDown mb-4">Find The Best Startup Job That Fit You</h1>
                            <p class="fs-5 fw-medium text-white mb-4 pb-2">Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.</p>
                            <a href="" class="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Search A Job</a>
                            <a href="" class="btn btn-secondary py-md-3 px-md-5 animated slideInRight">Find A Talent</a>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}
    </div>
</div>
    </div>
  )
}

export default CorouselHome
