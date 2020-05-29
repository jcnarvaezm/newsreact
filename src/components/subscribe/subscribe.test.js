import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Subscribe from './subscribe';

configure({
  adapter: new Adapter(),
});

describe('Testing App Component', () => {
  test('testing App', () => {
    const wrapper = shallow(<Subscribe />);
    expect(wrapper.find('h2').length).toBeGreaterThanOrEqual(1);
  });
});
