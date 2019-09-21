const response = require('../responseHandler/response');


const TalkController = (Talk, Attendee) => {
  const { error, success } = response();

  const getTalks = (req, res) => {
    Talk.findAll({
      include: [Attendee],
    })
      .then((data) => {
        success({
          successCode: 200,
          data,
          res,
          msg: 'All talks retrieved',
        });
      })
      .catch((err) => {
        error({
          err,
          errCode: 400,
          res,
        });
      });
  };

  const updateRole = async (email, res, role) => {
    const values = { role };
    const selector = { where: { email } };
    try {
      const result = await Attendee.update(values, selector);
      return result[0];
    } catch (err) {
      console.log(err);
    }
  };
  const addTalk = async (req, res) => {
    Attendee.findOne({ where: { email: req.body.email } })
      .then((result) => {
        if (result === null) {
          error({
            err: 'Email not a registered attendee',
            errCode: 404,
            res,
          });
        } else {
          // update role
          updateRole(req.body.email, res, 'speaker');
          Talk.findOrCreate({
            where: { speaker_id: req.body.email },
            defaults: {
              speaker_id: req.body.email,
              topic: req.body.topic,
              time: req.body.time,
            },
          })
            .then(([data, created]) => {
              if (created) {
                success({
                  msg: 'Talk added',
                  data,
                  successCode: 201,
                  res,
                });
              } else {
                error({
                  err: 'Speaker already Exists',
                  errCode: 422,
                  res,
                });
              }
            });
        }
      }).catch((err) => {
        error({
          err,
          errCode: 400,
          res,
        });
      });
  };

  const deleteTalk = (req, res) => {
    Talk.findOne({ where: { id: req.params.id } })
      .then((result) => {
        const { dataValues } = result;
        updateRole(dataValues.speaker_id, res, 'attender');
        Talk.destroy({ where: { id: req.params.id } })
          .then((data) => {
            success({
              successCode: 200,
              data,
              res,
              msg: 'Talk deleted',
            });
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
    addTalk,
    getTalks,
    deleteTalk,
  };
};

module.exports = TalkController;
