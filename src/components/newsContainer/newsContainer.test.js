import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NewsContainer from './newsContainer';

configure({
  adapter: new Adapter(),
});

describe('Testing App Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<NewsContainer />);
  });
  it('Testing news Container showing the news list', () => {
    expect(wrapper).not.toBeNull();
  });
  /*
  const count = 1;

  test('testing App', () => {
    const wrapper = shallow(<NewsContainer count={count} />);
    expect(wrapper.find('h2').exists()).toBe(true);
  });
  */
});
