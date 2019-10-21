import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import pickOption from './hoc/pickOption';

class Home extends Component {
  render() {
    const { handleChange } = this.props
    return (
      <div>
        <h4>Choose to signup with either email or phone number</h4>
        <div>
          <select onChange={handleChange} id="select" className="select">
            <option value="email">Email</option>
            <option value="phoneNumber">Phone Number</option>
          </select>
        </div>
        <div>
          <Link to="/signup"><button type="submit">Submit</button></Link>
        </div>
      </div>
    )
  }
}

export default pickOption(Home);
