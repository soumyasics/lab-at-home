import React, { useEffect, useState } from 'react'
import StaffNav from './StaffNav'
import { useNavigate, useParams } from 'react-router-dom'
import axiosInstance from './BaseUrl';

function StaffAddResult() {

    const id=useParams();
    const {lid}=useParams();
   const [data,setData]=useState({details:[]})
   const navigate=useNavigate();

    const sid=localStorage.getItem('staffid')

    useEffect(()=>{
        axiosInstance.post(`/viewBookingById/${id.id}`)
        .then((response)=>{
            // console.log(response);
            if(response.data.msg=='No Data obtained '){
               

            }else if(response.data.status==200){
                
                setLogin({...add,userid:response.data.data.userid,testid:response.data.data.testid})
            }
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])

    useEffect(()=>{
      axiosInstance.post(`/viewTestById/${lid}`)
      .then((response)=>{
          console.log(response);
          setData(response.data.data)
          
      })
      .catch((err)=>{
          console.log(err);
      })
    },[])


    // const [result, setresult] = useState('');

    const[add,setLogin]=useState({
        userid:'',
        bookingid:id.id,
        staffid:sid,
        comments:'',
        testid:'',
        resultdata:[]
    })
   


    const addValue = (b) => {
      b.preventDefault();
    
      const values = Array.from(document.querySelectorAll('[id^=value]')).map(
        (input) => input.value
      );
    
      const newDetails = values.map((value) => ({ value:value }));
    
      setLogin((prevState) => ({
        ...prevState,
        resultdata: [...prevState.resultdata, ...newDetails],
      }));
    };
     

      const submitt=(b)=>{
        // add.resultdata = result;
        b.preventDefault()

        console.log(add)
        // b.preventDefault()
        axiosInstance.post('/addResult',add)
        .then((result)=>{
          console.log('data entered',result)
          if (result.data.status==200) {
            
            alert('Added Sucessfully')
            navigate('/staff_viewResults')

          }
          else{
            alert('failed')
          }
        })
        .catch((error)=>{
          console.log('error',error)
          alert('login failed')

        })
      }

     

  return (
    <div>
      <StaffNav/>
      <div class="container">
        <div class="row" style={{marginTop:'5rem',marginBottom:'10rem'}}>
            <div class="col-lg-3 col-md-2"></div>
            <div class="col-lg-6 col-md-8 login-box">
                <div class="col-lg-12 login-key">
                    <i class="fa fa-key" aria-hidden="true"></i>
                </div>
                <div class="col-lg-12 login-title mb-5 mt-5">
                    <h1>Add Results</h1>
                </div>

                <div class="col-lg-12 login-form">
                    <div class="col-lg-12 login-form">
                        <form onSubmit={submitt} >
                            <div class="form-group mb-3">
                            <label class="form-control-label mb-2">Result Data</label>

                              {
                                data.details.map(()=>{
                                  return(
                                    <div>
                                <input 
                                name='value'
                                id='value'
                                type="number" 
                                class="form-control mb-2"
                                placeholder='Add values'
                                required
                                />
                                
                                </div>
                                  )

                                })
                              }
                                
                                <div style={{float:'right',margin:'10px 0'}}>
                                   {/* <button class='btn btn-success' type='button' onClick={()=>{setLogin({...add, resultdata:[...add.resultdata, result]});alert('added');}}> Add </button> */}
                                <button class='btn btn-success' type='button' onClick={addValue}>Add</button> 
                                </div>
                                
                                
                            </div>
                            
                            <div class="form-group mb-3 mt-5">
                                <label class="form-control-label mb-2">Comments</label>
                                <textarea name="comments" id="comments"
                        type="text"
                        onChange={(e)=>{setLogin({...add,comments:e.target.value})}}
                         class="form-control" placeholder='Comments' rows="3"/>
                            </div>

                            <div class="col-lg-12 loginbttm">
                                <div class="col-lg-6 login-btm login-text">
                                  
                                </div>
                                <div class="col-lg-12 login-btm login-button mt-2">
                                   
                                 <button type="submit" class="btn btn-success" >Add Result</button>
                                
                               
                                </div>
                                </div>
                            
                        </form>
                    </div>
                </div>
                {/* <div class="col-lg-3 col-md-2"></div> */}
            </div>
        </div>





    </div>
    </div>
  )
}

export default StaffAddResult
