import React from 'react'
import Nav from './Component/Nav'
import Carousel from './Component/Carousel'
import Search from './Component/Search'
import Category from './Component/Category'
// import Testimonal from './Component/Testimonal'
import Footer from './Component/Footer'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Component/Home'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
// import Appointment from './Component/Appointment'
import Doctorlogin from './Component/Doctorlogin'
import Lab from './Component/Lab'
import Aboutus from './Component/Aboutus'
import Customer from './Component/Customer'
import DoctorReg from './Component/DoctorReg'
import Adminlogin from './Component/Adminlogin'
import CandReg from './Component/CandReg'
import Labreg from './Component/Labreg'
import Adminview from './Component/Adminview'
import DocNav from './Component/DocNav'
import DocProfEdit from'./Component/DocProfEdit'
import DocProfView from './Component/DocProfView'
import DocHome from './Component/DocHome'
import LabHome from './Component/LabTecProf/LabHome'
import LabProfView from './Component/LabTecProf/LabProfView'
import LabProfEdit from './Component/LabTecProf/LabProfEdit'
import CustHome from './Component/CustomerProf/CustHome'
import CustProfView from './Component/CustomerProf/CustProfView'
import CustEditView from './Component/CustomerProf/CustEditView'
import AboutCall from './Component/AboutCall'
import AdminDocView from './Component/AdminDocView'
import DocForgotPass from './Component/DocForgotPass'
import LabForgotPass from './Component/LabForgotPass'
import AdminLabView from './Component/AdminLabView'
import UserForgotPass from './Component/UserForgotPass'
import LabAddTest from './Component/LabAddTest'
import Lab_View_Test from './Component/Lab_View_Test'
import LabEditTest from './Component/LabEditTest'
import AdminViewReq from './Component/CustomerProf/AdminViewReq'
import LabAddStaff from './Component/LabAddStaff'
import LabViewStaff from './Component/LabViewStaff'
import LabEditStaff from './Component/LabEditStaff'
import UserLabView from './Component/UserLabView'
import UserLabTests from './Component/UserLabTests'
import UserBookTest from './Component/UserBookTest'
import UserBookings from './Component/UserBookings'
import AdminViewTestByLab from './Component/AdminViewTestByLab'
import StaffLogin from './Component/StaffLogin'
import StaffHome from './Component/StaffHome'
import StaffProfile from './Component/StaffProfile'
import StaffBooking from './Component/StaffBooking'
import UserDrView from './Component/UserDrView'
import Appointment from './Component/Appointment'
import CustViewAppointmnt from './Component/CustViewAppointmnt'
import DocAppointmnts from './Component/DocAppointmnts'
import StaffAddResult from './Component/StaffAddResult'
import UserViewResult from './Component/UserViewResult'
import UserPayment from './Component/UserPayment'
import DocAcceptAppointmentReq from './Component/DocAcceptAppointmentReq'
import StaffUpcomingBookings from './Component/StaffUpcomingBookings'
import CustomerViewDetailedResult from './Component/CustomerViewDetailedResult'
import LabViewResults from './Component/LabViewResults'
import StaffViewResult from './Component/StaffViewResult'



function App() {
  return (
    <BrowserRouter basename='/projects/lab_at_home'>
    <div className='Main'>
      <Routes>
        <Route exact path='/' element={ <Home/>}/>
        <Route exact path='/Home' element={<Home/>}/>
        <Route exact path='/about' element={<AboutCall/>}/>
        <Route exact path='/appointment/:id' element={<Appointment/>}/>
        <Route exact path='/Doctorlogin' element={<Doctorlogin/>}/>
        <Route exact path='/Lablogin' element={<Lab/>}/>
        <Route exact path='/Lab_forgot_pass' element={<LabForgotPass/>}/>
        <Route exact path='/Labreg' element={<Labreg/>}/>
        <Route exact path='/Customerlogin' element={<Customer/>}/>
        <Route exact path='/About' element={<Aboutus/>}/>
        <Route exact path="/DoctorReg" element={<DoctorReg/>}/>
        <Route exact path="/CandReg" element={<CandReg/>}/>
        <Route exact path="/Admin" element={<Adminlogin/>}/>
        <Route exact path="/DocHome" element={<DocHome/>}/>
        <Route exact path="/DocProfView" element={<DocProfView/>}/>
        <Route exact path="/DocProfEdit" element={<DocProfEdit/>}/>
        <Route exact path="/doc_appointments" element={<DocAppointmnts/>}/>
        <Route exact path="/doc_appointments_req" element={<DocAcceptAppointmentReq/>}/>
        <Route exact path="/Doc_forgot_pass" element={<DocForgotPass/>}/>
        <Route exact path="/LabHome" element={<LabHome/>}/>
        <Route exact path="/LabResult" element={<LabViewResults/>}/>
        <Route exact path="/LabProfView" element={<LabProfView/>}/>
        <Route exact path="/LabProfEdit" element={<LabProfEdit/>}/>
        <Route exact path="/CustHome" element={<CustHome/>}/>
        <Route exact path="/view_labs" element={<UserLabView/>}/>
        <Route exact path="/CustProfView" element={<CustProfView/>}/>
        <Route exact path="/CustEditView" element={<CustEditView/>}/>
        <Route exact path="/custAppointments" element={<CustViewAppointmnt/>}/>
        <Route exact path="/admin_home" element={<Adminview/>}/>
        <Route exact path="/admin_docView" element={<AdminDocView/>}/>
        <Route exact path="/admin_labView" element={<AdminLabView/>}/>
        <Route exact path="/admin_testView/:id" element={<AdminViewTestByLab/>}/>
        <Route exact path="/admin_req" element={<AdminViewReq/>}/>
        <Route exact path="/user_forgot_pass" element={<UserForgotPass/>}/>
        <Route exact path="/lab_add_test" element={<LabAddTest/>}/>
        <Route exact path="/lab_add_staff" element={<LabAddStaff/>}/>
        <Route exact path="/lab_view_test" element={<Lab_View_Test/>}/>
        <Route exact path="/lab_view_staff" element={<LabViewStaff/>}/>
        <Route exact path="/lab_edit_test/:id" element={<LabEditTest/>}/>
        <Route exact path="/lab_edit_staff/:id" element={<LabEditStaff/>}/>
        <Route exact path="/user_labTests/:id" element={<UserLabTests/>}/>
        <Route exact path="/user_bookTests/:id" element={<UserBookTest/>}/>
        <Route exact path="/user_payment/:id/:value/:price" element={<UserPayment/>}/>
        <Route exact path="/view_doctors" element={<UserDrView/>}/>
        <Route exact path="/custBookings" element={<UserBookings/>}/>
        <Route exact path="/custResults" element={<UserViewResult/>}/>
        <Route exact path="/cust_detailed_result/:id" element={<CustomerViewDetailedResult/>}/>
        <Route exact path="/Staff_login" element={<StaffLogin/>}/>
        <Route exact path="/staff_home" element={<StaffHome/>}/>
        <Route exact path="/staff_viewResults" element={<StaffViewResult/>}/>
        <Route exact path="/staff_profile" element={<StaffProfile/>}/>
        <Route exact path="/staff_booking" element={<StaffBooking/>}/>
        <Route exact path="/staff_upcominBookings" element={<StaffUpcomingBookings/>}/>
        <Route exact path="/staff_add_result/:id/:lid" element={<StaffAddResult/>}/>
      </Routes>
     <Footer/>
    </div>
</BrowserRouter>

  )
}

export default App