import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import FormContainer from './formContainer';
import store from '../../redux/store';
import { Provider } from 'react-redux';

configure({
  adapter: new Adapter(),
});

describe('Testing Form Container', () => {
  const wrapper = mount(
    <Provider store={store}>
      <FormContainer />
    </Provider>
  );
  test('Testing rendering of form Component', () => {
    expect(wrapper.html('section').length).toBeGreaterThanOrEqual(1);
  });
});
