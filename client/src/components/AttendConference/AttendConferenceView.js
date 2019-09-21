import React from 'react';
import ResponseChecker from '../ResponseChecker/ResponseChecker'

const AttendConferenceView = (props) => {
  return (
    <div className="container">
      <h1 className="header"><i className="fas fa-users"></i>Confirm Presence</h1>
      <form onSubmit={props.makeRequest}>
        <div className="form-group">
          <input type="text" className="form-control" name="first_name" placeholder="First name" value={props.first_name} onChange={props.handleChange} required />
        </div>
        <div className="form-group">
          <input type="text" className="form-control" name="last_name" placeholder="Last name" onChange={props.handleChange} value={props.last_name} required />
        </div>
        <div className="form-group">
          <input type="text" className="form-control" name="email" placeholder="email" value={props.email} onChange={props.handleChange} required />
        </div>
        <div className="form-group">
          <input type="text" className="form-control" name="phone" placeholder="phone" value={props.phone} onChange={props.handleChange} required />
        </div>
        <div className="form-group">
          <input type="text" className="form-control" name="role" placeholder="role" value={props.role} onChange={props.handleChange} required />
        </div>
        <button className="btn btn-primary btn-block" style={{ margin: "10px" }}>Add</button>
      </form>
      <ResponseChecker {...props} caller={"Attendance marked!"} />
    </div>
  );
}

export default AttendConferenceView;