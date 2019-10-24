import React, { Component } from 'react';

const pickOption = WrappedComponent => {
  class PickUpOption extends Component {
    state = {
      signupOption: 'email',
    }
    
    handleChange = () => { 
      let value = document.getElementById('select').value
      this.setState({ signupOption: value }, ()=>{console.log(this.state.signupOption)});
    };

    onSubmit = () => {
      
    }

    render() {
      return (
        <WrappedComponent
          signupOption={this.state.signupOption}
          handleChange={this.handleChange}
          onSubmit={this.onSubmit}
          {...this.props}
        />
      )
    }
  }
  return PickUpOption;
}

export default pickOption;
