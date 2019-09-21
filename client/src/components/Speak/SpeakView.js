import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ResponseChecker from '../ResponseChecker/ResponseChecker'
const SpeakView = (props) => {
  return (
    <>
      <div className="container">
        <h1 className="header"><i className="fas fa-volume-up"></i>Give a talk?</h1>
        <ResponseChecker {...props} caller={"Your Talk has been confirmed!"} />
        <form onSubmit={props.makeRequest}>
          <div className="form-group">
            <input type="text" className="form-control" name="email" placeholder="Email" value={props.email} onChange={props.handleChange} required />
          </div>
          <div className="form-group">
            <input type="text" className="form-control" name="topic" placeholder="Topic" value={props.topic} onChange={props.handleChange} required />
          </div>
          <div className="form-group">
            <DatePicker
              selected={props.startDate}
              onChange={props.dateChange}
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={15}
              timeCaption="time"
              dateFormat="MMMM d, yyyy h:mm aa"
            />
          </div>

          <button className="btn btn-primary btn-block" style={{ margin: "10px" }}>Add</button>
        </form>
      </div>

    </>
  );
}

export default SpeakView;