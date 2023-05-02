import { StateSchema } from '@/shared/types/stateSchema.ts';

export const selectScreenValue = (state: StateSchema) =>
  state.calculator.screenValue;
