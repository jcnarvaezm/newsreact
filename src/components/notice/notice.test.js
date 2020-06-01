import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Notice from './notice';

configure({
  adapter: new Adapter(),
});

describe('Testing Notice Component', () => {
  test('Testing rendering of Notice Component', () => {
    const wrapper = shallow(<Notice />);
    expect(wrapper.find('section').exists()).toBe(true);
  });
});
