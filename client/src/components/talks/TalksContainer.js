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
        console.log(res.data.data)
        this.setState({ talks: res.data.data })
      })
      .catch(err => {
        if (err.response) {
          console.log(err.response.data)
        }
      })
  }
  deleteTalk = (e, id) => {
    e.preventDefault();
    console.log(id)
    const del = window.confirm('Are you sure you want to delete talk?');
    if (del) {
      this.deleteFunc(id)
    } else {
      return;
    }
  }
  deleteFunc = (id) => {
    axios.delete(`/api/talk/${id}`)
      .then(res => {
        alert(res.data.message)
        this.fetchTalks();
        this.props.refresh()
      })
      .catch(err => {
        if (err.response) {
          console.log(err.response)
        }
      })
  }
  render() {
    const Table = this.state.talks.map(talks => {
      return (
        <tbody key={talks.id}>
          <tr>
            <td>{talks.id}</td>
            <td>{talks.attendee.first_name}</td>
            <td>{talks.attendee.last_name}</td>
            <td>{talks.attendee.role}</td>
            <td>{talks.topic}</td>
            <td>{talks.time}</td>
            <td style={{ fontSize: "0.72rem" }}>
              <button onClick={(e) => this.deleteTalk(e, talks.id)} className="btn btn-primary">Delete</button></td>
          </tr>
        </tbody>
      );
    })
    return (
      <AllTalks
        {...this.state}
        Table={Table}
      />
    );
  }
}

export default SpeakContainer;