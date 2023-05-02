import { getValueWithComma } from './getValueWithComma';

describe('getValueWithComma', () => {
  test('should return a string with comma instead of dot', () => {
    expect(getValueWithComma(10.5)).toBe('10,5');
    expect(getValueWithComma(3.14)).toBe('3,14');
    expect(getValueWithComma(0)).toBe('0');
  });

  test('should return the same string if it does not contain a dot', () => {
    expect(getValueWithComma(100)).toBe('100');
    expect(getValueWithComma(-5)).toBe('-5');
  });
});
