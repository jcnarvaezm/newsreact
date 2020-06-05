import React from 'react';
import NewsContainer from './newsContainer';
import { create, act } from 'react-test-renderer';
import { articles } from '../../controllers/data';
import isoFetch from 'isomorphic-fetch';
import News from '../news';

describe('Test de prueba', () => {
  let instance;
  let component;

  beforeAll(() => {
    component = create(<NewsContainer count={1} />);
    instance = component.root;
  });

  beforeEach(() => {
    isoFetch.__setValue(articles);
  });

  it('Algo ....', async (done) => {
    await act(async () => {
      await component.update(<NewsContainer count={1} />);
    });

    instance = component.root;
    const articlesList = instance.findAllByType(News);
    expect(articlesList.length).toEqual(4);
    done();
  });
});
