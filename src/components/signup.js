import React, { Component, Fragment } from 'react';
import TimePicker from './TimePicker';
import pickOption from './hoc/pickOption';

class Signup extends Component {
  state = {
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
  };

  componentDidMount() {
    console.log('props', this.props)
    if (this.props.signupOption === "email") {
      this.setState({
        renderEmail: true
      })
    }
    if (this.props.signupOption === "phoneNumber") {
      this.setState({
        renderPhoneNumber: true
      })
    }
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value })
  };

  handleNext = () => {
    this.setState({
      step2: true,
      step1: false
    });
  };

  handleBack = () => {
    this.setState({
      step1: true,
      step2: false
    })
  };

  handleTimePicker = (time) => {
    this.setState({
      bestTimeToContact: time
    });
  };

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
  };

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
          password={this.state.password} />

        <Step2
          step2={this.state.step2}
          back={() => this.handleBack()}
          submit={() => this.handleSubmit()}
          onChange={this.handleInputChange}
          dob={this.state.dob}
          address={this.state.address}
          handleTimePicker={this.handleTimePicker} />
      </Fragment>
    )
  }
}

const Step1 = props => {
  if (!props.step1) {
    return null;
  }
  return (
    <form onSubmit={props.next}>
      <h2>Step 1</h2>
      <div className="form-group">
        <h4><label htmlFor="text">Name</label></h4>
        <input type="text" name="name" value={props.name} onChange={props.onChange} required />
      </div>
      {props.renderEmail &&
        <div className="form-group">
          <h4><label htmlFor="email">Email</label></h4>
          <input type="email" name="email" value={props.email} onChange={props.onChange} required />
        </div>
      }
      {props.renderPhoneNumber &&
        <div className="form-group">
          <h4><label htmlFor="text">Phone Number</label></h4>
          <input type="text" name="phoneNumber" value={props.phoneNumber} onChange={props.onChange} required />
        </div>
      }
      <div className="form-group">
        <h4><label htmlFor="password">Password</label></h4>
        <input type="password" name="password" value={props.password} onChange={props.onChange} required />
      </div>
      <button type="submit">NEXT</button>
    </form>
  )
}

const Step2 = props => {
  if (!props.step2) {
    return null;
  }

  return (
    <form onSubmit={props.submit}>
    <h2>Step 2</h2>
      <div className="form-group">
        <h4><label htmlFor="text">Date of Birth</label></h4>
        <input type="text" name="dob" value={props.dob} onChange={props.onChange} required />
      </div>
      <div className="form-group">
        <h4><label htmlFor="text">Street Address</label></h4>
        <input type="text" name="address" value={props.address} onChange={props.onChange} required />
      </div>
      <div className="form-group">
        <h4><label htmlFor="text">Best Time to Contact</label></h4>
        <TimePicker onSelectTime={props.handleTimePicker}/>
      </div>
      <button onClick={props.back}>BACK</button>
      <button type="submit">SUBMIT</button>
    </form>
  );
}

export default pickOption(Signup);
