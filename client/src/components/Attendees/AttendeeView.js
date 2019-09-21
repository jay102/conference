import React from 'react';
import TalksContainer from '../talks/TalksContainer'

const AttendeesTable = (props) => {
  return (
    <div className="container">
      <h3 className="header"><i className="fas fa-users"></i>Confirmed Attendees</h3>
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">FIRST NAME</th>
            <th scope="col">LAST NAME</th>
            <th scope="col">ROLE</th>
            <th scope="col">EMAIL</th>
            <th scope="col">PHONE</th>
            <th scope="col">ARRIVAL TIME</th>
            <th scope="col"></th>
          </tr>
        </thead>
        {props.attendees.length !== 0 ? props.Table : "No registered attendees, why not be the first?"}
      </table>

      <TalksContainer />
    </div>
  );
}

export default AttendeesTable;