import RegularExpresion from './regularExpresion';

//RegularExpresion(input, textInput)
//input only can be 'phonenumber' or 'email'

describe('Inputs Controllers Unit Test', () => {
  test('Input controller when both values are empty', () => {
    expect(RegularExpresion('', '')).toBeNull();
  });

  test('Input controller when input is empty', () => {
    expect(RegularExpresion('', 'test')).toBeNull();
  });

  test('Input controller when input is not valid and textInput is empty', () => {
    expect(RegularExpresion('test', '')).toBeNull();
  });

  test('Input controller when input is phonenumber and textInput is empty', () => {
    expect(RegularExpresion('phonenumber', '')).toBeTruthy();
  });

  test('Input controller when input is email and textInput is empty', () => {
    expect(RegularExpresion('email', '')).toBeTruthy();
  });

  test('Input controller when input is phonenumber and textInput has an invalid format', () => {
    expect(RegularExpresion('phonenumber', 'Test123')).toBeTruthy();
  });

  test('Input controller when input is phonenumber and textInput has a valid format', () => {
    expect(RegularExpresion('phonenumber', '1234567890')).toBeFalsy();
  });

  test('Input controller when input is email and textInput has an invalid format', () => {
    expect(RegularExpresion('email', 'Test123')).toBeTruthy();
  });

  test('Input controller when input is email and textInput has an invalid format', () => {
    expect(RegularExpresion('email', '1Test123')).toBeTruthy();
  });

  test('Input controller when input is email and textInput has a valid format', () => {
    expect(RegularExpresion('email', 'jnarvaez@condorlabs.io')).toBeFalsy();
  });

  test('Input controller when the function has not parameters', () => {
    expect(RegularExpresion()).toBeNull();
  });
});
