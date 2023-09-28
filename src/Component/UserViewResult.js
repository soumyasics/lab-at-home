import React, { useEffect, useState } from "react";
import CustNav from "./CustomerProf/CustNav";
import abimg from "./img/gallery-06.jpg";
import abimg1 from "./img/gallery-08.jpg";
import abimg2 from "./img/img-3.jpg";
import abimg3 from "./img/gallery-05.jpg";
import { Link } from "react-router-dom";
import axiosInstance from "./BaseUrl";

function UserViewResult() {
  const [array, setArray] = useState([]);
  const id = localStorage.getItem("custlogid");

  useEffect(() => {
    axiosInstance
      .post(`/viewResultByUserId/${id}`)
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

//   useEffect(() => {
//     console.log(array);
//   });

  return (
    <div>
      <CustNav />
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
                                    <h5>{e.description} : {e.value}</h5>
                                )
                            })
                        }
                        
                      </div>

                      <div>
                        <Link to={`/cust_detailed_result/${a._id}`} ><button class='btn btn-warning' >View Detailed Result</button></Link>
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
  );
}

export default UserViewResult;
