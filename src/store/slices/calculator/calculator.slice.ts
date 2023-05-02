import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CalculatorSchema } from '@/store/slices/calculator/calculator.schema.ts';
import { OperatorsEnum } from '@/shared/constants';
import { getFixedNumber } from '@/shared/utils/get-fixed-number/getFixedNumber.ts';
import { calculatorOperations } from '@/shared/utils/calculator-operations/calculatorOperations.ts';
import { getValueWithComma } from '@/shared/utils/get-value-with-comma/getValueWithComma.ts';
import { isZeroDivision } from '@/shared/utils/is-zero-division/isZeroDivision.ts';

const initialState: CalculatorSchema = {
  screenValue: '0',
  operator: null,
  result: null,
  firstOperand: 0,
  secondOperand: null,
  isValueCalculated: false,
};

export const ZERO_DIVISION_TEXT = 'Не определенно';

const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    addOperator: (state, { payload }: PayloadAction<OperatorsEnum>) => {
      const { firstOperand, secondOperand, operator } = state;
      if (operator && secondOperand === null) {
        // Если пользователь вводит оператор без второго операнда,
        // просто обновляем оператор и не делаем никаких вычислений.
        state.operator = payload;
      } else if (operator && secondOperand !== null) {
        // Если есть оба операнда и оператор, производим вычисления
        const resultValue = calculatorOperations[operator](
          firstOperand,
          secondOperand,
        );
        if (isZeroDivision(operator, firstOperand, secondOperand)) {
          state.screenValue = ZERO_DIVISION_TEXT;
          state.firstOperand = 0;
          state.secondOperand = null;
          state.result = null;
          state.operator = null;
        } else {
          state.result = getFixedNumber(resultValue);
          state.firstOperand = state.result;
          state.secondOperand = null;
          state.screenValue = getValueWithComma(state.result);
          state.operator = payload;
        }
        state.isValueCalculated = false;
      } else {
        // Если оператор еще не выбран, сохраняем его в состоянии.
        state.operator = payload;
      }
    },
    reset: state => {
      state.screenValue = '0';
      state.operator = null;
      state.result = null;
      state.firstOperand = 0;
      state.secondOperand = null;
      state.isValueCalculated = false;
    },
  },
});

export const { actions: calculatorActions, reducer: calculatorReducer } =
  calculatorSlice;
