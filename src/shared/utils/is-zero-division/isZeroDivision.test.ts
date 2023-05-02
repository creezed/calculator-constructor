import { isZeroDivision } from '@/shared/utils/is-zero-division/isZeroDivision.ts';
import { OperatorsEnum } from '@/shared/constants';

describe('is-zero-division', () => {
  it('should return true for division by zero', () => {
    expect(isZeroDivision(OperatorsEnum.Division, 10, 0)).toBe(true);
    expect(isZeroDivision(OperatorsEnum.Division, 0, 10)).toBe(true);
    expect(isZeroDivision(OperatorsEnum.Division, 0, 0)).toBe(true);
  });

  it('should return false for non-zero division', () => {
    expect(isZeroDivision(OperatorsEnum.Division, 10, 2)).toBe(false);
    expect(isZeroDivision(OperatorsEnum.Division, 1, -1)).toBe(false);
  });

  it('should return false for non-division operators', () => {
    expect(isZeroDivision(OperatorsEnum.Plus, 10, 0)).toBe(false);
    expect(isZeroDivision(OperatorsEnum.Minus, 0, 10)).toBe(false);
    expect(isZeroDivision(OperatorsEnum.Multiply, 0, 0)).toBe(false);
  });
});
