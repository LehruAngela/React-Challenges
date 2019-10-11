import React, { Component } from 'react';

/**
 * Timepicker component for selecting time values.
 */

class TimePicker extends Component {
  state = {
    values: [],
    listOpen: false,
    inputValue: '',
  }

  componentDidMount() {
    this.handleTimePicker();
  }

  /* Function to generate increments of 30mins from 00:00 AM to 11:30 PM.*/
  handleTimePicker = () => {
    let startTime = 0;
    let times = [];
       
    for (let i = 0; startTime < 24 * 60; i++) {
      let hours = Math.floor(startTime / 60); // getting hours of day in 0-24 format
      let mins = (startTime % 60); // getting minutes of the hour in 0-55 format
      let ap = ['AM', 'PM']; // AM-PM 
      times[i] = ("0" + (hours % 12)).slice(-2) + ':' + ("0" + mins).slice(-2) + ap[Math.floor(hours / 12)]; // pushing data in array in [00:00 - 12:00 AM/PM format]
      startTime += 30;  // adding an interval of 30 mins
    }
    this.setState({ values: times });
  }

  /* Function to open and close the time list/dropdown */
  toggleList = () => {
    this.setState(prevState => ({
      listOpen: !prevState.listOpen
    }));
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value })
  }

  /* Function to select the clicked time value */
  selectValue = (value) => {
    this.setState({
      inputValue: value,
      listOpen: false
    })
  }

  render() {
    const { values, listOpen, inputValue } = this.state;
    const timeValues = values.map(value => (
      <div key={value} onClick={() => this.selectValue(value)}>
        <p>{value}</p>
      </div>
    ));


    return (
      <div>
        <h4>TIME PICKER</h4>
        <div onClick={() => this.toggleList()}>
          <input type="text" className="timeInput" value={inputValue} onChange={this.handleInputChange}></input>
        </div>
        <div className="timeValues">
          {listOpen && <li>{timeValues}</li>}
        </div>
      </div>
    )
  }
}

export default TimePicker;