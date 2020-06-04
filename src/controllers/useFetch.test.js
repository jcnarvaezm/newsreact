import React from 'react';
import { mount } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NewsContainer from '../components/newsContainer/newsContainer';
import { create, act } from 'react-test-renderer';
import data from './data.json';
import { waitFor } from '@testing-library/dom';
import fetchMock from 'fetch-mock';

configure({
  adapter: new Adapter(),
});

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn(),
  useEffect: jest.fn(),
}));

const API =
  'http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=b9c5c16a422d4b7b90accf49eed04cbc';

describe('Testing useFetch', () => {
  let wrapper;
  const setDataNews = jest.fn();
  const useStateSpy = jest.spyOn(React, 'useState');
  const useStateMock: any = (initState: any) => [initState, setDataNews];
  useStateSpy.mockImplementation((dataNews) => [dataNews, setDataNews]);

  beforeEach(() => {
    jest.spyOn(React, 'useEffect').mockImplementation(() => {});
    global.fetch = fetch;
  });

  afterEach(() => {
    jest.clearAllMocks();
    fetchMock.restore();
  });

  it('calls setDataNews with 1', () => {
    jest.spyOn(React, 'useState').mockImplementation(useStateMock);
    wrapper = mount(<NewsContainer count={1} />);
    expect(setDataNews).toHaveBeenCalledTimes(0);
  });

  test('useEffect test', async (done) => {
    jest.spyOn(React, 'useEffect').mockImplementation();
    let component = create(<NewsContainer count={1} />);
    act(() => {
      component.update();
      expect(component.toJSON()).toMatchSnapshot();
      done();
    });
    await waitFor(() => expect(data).toHaveBeenCalledTimes(1));
  });
});
