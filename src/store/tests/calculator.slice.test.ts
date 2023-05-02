import { CalculatorSchema } from '@/store/slices/calculator/calculator.schema.ts';
import {
  calculatorActions,
  calculatorReducer,
  ZERO_DIVISION_TEXT,
} from '@/store/slices/calculator/calculator.slice.ts';
import { OperatorsEnum } from '@/shared/constants';

describe('calculatorSlice', () => {
  describe('addOperator', () => {
    it('should handle addOperator when there is no current operator or second operand', () => {
      const state: DeepPartial<CalculatorSchema> = { firstOperand: 12 };
      const action = {
        type: calculatorActions.addOperator.type,
        payload: OperatorsEnum.Minus,
      };
      const result = calculatorReducer(state as CalculatorSchema, action);
      expect(result).toEqual({
        firstOperand: 12,
        operator: OperatorsEnum.Minus,
      } as CalculatorSchema);
    });
    it('should handle addOperator when there is a current operator and second operand', () => {
      const state: DeepPartial<CalculatorSchema> = {
        firstOperand: 12,
        secondOperand: 30,
        operator: OperatorsEnum.Plus,
      };

      const action = {
        type: calculatorActions.addOperator.type,
        payload: OperatorsEnum.Multiply,
      };
      const result = calculatorReducer(state as CalculatorSchema, action);
      expect(result).toEqual({
        firstOperand: 42,
        secondOperand: null,
        operator: OperatorsEnum.Multiply,
        isValueCalculated: false,
        result: 42,
        screenValue: '42',
      } as CalculatorSchema);
    });
    it('should handle addOperator when dividing by zero', () => {
      const state: DeepPartial<CalculatorSchema> = {
        firstOperand: 12,
        secondOperand: 0,
        operator: OperatorsEnum.Plus,
      };

      const action = {
        type: calculatorActions.addOperator.type,
        payload: OperatorsEnum.Division,
      };
      const result = calculatorReducer(state as CalculatorSchema, action);
      expect(result).toEqual({
        firstOperand: 0,
        secondOperand: null,
        operator: null,
        isValueCalculated: false,
        result: null,
        screenValue: ZERO_DIVISION_TEXT,
      } as CalculatorSchema);
    });
  });
});
