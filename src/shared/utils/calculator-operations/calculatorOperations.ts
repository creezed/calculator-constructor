import { OperatorsEnum } from '@/shared/constants';

export const calculatorOperations = {
  [OperatorsEnum.Division]: (prevValue: number, nextValue: number) => {
    if (nextValue === 0) {
      throw new Error('Dividing by 0 is forbidden');
    }
    return prevValue / nextValue;
  },
  [OperatorsEnum.Multiply]: (prevValue: number, nextValue: number) =>
    prevValue * nextValue,
  [OperatorsEnum.Plus]: (prevValue: number, nextValue: number) =>
    prevValue + nextValue,
  [OperatorsEnum.Minus]: (prevValue: number, nextValue: number) =>
    prevValue - nextValue,
};
