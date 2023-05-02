import { StateSchema } from '@/shared/types/stateSchema.ts';

export const selectCalculatorItems = (state: StateSchema) =>
  state.app.calculatorItems;

export const selectActiveMode = (state: StateSchema) => state.app.activeMode;
