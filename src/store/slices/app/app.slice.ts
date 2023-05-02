import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppSchema } from './app.schema.ts';
import { AppMode, DndTypes } from '@/shared/constants';

const initialState: AppSchema = {
  activeMode: AppMode.Constructor,
  calculatorItems: [],
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setMode: (state, { payload }: PayloadAction<AppMode>) => {
      state.activeMode = payload;
    },
    moveItem: (state, { payload }: PayloadAction<DndTypes>) => {
      if (payload === 'display') {
        state.calculatorItems = [payload, ...state.calculatorItems];
      } else {
        state.calculatorItems.push(payload);
      }
    },
    removeItems: (state, { payload }: PayloadAction<DndTypes>) => {
      state.calculatorItems = state.calculatorItems.filter(
        item => item !== payload,
      );
    },
    reorderItems: (
      state,
      { payload }: PayloadAction<{ from: number; to: number }>,
    ) => {
      const { from, to } = payload;
      const items = state.calculatorItems;
      if (from < 0 || from >= items.length || to < 0 || to >= items.length) {
        // If from or to are not valid indices,
        // throw an error to avoid incorrect state changes
        throw new Error('Invalid indices for calculator items');
      }
      if (from === to) {
        // If from and to are equal, then the item does not need to be moved,
        return;
      }
      // Remove the element with the from index and add it to the to position
      const [item] = items.splice(from, 1);
      items.splice(to, 0, item);
    },
  },
});

export const { reducer: appReducer, actions: appActions } = appSlice;
