const response = require('../responseHandler/response');


const TalkController = (Talk, Attendee) => {
  const { error, success } = response();

  const getTalks = (req, res) => {
    Talk.findAll({
      include: [{ model: Attendee }],
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

  const updateRole = async (email, res) => {
    const values = { role: 'speaker' };
    const selector = { where: { email } };
    try {
      const result = await Attendee.update(values, selector);
      return result[0];
    } catch (err) {
      error({
        err,
        errCode: 400,
        res,
      });
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
          updateRole(req.body.email, res);
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
    Talk.destroy({ where: { id: req.params.id } })
      .then((data) => {
        success({
          successCode: 200,
          data,
          res,
          msg: 'talk deleted',
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

  return {
    addTalk,
    getTalks,
    deleteTalk,
  };
};

module.exports = TalkController;
