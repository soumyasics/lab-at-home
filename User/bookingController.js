const staffSchema = require('../Lab/staffSchema')
const booking = require('./bookingSchema')
let mongoose = require('mongoose')

const addBooking = (req, res) => {
  let staffs1 = [], staffs2 = [], diff = null;
  staffSchema.find({ labid: req.body.labId }, { _id: 1 }).exec().then(data1 => {
    for (let i = 0; i < data1.length; i++) {
      staffs1.push(data1[i]._id)
    }

    booking.find({ labId: req.body.labId, date: req.body.date, time: req.body.time, isactive: true }, { staffid: 1, _id: 0 }).exec().then(data2 => {
      for (let i = 0; i < data2.length; i++) {
        staffs2.push(data2[i].staffid)
      }
      console.log("staffs1", staffs1);
      console.log("staffs2", staffs2);

      if (staffs1.length > staffs2.length)

        diff = staffs1[staffs1.length - (staffs1.length - staffs2.length)]

      console.log("diff", diff);
      if (diff == null)
        res.json({
          status: 500,
          msg: "every staff is busy, try another date or time after an hour"
        })
      else {
        const newUser = new booking({
          userid: req.body.userid,
          testid: req.body.testid,
          labId: req.body.labId,
          comments: req.body.comments,
          time: req.body.time,
          date: req.body.date,
          staffid: diff

        })
        newUser.save().then(data => {
          res.json({
            status: 200,
            msg: "Inserted successfully",
            data: data,
            diff:diff,
            staff1:staffs1,
            staffs2:staffs2
          })
        }).catch(err => {
          res.json({
            status: 500,
            msg: "Data not Inserted",
            Error: err
          })
        })
      }
    }).catch(err => {
      res.json({
        status: 500,
        msg: "Data not Inserted2",
        Error: err
      })
    })
  }).catch(err => {
    res.json({
      status: 500,
      msg: "Data not Inserted2",
      Error: err
    })
  })
}


//View all Users

const viewBookings = (req, res) => {

  booking.find().exec()
    .then(data => {
      emps = data
      if (data.length > 0) {
        res.json({
          status: 200,
          msg: "Data obtained successfully",
          data: data
        })
      } else {
        res.json({
          status: 200,
          msg: "No Data obtained "
        })
      }
    }).catch(err => {
      console.log(err);
      res.json({
        status: 500,
        msg: "No Data obtained",
        Error: err
      })
    })

}

// view Users finished


//View  Employer by ID

const viewBookingById = (req, res) => {
  booking.findOne({ _id: req.params.id }).exec()
    .then(data => {
      emps = data
      console.log(data);
      res.json({
        status: 200,
        msg: "Data obtained successfully",
        data: data
      })

    }).catch(err => {
      console.log(err);
      res.json({
        status: 500,
        msg: "No Data obtained",
        Error: err
      })
    })

}



//View  booking for lab by ID

const viewBookingByLabId = (req, res) => {
  let labid = req.params.id
  console.log(labid);
  booking.find({ labId: labid }).populate('userid').populate('testid').exec().then(data => {
    res.json({
      status: 200,
      data: data
    })
  }).catch(err => {
    res.json({
      status: 500,
      err: err
    })
  })


}



const viewBookingByUserId = async (req, res) => {
  booking.find({ userid: req.params.id, isactive: true }).populate('labId').populate('testid').exec().then(data => {
    res.json({
      status: 200,
      data: data
    })
  }).catch(err => {
    res.json({
      status: 500,
      err: err
    })
  })


}

const viewComingBookingforStaff = async (req, res) => {
  let datas = []
  let date = new Date()

  let flag = 0
  booking.find({ staffid: req.params.id, isactive: true, result: false }).populate('userid').populate('testid').exec().then(data => {
    data.map(x => {
      flag=0

      let d = new Date(x.date)
      console.log(d.getMonth(), "", date.getMonth());
      if ((((d.getMonth())) < date.getMonth()))
        flag = 1
      else if (((((d.getMonth())) == date.getMonth())) &&( (d.getDate() < date.getDate()) || ( d.getDate() == date.getDate())))
        flag = 1
      console.log(flag);
      if (flag == 0) {
        datas.push(x)
      }
    })
    res.json({
      status: 200,
      data: datas
    })
  }).catch(err => {
    console.log(err);
    res.json({
      status: 500,
      err: err
    })
  })


}

// const viewPastBookingforStaff = async (req, res) => {
  
//   let datas = []
//   let date = new Date()

//   let flag = 0
//   booking.find({ staffid: req.params.id, isactive: true, result: false }).populate('userid').populate('testid').exec().then(data => {
//     data.map(x => {
//       let d = new Date(x.date)
//       console.log(d.getMonth(), "", date.getMonth());
//       if ((((d.getMonth())) > date.getMonth())){
//         flag = 1
//         console.log("first");
//       }
//        if (((((d.getMonth())) == date.getMonth())) && d.getDate() > date.getDate()){
//         console.log("sec");
//         flag = 1
//        }
        
//       console.log(flag);
//       if (flag == 1) {
//         datas.push(x)
//       }
//     })
//     res.json({
//       status: 200,
//       data: datas
//     })
//   }).catch(err => {
//     console.log(err);
//     res.json({
//       status: 500,
//       err: err
//     })
//   })


// }



//Delete  booking by ID
const viewPastBookingforStaff = async (req, res) => {
  let datas = []
  let date = new Date()

  let flag = 0
  booking.find({ staffid: req.params.id, isactive: true, result: false }).populate('userid').populate('testid').exec().then(data => {
    data.map(x => {
      flag=0
      let d = new Date(x.date)
      console.log("d",d);
      console.log(d.getMonth(), "", date.getMonth());
      if ((((d.getMonth())) < (date.getMonth()))){
        flag = 1
console.log("first");
      }
      else if (((((d.getMonth())) == date.getMonth())) && (d.getDate() <= date.getDate())){
        console.log("first");
        flag = 1

      }
      console.log(flag);
      if (flag == 1) {
        datas.push(x)
      }
      if(flag==0){
        console.log("flag 1",x);
      }
    })
    res.json({
      status: 200,
      data: datas
    })
  }).catch(err => {
    console.log(err);
    res.json({
      status: 500,
      err: err
    })
  })


}






const deleteBookingById = (req, res) => {
  let date = new Date()
  let flag = 0
  booking.findById({ _id: req.params.id }).exec().then(data2 => {
    d=new Date(data2.date)
    console.log(((d.getMonth())) , date.getMonth())
    if ((((d.getMonth())) > date.getMonth()))
      flag = 1
    else if (((((d.getMonth())) == date.getMonth())) && d.getDate() > date.getDate())
      flag = 1
      if(flag==1){
    booking.findByIdAndDelete({ _id: req.params.id }).exec()
      .then(data1 => {
        res.json({
          status: 200,
          msg: "Booking Cancelled"
        })
      })
      .catch(err => {
        console.log(err);
        res.json({
          status: 500,
          msg: "No Data obtained",
          Error: err
        })
      })
  }
    else {

  res.json({
    status: 200,
    msg: "Can't be deleted as Date Over"

  })
}
  }).catch (err=> {
  console.log(err);
  res.json({
    status: 500,
    msg: "No Data obtained",
    Error: err
  })
}) 
}









module.exports = {
  addBooking, viewBookingById, viewPastBookingforStaff, viewComingBookingforStaff
  , viewBookings, viewBookingByLabId, viewBookingByUserId, deleteBookingById
}
