// import React from 'react';
// import { configure, shallow } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
// import Notice from './notice';

// configure({
//   adapter: new Adapter(),
// });

// describe('Testing Notice Component', () => {
//   test('Testing rendering of Notice Component', () => {
//     const wrapper = shallow(<Notice />);
//     expect(wrapper.find('section').exists()).toBe(true);
//   });
// });
import React from 'react';
import { create, act } from 'react-test-renderer';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Notice from './notice';

configure({
  adapter: new Adapter(),
});

describe('Testing Form Container', () => {
  let component;
  let tree;
  let instance;
  let content;

  const event = {
    preventDefault: jest.fn(),
  };

  const handleDismissMock = jest.fn();

  beforeAll(() => {
    component = create(<Notice />);
    tree = component.toJSON();
    instance = component.root;
  });

  test('renders form container correctly', () => {
    expect(tree).toMatchSnapshot();
  });

  test('Content has class', () => {
    content = instance.findByType('div');
    expect(content.props.className).toEqual('eui-alert eui-alert-info');
  });
  test('', () => {
    let form = instance.findByType('button');
    // Submit form
    act(() => {
      form.props.onClick(event);
    });
    expect(handleDismissMock).toHaveBeenCalledTimes(0);
  });
});
