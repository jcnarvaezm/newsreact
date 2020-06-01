import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ModalForm, { mapStateToProps } from './modalForm';
import store from '../../redux/store';
import { Provider } from 'react-redux';

configure({
  adapter: new Adapter(),
});

describe('Testing App Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <ModalForm />
      </Provider>
    );
  });
  test('Testing modalForm rendering', () => {
    expect(wrapper).not.toBeNull();
  });
  test('Testing modalForm State', () => {
    const appState = {
      firstname: '',
      lastname: '',
      phonenumber: '',
      email: '',
      emailtext: '',
      chksendme: false,
      show: false,
      showToast: false,
    };
    const ownProps = {
      firstname: 'firstname',
      lastname: 'lastname',
      email: 'email@email.com',
      phonenumber: '1234567890',
      emailtext: 'email text test',
      chksendme: true,
      show: true,
      showToast: false,
    };
    const componentState = mapStateToProps(appState, ownProps);
    expect(componentState.infoForm).toEqual(appState);
  });
});
