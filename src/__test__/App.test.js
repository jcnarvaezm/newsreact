import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../App';

configure({
  adapter: new Adapter(),
});

describe('Testing App Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<App />);
  });

  test('Testing rendering of App Component', () => {
    expect(wrapper.find('img').length).toBeGreaterThanOrEqual(1);
  });
  test('Testing Button of App Component', () => {
    const btnApp = wrapper.find('.eui-btn-primary');
    btnApp.simulate('click');
    expect(wrapper.find('eui-col-sm-6').length).toBeGreaterThanOrEqual(0);
  });
});
