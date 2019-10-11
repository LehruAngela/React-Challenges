import React, { Component } from 'react';

class UserDetails extends Component {
  render() {
    return (
      <div>
        {this.props.details}
      </div>
    )
  }
}

export default UserDetails;
