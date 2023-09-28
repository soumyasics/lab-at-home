import React, { useEffect, useState } from 'react'
import LabNav from './LabTecProf/LabNav'
import axiosInstance from './BaseUrl';

function LabViewResults() {
    const [array, setArray] = useState([]);
  const id = localStorage.getItem("lablogid");

  useEffect(() => {
    axiosInstance
      .post(`/viewResultByLabId/${id}`)
      .then((response) => {
        console.log(response);
        if (response.data.msg == "No Data obtained ") {
          setArray([]);
        } else if (response.data.status == 200) {
          setArray(response.data.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <LabNav/>
      <div class="container-xxl py-5">
        <div class="container">
          <h1
            class="text-center mb-5 wow fadeInUp text-success"
            data-wow-delay="0.1s"
          >
            Results
          </h1>
          <div class="row g-4">
            {array.length ? (
              array.map((a) => {
                return (
                  <div
                    class="col-lg-4 col-sm-6 wow fadeInUp"
                    data-wow-delay="0.1s"
                    style={{ minHeight: "300px" }}
                  >
                    <div
                      class="cat-item rounded p-4"
                      style={{
                        minHeight: "250px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                      }}
                    >
                      <div>
                        <i class="fa fa-3x fa-mail-bulk text-primary mb-4"></i>
                        <h4 class="mb-3 ">{a.testid.name}</h4>
                        {
                            a.resultdata.map((e)=>{
                                return(
                                    <> <h5>{e.description} : {e.value}</h5>
                                    <h5>Deviation : {e.deviation}</h5></>
                                   
                                )
                            })
                        }
                        {a.comments=='Please consult a doctor as you have some variations with your reports.'?<h5 class='text-danger'>{a.comments.slice(0,22)}</h5>:<h5 class='text-success'>{a.comments.slice(0,20)}</h5>}

                      </div>

                      <div>
                        {/* <Link to={`/cust_detailed_result/${a._id}`} ><button class='btn btn-warning' >View Detailed Result</button></Link> */}
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <h3 style={{ padding: "30px" }}>No Reusults found</h3>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default LabViewResults
