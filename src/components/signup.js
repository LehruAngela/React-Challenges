import React, { Component, Fragment } from 'react';
import TimePicker from './timePicker';

class Signup extends Component {
  state = {
    signupOption: '',
    step1: true,
    step2: false,
    renderEmail: false,
    renderPhoneNumber: false,
    name: '',
    email: '',
    phoneNumber: '',
    password: '',
    dob: '',
    address: '',
    bestTimeToContact: ''
  }

  componentDidMount() {
    if (this.props.location.state.signupOption === "email") {
      this.setState({
        renderEmail: true
      })
    }
    if (this.props.location.state.signupOption === "phoneNumber") {
      this.setState({
        renderPhoneNumber: true
      })
    }
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value })
  }

  handleNext = () => {
    this.setState({
      step2: true,
      step1: false
    });
  }

  handleBack = () => {
    this.setState({
      step1: true,
      step2: false
    })
  }

  handleSubmit = () => {
    this.props.history.push({
      pathname: '/info',
      state: {
        name: this.state.name, 
        email: this.state.email,
        phoneNumber: this.state.phoneNumber,
        password: this.state.password,
        dob: this.state.dob,
        address: this.state.address,
        bestTimeToContact: this.state.bestTimeToContact,
      }
    })
  }

  render() {
    return (
      <Fragment>
        <Step1
          step1={this.state.step1}
          next={() => this.handleNext()}
          renderEmail={this.state.renderEmail}
          renderPhoneNumber={this.state.renderPhoneNumber}
          onChange={this.handleInputChange}
          name={this.state.name}
          email={this.state.email}
          phoneNumber={this.state.phoneNumber}
          password={this.state.password}/>

        <Step2
          step2={this.state.step2}
          back={() => this.handleBack()}
          submit={() => this.handleSubmit()}
          onChange={this.handleInputChange}
          dob={this.state.dob}
          address={this.state.address}
          bestTimeToContact={this.state.bestTimeToContact}/>
      </Fragment>
    )
  }
}

const Step1 = props => {
  if (!props.step1) {
    return null;
  }
  return (
    <div>
      <div>
        <label htmlFor="text">Name</label>
        <input type="text" name="name" value={props.name} onChange={props.onChange} />
      </div>
      {props.renderEmail &&
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" value={props.email} onChange={props.onChange} />
        </div>
      }
      {props.renderPhoneNumber &&
        <div>
          <label htmlFor="text">Phone Number</label>
          <input type="text" name="phoneNumber" value={props.phoneNumber} onChange={props.onChange} required />
        </div>
      }
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" value={props.password} onChange={props.onChange} required />
      </div>
      <button onClick={props.next}>NEXT</button>
    </div>
  )
}

const Step2 = props => {
  if (!props.step2) {
    return null;
  }

  return (
    <div>
      <div>
        <label htmlFor="text">Date of Birth</label>
        <input type="text" name="dob" value={props.dob} onChange={props.onChange} required />
      </div>
      <div>
        <label htmlFor="text">Street Address</label>
        <input type="text" name="address" value={props.address} onChange={props.onChange} required />
      </div>
      <div>
        <label htmlFor="text">Best Time to Contact</label>
        <TimePicker />
      </div>
      <button onClick={props.back}>BACK</button>
      <button onClick={props.submit}>SUBMIT</button>
    </div>
  );
}

export default Signup;
