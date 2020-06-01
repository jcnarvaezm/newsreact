import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import FormContainer, { mapStateToProps } from './formContainer';
import store from '../../redux/store';
import { Provider } from 'react-redux';

configure({
  adapter: new Adapter(),
});

describe('Testing Form Container', () => {
  test('Testing rendering of form Component', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <FormContainer />
      </Provider>
    );
    expect(wrapper.html('section').length).toBeGreaterThanOrEqual(1);
  });
});
