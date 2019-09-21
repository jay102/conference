const moment = require('moment');
const response = require('../responseHandler/response');


const { error, success } = response();
const addAttendeeController = (Attendee) => {
  const getAttendees = (req, res) => {
    Attendee.findAll()
      .then((result) => {
        success({
          successCode: 200,
          data: result,
          res,
          msg: 'All attendees retrieved',
        });
      }).catch((err) => {
        error({
          err,
          errCode: 400,
          res,
        });
      });
  };

  const addAttendee = (req, res) => {
    Attendee.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      phone: req.body.phone,
      email: req.body.email,
      role: req.body.role,
      arrival_time: moment().format('llll'),
    })
      .then((result) => {
        success({
          msg: 'attendee added',
          data: result,
          successCode: 201,
          res,
        });
      }).catch((err) => {
        error({
          err,
          errCode: 400,
          res,
        });
      });
  };

  return {
    getAttendees,
    addAttendee,
  };
};
module.exports = addAttendeeController;
