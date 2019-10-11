import React, { Component } from 'react';

class UserDetails extends Component {
  state = {
    name: '',
    email: '',
    phoneNumber: '',
    password: '',
    dob: '',
    address: '',
    bestTimeToContact: '',
  }
  componentDidMount() {
    this.setState({
      name: this.props.location.state.name,
      email: this.props.location.state.email,
      phoneNumber: this.props.location.state.phoneNumber,
      password: this.props.location.state.password,
      dob: this.props.location.state.dob,
      address: this.props.location.state.address,
      bestTimeToContact: this.props.location.state.bestTimeToContact,
    })
  }

  render() {
    const { name, email, phoneNumber, password, dob, address, bestTimeToContact } = this.state;
    return (
      <div>
        <h4>Name:</h4> {name}
        {email &&
          <div>
            <h4>Email:</h4> {email}
          </div>
        }
        {phoneNumber &&
          <div>
            <h4>Phone Number:</h4> {phoneNumber}
          </div>
        }
        <h4>Password:</h4> {password}
        <h4>Date of Birth:</h4> {dob}
        <h4>Street Address:</h4> {address}
        <h4>Best Time to Contact:</h4> {bestTimeToContact}
      </div>
    )
  }
}

export default UserDetails;
