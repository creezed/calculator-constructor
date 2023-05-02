import { getFixedNumber } from './getFixedNumber';

describe('getFixedNumber', () => {
  test('should return a number with 4 decimal places', () => {
    expect(getFixedNumber(1.23456789)).toBe(1.2346);
    expect(getFixedNumber(3.1415)).toBe(3.1415);
    expect(getFixedNumber(0)).toBe(0);
  });

  test('should return a number with less than 4 decimal places', () => {
    expect(getFixedNumber(1.23)).toBe(1.23);
    expect(getFixedNumber(2.5)).toBe(2.5);
  });

  test('should return a negative number with 4 decimal places', () => {
    expect(getFixedNumber(-1.23456789)).toBe(-1.2346);
    expect(getFixedNumber(-3.1415)).toBe(-3.1415);
  });
});
