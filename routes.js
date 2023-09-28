const express=require('express')
const router=express.Router()
const usercontroller=require('./User/userController')
const doctor=require('./Doctor/doctorController')
const lab=require('./Lab/labController')
const test=require('./Test/testController')
const staff=require('./Lab/staffController')
const booking=require('./User/bookingController')
const admin=require('./adminController')
const appointment=require('./User/appointController')
const result=require('./User/resultController')

//user  routes
router.post('/registerUser',usercontroller.registerUser)//done
router.post('/loginUser',usercontroller.login)//done
router.post('/viewUsers',usercontroller.viewUsers)
router.post('/deleteUserById/:id',usercontroller.deleteUserById)
router.post('/forgetPwdUser',usercontroller.forgotPwd)//done
router.post('/viewuserById/:id',usercontroller.viewUserById)//done
router.post('/edituserById/:id',usercontroller.editUserById)//done


//doctor  routes
router.post('/registerDoctor',doctor.registerDoctor)//done
router.post('/loginDoctor',doctor.login)//done
router.post('/viewDoctors',doctor.viewDoctors)//done
router.post('/deleteDoctorById/:id',doctor.deleteDoctorById)//done
router.post('/forgetPwdDoctor',doctor.forgotPwd)//done
router.post('/viewDoctorById/:id',doctor.viewDoctorById)//done
router.post('/editDoctorById/:id',doctor.editDoctorById)//done




//lab  routes
router.post('/registerLab',lab.registerLab)//done
router.post('/loginLab',lab.login)//done
router.post('/viewLabs',lab.viewAprvdLabs)//done
router.post('/deleteLabById/:id',lab.deleteLabById)//done
router.post('/forgetPwdLab',lab.forgotPwd)//done
router.post('/viewLabById/:id',lab.viewLabById)//done
router.post('/editLabById/:id',lab.editLabById)//done


//admin
router.post('/viewLabRequests',admin.viewLabRequests)//done
router.post('/approveLab/:id',admin.ApproveLab)//done

//staff
router.post('/addStaff/:id',staff.addStaff)//done
router.post('/viewAllStaffByLab/:id',staff.viewAllStaffByLab)//done
router.post('/viewAllStaffs',staff.viewAllStaffs)
router.post('/editStaffById/:id',staff.editStaffById)
router.post('/deleteLabById/:id',staff.deleteLabById)
router.post('/viewStaffById/:id',staff.viewStaffById)
router.post('/loginStaff',staff.login)


//test
router.post('/addTest',test.addTest)//done
router.post('/deleteTestById/:id',test.deleteTestById)//done
router.post('/viewTestById/:id',test.viewTestById)//done
router.post('/editTestById/:id',test.ediTestById)//done
router.post('/viewAllTests',test.viewTests)
router.post('/viewTestByLabId/:id',test.viewTestByLabId)



//test booking

router.post('/addBooking',booking.addBooking)//done
router.post('/viewBookingById/:id',booking.viewBookingById)//done
router.post('/viewBookingByUserId/:id',booking.viewBookingByUserId)//done
router.post('/viewBookings',booking.viewBookings)
router.post('/cancelBooking/:id',booking.deleteBookingById)//done
router.post('/viewBookingByLabId/:id',booking.viewBookingByLabId)
router.post('/viewComingBookingforStaff/:id',booking.viewComingBookingforStaff)//done
router.post('/viewPastBookingforStaff/:id',booking.viewPastBookingforStaff)//done


//dr appointments
router.post('/addAppointment',appointment.addBooking)//done
router.post('/viewAppointmentById/:id',appointment.viewBookingById)
// router.post('/viewAppointmentByUserId/:id',appointment.viewBookingByUserId)//done - ith venda
router.post('/viewAppointments',appointment.viewBookings)
router.post('/viewAppointmentByDrId/:id',appointment.viewBookingBydrId)//done
router.post('/viewAppointmentByUId/:id',appointment.viewApprovedBookingByUserId)//done
router.post('/viewAppointmentReqbyDrId/:id',appointment.viewBookingBydrReqsId)//dr req kaanum
// router.post('/viewPendingAppointmentsByUser',appointment.viewPendingBookingByUserId)//us
router.post('/approveAppointments/:id',appointment.approveBookingBydrReqsId)


//results
router.post('/viewResultByBookingId/:id',result.viewResultByBookingId)
router.post('/addResult',result.addResult)//done
router.post('/viewResultByUserId/:id',result.viewResultByUserId)//done
router.post('/viewResultId/:id',result.viewResultId)//done
router.post('/viewResultByLabId/:id',result.viewResultByLabId)
router.post('/viewResultforStaff/:id',result.viewResultforStaff)

module.exports=router 