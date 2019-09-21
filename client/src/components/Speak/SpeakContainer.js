import React, { Component } from 'react';
import SpeakView from './SpeakView'
import axios from 'axios'

class SpeakContainer extends Component {
  state = {
    topic: "",
    startDate: new Date(),
    email: "",
    success: false,
    error: false,
    errorMsg: ""
  }
  handleChange = e => {
    const { name } = e.target;
    this.setState({
      [name]: e.target.value
    });
  };
  handleDate = date => {
    this.setState({
      startDate: date
    });
  };

  makeRequest = (e) => {
    e.preventDefault();
    const data = {
      email: this.state.email,
      topic: this.state.topic,
      time: this.state.startDate
    }

    axios.post('/api/talk', data)
      .then(res => {
        console.log(res.data)
        this.setState({
          email: "",
          topic: "",
          startDate: new Date(),
          success: !this.state.success
        })
      })
      .catch(err => {
        if (err.response) {
          const { error } = err.response.data;
          this.setState({ error: !this.state.error, errorMsg: error })
          if (error === "Email not a registered attendee") {
            alert('Pls confirm your presence by registering')
          }
        }
      })
  }
  render() {
    return (
      <SpeakView
        {...this.state}
        dateChange={this.handleDate}
        handleChange={this.handleChange}
        makeRequest={this.makeRequest} />
    );
  }
}

export default SpeakContainer;