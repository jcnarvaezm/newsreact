import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Notice from './notice';

configure({
  adapter: new Adapter(),
});

describe('Testing App Component', () => {
  test('testing App', () => {
    const wrapper = shallow(<Notice />);
    expect(wrapper.find('div').exists()).toBe(true);
  });
});
