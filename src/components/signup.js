import React, { Component, Fragment } from 'react';

class Signup extends Component {
  state = {
    next: false,
    back: false,
  }

  submit = () => {
    this.props.history.push('/info');
  }

  render() {
    return (
      <Fragment>
        <Step1 />
        <Step2 />
      </Fragment>
    )
  }
}

const Step1 = props => (
  <div>
    <div>
      <label htmlFor="text">Name</label>
      <input type="text" required/>
    </div>
    {email &&
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" required/>
      </div>
    }
    {phoneNumber &&
      <div>
        <label htmlFor="text">Phone Number</label>
        <input type="text" required/>
      </div>
    }
    <div>
      <label htmlFor="password">Password</label>
      <input type="password" required/>
    </div>
    <button onClick={!this.next}>NEXT</button>
  </div>
)

const Step2 = props => (
  <div>
    <div>
      <label htmlFor="text">Date of Birth</label>
      <input type="text" required/>
    </div>
    <div>
      <label htmlFor="text">Street Address</label>
      <input type="email" required/>
    </div>
    <div>
      <label htmlFor="text">Best Time to Contact</label>
      {/* <TimePicker /> */}
    </div>
    <button onClick={!this.next}>BACK</button>
    <button onClick={this.submit}>SUBMIT</button>

  </div>
)

export default Signup;
