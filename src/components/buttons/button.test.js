import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Buttons from './buttons';

configure({
  adapter: new Adapter(),
});

describe('Testing App Component', () => {
  const text = 'View more stories';
  const color = 'primary';
  const handleClickShowMoreNew = (e) => {
    e.preventDefault();
  };
  test('testing App', () => {
    const wrapper = shallow(
      <Buttons text={text} color={color} onClick={handleClickShowMoreNew} />
    );
    expect(wrapper.find('span').length).toBeGreaterThanOrEqual(1);
  });
});
