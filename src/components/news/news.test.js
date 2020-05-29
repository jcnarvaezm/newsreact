import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import News from './news';

configure({
  adapter: new Adapter(),
});

describe('Testing App Component', () => {
  const title = 'Test';
  const summary = 'Testing with Jest';
  const link = 'localhost:3000';
  const image = '../../img/22589-1-2x.jpg';

  test('testing App', () => {
    const wrapper = shallow(
      <News title={title} summary={summary} link={link} image={image} />
    );
    expect(wrapper.find('.titular').length).toBeGreaterThanOrEqual(1);
  });
});
