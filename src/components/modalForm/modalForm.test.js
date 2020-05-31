import React from 'react';
import { configure, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ModalForm, { mapStateToProps } from './modalForm';
import store from '../../redux/store';
import { Provider } from 'react-redux';

configure({
  adapter: new Adapter(),
});

describe('Testing App Component', () => {
  test('testing App', () => {
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
    const wrapper = render(
      <Provider store={store}>
        <ModalForm />
      </Provider>
    );
    expect(componentState.infoForm).toEqual(appState);
    //console.log(wrapper.html('section'));
    //expect(wrapper.html('section').length).toBeGreaterThanOrEqual(1);
  });
});
