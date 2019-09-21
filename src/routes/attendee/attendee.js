const express = require('express');
const Model = require('../../database/models/Attendee');

const addAttendeeRouter = express.Router();
const controller = require('../../controllers/attendeeController');


const { getAttendees, addAttendee } = controller(Model);
const Attendee = () => {
  addAttendeeRouter.route('/')
    .get(getAttendees)
    .post(addAttendee);

  return addAttendeeRouter;
};
module.exports = Attendee();
