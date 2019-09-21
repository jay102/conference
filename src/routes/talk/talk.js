const express = require('express');
const controller = require('../../controllers/TalkController');
const TalkModel = require('../../database/models/Talk');
const AttendeeModel = require('../../database/models/Attendee');

const { addTalk, getTalks, deleteTalk } = controller(TalkModel, AttendeeModel);

const TalkRouter = express.Router();
const Talk = () => {
  TalkRouter.route('/')
    .post(addTalk)
    .get(getTalks);

  // delete talk by id
  TalkRouter.route('/:id')
    .delete(deleteTalk);

  return TalkRouter;
};

module.exports = Talk();
