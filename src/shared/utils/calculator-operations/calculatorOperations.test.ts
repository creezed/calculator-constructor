import { calculatorOperations } from './calculatorOperations.ts';
import { OperatorsEnum } from '@/shared/constants';

describe('calculator-operations', () => {
  it('the division should work as expected ', () => {
    expect(calculatorOperations[OperatorsEnum.Division](2, 2)).toBe(1);
  });
  it('should return a division error of 0', () => {
    expect(() =>
      calculatorOperations[OperatorsEnum.Division](2, 0),
    ).toThrowError('Dividing by 0 is forbidden');
  });
  test('should return the result of multiplication', () => {
    expect(calculatorOperations[OperatorsEnum.Multiply](5, 2)).toBe(10);
  });

  test('should return the result of addition', () => {
    expect(calculatorOperations[OperatorsEnum.Plus](3, 5)).toBe(8);
  });

  test('should return the result of subtraction', () => {
    expect(calculatorOperations[OperatorsEnum.Minus](10, 3)).toBe(7);
  });
});
