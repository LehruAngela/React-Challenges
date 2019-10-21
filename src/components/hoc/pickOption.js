import React, { Component } from 'react';

const pickOption = WrappedComponent => {
  class PickUpOption extends Component {
    state = {
      signupOption: '',
    }
    
    handleChange = () => { 
      let value = document.getElementById('select').value
      this.setState({ signupOption: value });
    };

    render() {
      return (
        <WrappedComponent
          signupOption={this.state.signupOption}
          handleChange={this.handleChange}
          {...this.props}
        />
      )
    }
  }
  return PickUpOption;
}

export default pickOption;
