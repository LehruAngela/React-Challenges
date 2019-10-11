import React from 'react';
import { shallow } from 'enzyme';
import TimePicker from './';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('TimePicker', () => {
  it('generates increments of 30mins from 00:00 AM to 11:30 PM', () => {
    const wrapper = shallow(<TimePicker />);
  });

  it('toggles between open and closed list of time values correctly', () => {
    const wrapper = shallow(<TimePicker />);
  });

  it('selects clicked value correctly', () => {
    const wrapper = shallow(<TimePicker />);
  });

  it('allows user to type in their own time', () => {
    const wrapper = shallow(<TimePicker />);
  });
});
