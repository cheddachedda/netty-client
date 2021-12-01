import { Component } from 'react';
import axios from 'axios';

import Router from './Router';

const SERVER_URL = 'http://localhost:3000';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
      user: {}
    };
  }

  componentDidMount() {
    this.loginStatus();
  }

  // API: GET '/logged_in'
  // Calls login or logout methods as necessary
  loginStatus = () => {
    axios.get(SERVER_URL + '/logged_in', {
      withCredentials: true // Allows Rails server to get and read the HTTP cookie
    }).then((res) => {
      // API returns a `logged_in` boolean
      if (res.data.logged_in) {
        this._handleLogin(res);
      } else {
        this._handleLogout();
      }
    }).catch((err) => {
      console.error('API errors:', err);
    });
  }

  // Session handlers //////////////////////////////////////////////////////////

  _handleLogin = (data) => {
    this.setState({
      isLoggedIn: true,
      user: data.user
    });
  }

  _handleLogout = () => {
    this.setState({
      isLoggedIn: false,
      user: {}
    });
  }

  render() {
    return (
      <Router
        loggedInStatus={ this.state.isLoggedIn }
        handleLogin={ this._handleLogin }
        handleLogout={ this._handleLogout }
        user={ this.state.user }
      />
    );
  }
}

export default App;
