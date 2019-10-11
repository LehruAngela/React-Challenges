import React, { Component } from 'react';

class Home extends Component {
  state = {
    signupOption: ''
  }

  submit = () => {
    let value = document.getElementById("select").value;
    this.setState({
      signupOption: value
    });
    this.props.history.push({
      pathname: '/signup',
      state: { signupOption: value }
    })
  }

  render() {
    return (
      <div>
        <h4>Choose to signup with either email or phone number</h4>
        <div>
          <select id="select" className="select">
            <option value="email">Email</option>
            <option value="phoneNumber">Phone Number</option>
          </select>
        </div>
        <div>
          <button type="submit" onClick={this.submit}>Submit</button>
        </div>
      </div>
    )
  }
}

export default Home;
