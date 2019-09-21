import React, { Component } from 'react';
import AllTalks from './AllTalksView'
import axios from 'axios'

class SpeakContainer extends Component {
  state = {
    talks: [],
    success: false,
    error: false,
    errorMsg: ""
  }
  componentDidMount() {
    this.fetchTalks()
  }


  fetchTalks = () => {
    axios.get('/api/talk')
      .then(res => {
        console.log(res.data)
        this.setState({ talks: res.data.data })
      })
      .catch(err => {
        if (err.response) {
          console.log(err.response.data)
        }
      })
  }
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
    // const Table = this.state.talks.map(talks => {
    //   return (
    //     <tbody key={attendees.id}>
    //       <tr>
    //         <td>{attendees.id}</td>
    //         <td>{attendees.first_name}</td>
    //         <td>{attendees.last_name}</td>
    //         <td>{attendees.role}</td>
    //         <td>{attendees.email}</td>
    //         <td>{attendees.phone}</td>
    //         <td>{attendees.arrival_time}</td>
    //       </tr>
    //     </tbody>
    //   );
    // })
    return (
      <AllTalks
        {...this.state}

      />
    );
  }
}

export default SpeakContainer;