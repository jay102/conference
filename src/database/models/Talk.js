const Sequelize = require('sequelize');
const Attendee = require('./Attendee');
const db = require('./index').sequelize;

const Talk = db.define('talk', {
  speaker_id: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  topic: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  time: {
    type: Sequelize.STRING,
    allowNull: false,
  },
}, {
  freezeTableName: true,
});

Talk.belongsTo(Attendee, {
  foreignKey: 'speaker_id',
  targetKey: 'email',
});

module.exports = Talk;
