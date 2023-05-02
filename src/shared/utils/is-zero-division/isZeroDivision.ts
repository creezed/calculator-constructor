import { OperatorsEnum } from '@/shared/constants';

export const isZeroDivision = (
  operator: OperatorsEnum,
  firstOperand: number,
  secondOperand: number | null,
) => {
  return (
    operator === OperatorsEnum.Division &&
    (firstOperand === 0 || secondOperand === 0)
  );
};
