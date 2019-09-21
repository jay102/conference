const Sequelize = require('sequelize');
const db = require('./index').sequelize;

const Attendee = db.define('attendee', {
  first_name: {
    type: Sequelize.STRING,
    allowNull: false,

  },
  last_name: {
    type: Sequelize.STRING,
    allowNull: false,

  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,

  },
  phone: {
    type: Sequelize.STRING,
    allowNull: false,

  },
  arrival_time: {
    type: Sequelize.STRING,
    allowNull: false,

  },
  role: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Attendee;
