import React from 'react'
import abimg from './img/gallery-06.jpg'
import abimg1 from './img/gallery-08.jpg'
import abimg2 from './img/img-3.jpg'
import abimg3 from './img/gallery-05.jpg'
import { Nav } from 'react-bootstrap'

function Aboutus() {
  return (
    <div>
        <div class="container-xxl py-5">
            <div class="container">
                <div class="row g-5 align-items-center">
                    <div class="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                        <div class="row g-0 about-bg rounded overflow-hidden">
                            <div class="col-6 text-start">
                                <img class="img-fluid w-100" src={abimg}/>
                            </div>
                            <div class="col-6 text-start">
                                <img class="img-fluid" src={abimg1} style={{width: "85%",marginTop: "15%"}}/>
                            </div>
                            <div class="col-6 text-end">
                                <img class="img-fluid" src={abimg2} style={{width:" 85%;"}}/>
                            </div>
                            <div class="col-6 text-end">
                                <img class="img-fluid w-100" src={abimg3}/>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                        <h1 class="mb-4">Reliable and Hight-Quality Laboratary</h1>
                        <p class="mb-4">Our mission is to connect users with trusted labs and healthcare professionals, providing them with seamless access to quality tests, appointments, and reliable results, all in one place.We are committed to ensuring a user-friendly experience, prioritizing privacy and security of personal information. With a strong emphasis on efficiency and accuracy, we strive to enhance the overall healthcare journey for our users and contribute to their well-being.</p>
                        <p><i class="fa fa-check text-primary me-3"></i>Convenient online access for scheduling appointments and accessing test results.</p>
                        <p><i class="fa fa-check text-primary me-3"></i>Aliqu diam amet diam et eos</p>
                        <p><i class="fa fa-check text-primary me-3"></i>Personalized care through skilled doctors and healthcare professionals.</p>
                        {/* <a class="btn btn-success py-3 px-5 mt-3" href="">Read More</a> */}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Aboutus