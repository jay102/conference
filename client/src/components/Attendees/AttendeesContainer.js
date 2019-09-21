import React, { Component } from 'react';
import axios from 'axios'
import AttendeeTable from './AttendeeView'

class AttendeesContainer extends Component {
  state = {
    attendees: []
  }
  componentDidMount() {
    this.fetchAttendees()
  }

  fetchAttendees = () => {
    axios.get('/api/attendee')
      .then(res => {
        this.setState({ attendees: res.data.data })
      })
      .catch(err => {
        if (err.response) {
          console.log(err.response.data)
        }
      })
  }
  refresh = () => {
    this.fetchAttendees()
  }

  render() {
    const Table = this.state.attendees.map(attendees => {
      return (
        <tbody key={attendees.id}>
          <tr>
            <td>{attendees.id}</td>
            <td>{attendees.first_name}</td>
            <td>{attendees.last_name}</td>
            <td>{attendees.role}</td>
            <td>{attendees.email}</td>
            <td>{attendees.phone}</td>
            <td>{attendees.arrival_time}</td>
          </tr>
        </tbody>
      );
    })
    return (
      <AttendeeTable {...this.state} Table={Table} refresh={this.refresh} />
    );
  }
}

export default AttendeesContainer;