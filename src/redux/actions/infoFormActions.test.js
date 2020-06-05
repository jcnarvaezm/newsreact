import { SEND, CLOSE, send, close } from './infoFormActions';

describe('Unit test for InfoForm Actions', () => {
  test('Test send method', () => {
    expect(send()).toEqual({ type: SEND });
  });

  test('Test close method', () => {
    expect(close()).toEqual({ type: CLOSE });
  });
});
