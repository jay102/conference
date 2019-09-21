const response = () => {
  const success = ({
    msg, data, successCode, res,
  }) => {
    res.status(successCode).json({
      message: msg,
      data,
    });
  };

  const error = ({ err, errCode, res }) => {
    res.status(errCode).json({
      error: err,
    });
  };

  return {
    success,
    error,
  };
};
module.exports = response;
