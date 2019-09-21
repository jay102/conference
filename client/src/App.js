import React from 'react';
import Nav from './components/Layout/NavBar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import AttendConference from './components/AttendConference/AttendContainer';
import Speak from './components/Speak/SpeakContainer';
import ConfirmedAttendees from './components/Attendees/AttendeesContainer'
import './App.css'
import axios from 'axios'


class App extends React.Component {
  render = () => {
    axios.defaults.baseURL = "http://localhost:4000"
    return (
      <>
        <Router>
          <Nav />
          <Switch>
            <Route exact path="/" component={AttendConference} />
            <Route exact path="/speak" component={Speak} />
            <Route exact path="/confirmed" component={ConfirmedAttendees} />
          </Switch>
        </Router>
      </>
    );
  }

}

export default App;
