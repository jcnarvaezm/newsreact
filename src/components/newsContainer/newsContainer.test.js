import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NewsContainer from './newsContainer';

configure({
  adapter: new Adapter(),
});

describe('Testing NewsContainer Component', () => {
  let wrapper;
  const count = 1;
  beforeEach(() => {
    wrapper = mount(<NewsContainer count={count} />);
  });
  it('Testing Rendering of NewsContainer showing the news list', () => {
    expect(wrapper).not.toBeNull();
  });
});
