import React from 'react';
import { shallow } from 'enzyme';
import TimePicker from './';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('TimePicker', () => {
  const wrapper = shallow(<TimePicker />);

  it('generates increments of 30mins from 00:00 AM to 11:30 PM', () => {
    wrapper.instance().handleTimePicker();
    expect(wrapper.state('values').length).toBe(48);   
  });

  it('toggles between open and closed list of time values correctly', () => {
    wrapper.instance().toggleList();
    expect(wrapper.state('listOpen')).toBe(true);   
  });

  it('selects clicked value correctly', () => {
    wrapper.instance().selectValue('10:20AM');
    expect(wrapper.state('inputValue')).toBe('10:20AM');   
  });
});
