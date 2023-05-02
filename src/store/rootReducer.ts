import { combineReducers, Reducer } from '@reduxjs/toolkit';
import { StateSchema } from '@/shared/types/stateSchema.ts';
import { appReducer } from '@/store/slices/app/app.slice.ts';
import { calculatorReducer } from '@/store/slices/calculator/calculator.slice.ts';

export const rootReducer = combineReducers<Record<keyof StateSchema, Reducer>>({
  app: appReducer,
  calculator: calculatorReducer,
});
