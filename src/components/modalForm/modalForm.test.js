import React from 'react';
import { configure } from 'enzyme';
import { create, act } from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import ModalForm, { mapStateToProps } from './modalForm';
import store from '../../redux/store';
import { Provider } from 'react-redux';
import { Modal } from 'emerald-ui/lib/';
configure({
  adapter: new Adapter(),
});

describe('Testing Form Container', () => {
  let component;
  let tree;
  let instance;
  let content;
  let componentState;

  const appState = {
    firstname: '',
    lastname: '',
    phonenumber: '',
    email: '',
    emailtext: '',
    chksendme: true,
    show: true,
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

  const event = {
    preventDefault: jest.fn(),
  };

  const closeMock = jest.fn();

  beforeEach(() => {
    component = create(
      <Provider store={store}>
        <ModalForm onHide={closeMock} />
      </Provider>
    );
    tree = component.toJSON();
    instance = component.root;
  });

  it('show correctly', () => {
    componentState = mapStateToProps(appState, ownProps);
    expect(componentState.infoForm).toEqual(appState);
  });

  it('should snapshot', () => {
    expect(tree).toMatchSnapshot();
  });

  test('Content has class', () => {
    content = instance.findByType('section');
    expect(content.props.className).toEqual('container');
  });

  it('Contact form handleClick', () => {
    const form = instance.findByType(Modal);
    act(() => {
      form.props.onHide(event);
    });
    expect(closeMock).toHaveBeenCalledTimes(0);
  });
});
