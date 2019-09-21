import React, { Component } from 'react';
import AttendView from './AttendConferenceView'
import axios from 'axios'

class AttendConferenceContainer extends Component {
  state = {
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    role: "",
    error: false,
    success: false,
    errorMsg: ""
  }
  handleChange = (e) => {
    const { name } = e.target
    this.setState({ [name]: e.target.value })
  }
  makeRequest = (e) => {
    e.preventDefault()
    const data = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      phone: this.state.phone,
      role: this.state.role
    }
    axios.post('/api/attendee', data)
      .then(res => {
        console.log(res.data)
        this.setState({
          first_name: "",
          last_name: "",
          email: "",
          phone: "",
          role: "",
          success: !this.state.success

        })
      }).catch(err => {
        if (err.response) {
          console.log(err.response)
          this.setState({
            error: !this.state.error,
            errorMsg: err.response.data.error
          })
        }
      })
  }
  render() {
    return (
      <AttendView
        {...this.state}
        handleChange={this.handleChange}
        makeRequest={this.makeRequest}
      />
    );
  }
}

export default AttendConferenceContainer;