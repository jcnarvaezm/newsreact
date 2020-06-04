import { SEND, CLOSE, send, close } from './infoFormActions';

describe('Inputs Controllers Unit Test', () => {
  test('Input controller when value is empty', () => {
    expect(send()).toEqual({ type: SEND });
  });

  test('Input controller when value is not empty', () => {
    expect(close()).toEqual({ type: CLOSE });
  });
});
