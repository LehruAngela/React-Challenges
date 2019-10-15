import React from 'react';

const UserDetails = props => {
  const { name, email, phoneNumber, password, dob, address, bestTimeToContact } = props.location.state;
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

export default UserDetails;
