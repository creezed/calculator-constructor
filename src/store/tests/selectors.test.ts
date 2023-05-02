import {
  selectActiveMode,
  selectCalculatorItems,
} from '@/store/slices/app/app.selectors.ts';
import { AppMode, DndTypes } from '@/shared/constants';
import { StateSchema } from '@/shared/types/stateSchema.ts';
import { selectScreenValue } from '@/store/slices/calculator/calculator.selectors.ts';

describe('redux selectors', () => {
  describe('app', () => {
    it('should select app mode from state object', () => {
      const state: DeepPartial<StateSchema> = {
        app: { activeMode: AppMode.Runtime },
      };
      expect(selectActiveMode(state as StateSchema)).toEqual(AppMode.Runtime);
    });

    it('should select calculator items from state object', () => {
      const state: DeepPartial<StateSchema> = {
        app: { calculatorItems: [DndTypes.Display, DndTypes.Equal] },
      };
      expect(selectCalculatorItems(state as StateSchema)).toEqual([
        DndTypes.Display,
        DndTypes.Equal,
      ]);
    });
  });

  describe('calculator', () => {
    it('should select screen value from state object', () => {
      const state: DeepPartial<StateSchema> = {
        calculator: { screenValue: '12' },
      };
      expect(selectScreenValue(state as StateSchema)).toEqual('12');
    });
  });
});
