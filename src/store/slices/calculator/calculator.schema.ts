import { OperatorsEnum } from '@/shared/constants';

export interface CalculatorSchema {
  screenValue: string;
  operator: OperatorsEnum | null;
  result: number | null;
  firstOperand: number;
  secondOperand: number | null;
  isValueCalculated: boolean;
}
