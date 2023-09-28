import * as yup from 'yup';

const passwordRule = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
// min 5 char, 1 uppercase, 1 lowercase, 1number, 1 symbol


export const DocRegSchema  = yup.object().shape({
    name: yup.string().min(2,"Enter minimum 2 characters").required("Required"),
    gender: yup.string().required("Required"),
    city: yup.string().min(2,"Please enter a valid address").required("Required"),          
    specialization: yup.string().min(2,"Enter minimum 2 characters").required("Required"),
    email: yup.string().email("Please enter a valid email").required("Required"),
    password: yup.string().min(5,"1 uppercase, 1 number, 1 symbol").max(16).matches(passwordRule,"1 uppercase, 1 number, 1 symbol").required("Required"),
    experience:yup.number().min(2).positive().integer().required("Required"),
    age: yup.number().min(2).positive().integer().required("Required"),
    contact: yup.number().min(1000000000,"Phone number must be minimum 10 digit number").max(9999999999, "Phone number must be a 10-digit number").required("Required"),
})
export const LabSchema  = yup.object().shape({
    name: yup.string().min(2,"Enter minimum 2 characters").required("Required"),
    regNo: yup.string().required("Required"),
    city: yup.string().min(2,"Please enter a valid address").required("Required"),          
    district: yup.string().min(2,"Please enter a valid address").required("Required"),          
    email: yup.string().email("Please enter a valid email").required("Required"),
    password: yup.string().min(5,"1 uppercase, 1 number, 1 symbol").max(16).matches(passwordRule,"1 uppercase, 1 number, 1 symbol").required("Required"),
    pincode: yup.number().min(100000, "Pincode must be minimum 6-digit number").max(999999, "Pincode must be a 6-digit number").required("Required"),
    contact: yup.number().min(1000000000,"Phone number must be minimum 10 digit number").max(9999999999, "Phone number must be a 10-digit number").required("Required"),
})
export const userSchema  = yup.object().shape({
    name: yup.string().min(2,"Enter minimum 2 characters").required("Required"),
    gender: yup.string().required("Required"),
    city: yup.string().min(2,"Please enter a valid address").required("Required"),          
    district: yup.string().min(2,"Please enter a valid address").required("Required"),          
    email: yup.string().email("Please enter a valid email").required("Required"),
    password: yup.string().min(5,"1 uppercase, 1 number, 1 symbol").max(16).matches(passwordRule,"1 uppercase, 1 number, 1 symbol").required("Required"),
    pincode: yup.number().min(100000, "Pincode must be minimum 6-digit number").max(999999, "Pincode must be a 6-digit number").required("Required"),
    contact: yup.number().min(1000000000,"Phone number must be minimum 10 digit number").max(9999999999, "Phone number must be a 10-digit number").required("Required"),
})


export const forgotPasswordScheme  = yup.object().shape({
    email: yup.string().email("Please enter a valid email").required("Required"),
    password: yup.string().min(5,"1 uppercase, 1 number, 1 symbol").max(16).matches(passwordRule,"1 uppercase, 1 number, 1 symbol").required("Required"),
})

export const addTestSchema  = yup.object().shape({
    name: yup.string().min(2,"Enter minimum 2 characters").required("Required"),
    price:yup.number().positive().integer().required("Required"),
    labId:yup.string(),
    condition:yup.string(),
    duration:yup.string().required("Required"),
    comments:yup.string()
})

export const addStaffSchema  = yup.object().shape({
    name: yup.string().min(2,"Enter minimum 2 characters").required("Required"),
    experience:yup.number().positive().integer().required("Required"),
    qualification:yup.string().required("Required"),
    address:yup.string().min(2,"Enter minimum 2 characters").required("Required"),
    contact: yup.number().min(1000000000,"Phone number must be minimum 10 digit number").max(9999999999, "Phone number must be a 10-digit number").required("Required"),
    aadhar:yup.number().min(100000000000,"Aadhaar number must be minimum 12 digit number").max(999999999999, "Aadhaar number must be a 12-digit number").required("Required"),
    labid:yup.string().required("Required"),
    email: yup.string().email("Please enter a valid email").required("Required"),
    password: yup.string().min(5,"1 uppercase, 1 number, 1 symbol").max(16).matches(passwordRule,"1 uppercase, 1 number, 1 symbol").required("Required"),
})

export const testBooking  = yup.object().shape({
    comments:yup.string(),
    time:yup.string().required("Required"), 
    date:yup.string().required("Required")  

})



export const BookingSchema  = yup.object().shape({
    cardHolderName:yup.string().min(2,"Enter minimum 2 characters").required("Required"),
    cardNo:yup.number().min(1000000000000000,"Card number must be minimum 16 digit number").max(9999999999999999, "Card number must be a 16-digit number").required("Required"),
    cvv:yup.number().min(100,"CVV number must be minimum 3 digit number").max(999, "CVV number must be a 3-digit number").required("Required"),
    month:yup.string().required("Required"),
    year:yup.string().required("Required"),
    // aadhar:yup.number().min(100000000000,"Aadhaar number must be minimum 12 digit number").max(999999999999, "Aadhaar number must be a 12-digit number").required("Required"),
})