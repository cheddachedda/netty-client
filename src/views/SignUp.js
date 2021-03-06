import { Component } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      email: '',
      password: '',
      password_confirmation: '',
      errors: ''
    };
  }

  _handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  _handleSubmit = (event) => {
    event.preventDefault()
  }

  render() {
    const { username, email, password, password_confirmation } = this.state;
    return (
      <div>

        <h1>Sign Up</h1>

        <form onSubmit={ this._handleSubmit }>

          <input
            placeholder="username"
            type="text"
            name="username"
            value={ username }
            onChange={ this._handleChange }
          />

          <input
            placeholder="email"
            type="text"
            name="email"
            value={ email }
            onChange={ this._handleChange }
          />

          <input
            placeholder="password"
            type="password"
            name="password"
            value={ password }
            onChange={ this._handleChange }
          />

          <input
            placeholder="password confirmation"
            type="password"
            name="password_confirmation"
            value={ password_confirmation }
            onChange={ this._handleChange }
          />

          <button placeholder="submit" type="submit">
            Sign Up
          </button>

          <div>
            Already have an account? <Link to='/login'>Log in</Link>
          </div>

        </form>

      </div>
    );
  }
}

export default Signup;
