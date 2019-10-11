import React, { Component, Fragment } from 'react';

class Signup extends Component {
  state = {
    next: false,
    back: false,
    signupOption: '',
    step1: true,
    step2: false,
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

  componentDidMount() {
    this.setState({
      signupOption: this.props.location.state.signupOption
    })
    console.log(this.props.location.state.signupOption === "email")
  }

  handleSubmit = () => {
    this.props.history.push('/info');
  }

  render() {
    return (
      <Fragment>
        <Step1 step1={this.state.step1} next={() => this.handleNext()} />
        <Step2 step2={this.state.step2} back={() => this.handleBack()} submit={() => this.handleSubmit()} />
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
        <input type="text" />
      </div>
      {props.signupOption &&
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" />
        </div>
      }
      {props.signupOption &&
        <div>
          <label htmlFor="text">Phone Number</label>
          <input type="text" required />
        </div>
      }
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" required />
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
        <label htmlFor="text">Street Address</label>
        <input type="email" required />
      </div>
      <div>
        <label htmlFor="text">Best Time to Contact</label>
        {/* <TimePicker /> */}
      </div>
      <button onClick={props.back}>BACK</button>
      <button onClick={props.submit}>SUBMIT</button>
    </div>
  );
}

export default Signup;
