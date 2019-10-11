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
    this.props.history.push('/signup');
  }

  render() {
    return (
      <div>
        <p>Choose to signup with either email or phone number</p>
        <div>
          <select id="select">
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
