import { AppSchema } from '@/store/slices/app/app.schema.ts';
import { CalculatorSchema } from '@/store/slices/calculator/calculator.schema.ts';

export interface StateSchema {
  app: AppSchema;
  calculator: CalculatorSchema;
}
