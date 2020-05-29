import inputsController from './inputsController';

//inputsController(value)

describe('Inputs Controllers Unit Test', () => {
  test('Input controller when value is empty', () => {
    expect(inputsController('')).toBeTruthy();
  });

  test('Input controller when value is not empty', () => {
    expect(inputsController('Test')).toBeFalsy();
  });
});
