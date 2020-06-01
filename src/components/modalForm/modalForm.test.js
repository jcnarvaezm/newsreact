import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ModalForm from './modalForm';
import store from '../../redux/store';
import { Provider } from 'react-redux';

configure({
  adapter: new Adapter(),
});

describe('Testing ModalForm Container', () => {
  test('Testing rendering of ModalForm Component', () => {
    const wrapper = mount(
      <Provider store={store}>
        <ModalForm />
      </Provider>
    );
    expect(wrapper.html('section').length).toBeGreaterThanOrEqual(1);
  });
});
