import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../App';

configure({
  adapter: new Adapter(),
});

describe('Testing App Component', () => {
  test('Testing rendering of App Component', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find('img').length).toBeGreaterThanOrEqual(1);
  });
});
