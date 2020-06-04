import React from 'react';
import { mount } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NewsContainer from '../components/newsContainer/newsContainer';
import { create, act } from 'react-test-renderer';

configure({
  adapter: new Adapter(),
});

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn(),
}));

describe('Testing Form Container', () => {
  let wrapper;
  const setDataNews = jest.fn();
  const useStateSpy = jest.spyOn(React, 'useState');

  const useStateMock: any = (initState: any) => [initState, setDataNews];

  useStateSpy.mockImplementation((dataNews) => [dataNews, setDataNews]);

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('calls setDataNews with 1', () => {
    jest.spyOn(React, 'useState').mockImplementation(useStateMock);
    wrapper = mount(<NewsContainer count={1} />);
    expect(setDataNews).toHaveBeenCalledTimes(1);
  });
});
