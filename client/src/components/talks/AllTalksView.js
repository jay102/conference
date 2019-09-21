import React from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const SpeakView = (props) => {
  return (
    <>
      <div className="container">
        <h3 className="header"><i className="fas fa-users"></i>Confirmed Speakers</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">FIRST NAME</th>
              <th scope="col">LAST NAME</th>
              <th scope="col">ROLE</th>
              <th scope="col">TOPIC</th>
              <th scope="col">TIME</th>
              <th scope="col"></th>
            </tr>
          </thead>
          {props.talks.length !== 0 ? props.Table : "No registered speaker, why not be the first?"}
        </table>
      </div>

    </>
  );
}

export default SpeakView;