import React, { Component } from 'react';

class UserDetails extends Component {
  state = {
    name: '',
    email: '',
    phoneNumber: '',
    password: '',
    dob: ''
  }
  componentDidMount() {
    console.log(this.props.location.state.password)
    this.setState({
      name: this.props.location.state.name,
      email: this.props.location.state.email,
      phoneNumber: this.props.location.state.phoneNumber,
      password: this.props.location.state.password,
      dob: this.props.location.state.dob,
    })
  }

  render() {
    const { name, email, phoneNumber, password, dob, address } = this.state;
    return (
      <div>
        Name: {name}
        {email &&
          <div>
            Email: {email}
          </div>
        }
        {phoneNumber &&
          <div>
            Phone Number: {phoneNumber}
          </div>
        }
        Password: {password}
        Date of Birth: {dob}
        Street Address: {address}
        


      </div>
    )
  }
}

export default UserDetails;
