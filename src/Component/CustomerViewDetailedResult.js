import React, { useEffect, useState } from "react";
import CustNav from "./CustomerProf/CustNav";
import { useParams } from "react-router-dom";
import axiosInstance from "./BaseUrl";

function CustomerViewDetailedResult() {
  const { id } = useParams();
  const [data,setData]=useState({testid:{details:[]},resultdata:[]})

  useEffect(() => {
    axiosInstance
      .post(`/viewResultId/${id}`)
      .then((response) => {
        console.log(response);
       setData(response.data.data)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <CustNav />
      <div class="container-xxl py-5">
        <div class="container">
          <h1
            class="text-center text-success mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
          >
            Details
          </h1>
          <div class="tab-class text-center wow fadeInUp" data-wow-delay="0.3s">
            <div class="tab-content">
              <div id="tab-1" class="tab-pane fade show p-0 active">
                <div class="job-item p-4 mb-4">
                  <div class="row g-4">
                    <>
                      <div class="col-sm-12 col-md-12  align-items-center ">
                        <div class="text-start ps-4 text-center">
                          <h5 class="mb-3">
                            {data.testid.name}
                            {/* <small style={{ fontSize: "15px" }}>fcghf</small> */}
                          </h5>
                          <span class="text-truncate me-3 mb-3">
                            Condition : {data.testid.condition}
                          </span>
                          
                          {
                            data.resultdata.map((a)=>{
                                return(
                                    <>
                                   
                                        <h2 class='mt-2'>{a.description} : {a.value}</h2>
                                    <h3 class='mt-2'>Deviation : {a.deviation}</h3>
                                    
                                    
                                    </>
                                )
                            })
                          }
                          
                          {data.comments=='Please consult a doctor as you have some variations with your reports.'?<h5 class='text-danger'>{data.comments}</h5>:<h5 class='text-success'>{data.comments}</h5>}
                        
                        </div>
                      </div>
                      <div class="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                        <div class="d-flex mb-3">
                          {
                            // a.isactive==true?<button class="btn btn-success">Approved</button>:<button class="btn btn-danger">Pending</button>
                          }
                        </div>
                        {/* <small class="text-truncate"><i class="far fa-calendar-alt text-primary me-2"></i>Date Line: 01 Jan, 2045</small> */}
                      </div>
                    </>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerViewDetailedResult;
