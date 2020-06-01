import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from './header';

configure({
  adapter: new Adapter(),
});

describe('Testing Header', () => {
  test('Testing rendering of Header Component', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('img').length).toBeGreaterThanOrEqual(1);
  });
});
