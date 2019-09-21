const express = require('express');
const debug = require('debug')('main');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');


// import routes
const AddAttendee = require('./src/routes/attendee/attendee');
const AddTalk = require('./src/routes/talk/talk');


const app = express();

// middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'client/build')));

// port
const port = process.env.PORT || 4000;

// setup headers to handle cors error
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization',
  );
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT,POST,PATCH,DELETE,GET');
    return res.status(200).json({});
  }
  next();
});


app.use('/api/attendee', AddAttendee);
app.use('/api/talk', AddTalk);


// serve static assets if in production
if (process.env.NODE_ENV !== 'development') {
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

// setup error handler
app.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});

app.use((error, req, res) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});


app.listen(port, () => {
  debug(`server running on ${port}`);
});

module.exports = app;
