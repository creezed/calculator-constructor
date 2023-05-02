import { appActions, appReducer } from '@/store/slices/app/app.slice.ts';
import { AppSchema } from '@/store/slices/app/app.schema.ts';
import { AppMode, DndTypes } from '@/shared/constants';

describe('appSlice', () => {
  it('should return default state when passed an empty actions', () => {
    const result = appReducer(undefined, { type: '' });

    expect(result).toEqual({
      activeMode: 'constructor',
      calculatorItems: [],
    } as AppSchema);
  });

  it('should change app mode', () => {
    const state: DeepPartial<AppSchema> = {
      activeMode: AppMode.Constructor,
    };
    const action = { type: appActions.setMode.type, payload: AppMode.Runtime };

    const result = appReducer(state as AppSchema, action);

    expect(result).toEqual({ activeMode: AppMode.Runtime } as AppSchema);
  });

  it('should put the display forward', () => {
    const state: DeepPartial<AppSchema> = {
      calculatorItems: [DndTypes.NumPad, DndTypes.Equal],
    };
    const action = {
      type: appActions.moveItem.type,
      payload: DndTypes.Display,
    };
    const result = appReducer(state as AppSchema, action);

    expect(result).toEqual({
      calculatorItems: [DndTypes.Display, DndTypes.NumPad, DndTypes.Equal],
    } as AppSchema);
  });

  it('should add the item to the calculatorItems', () => {
    const state: DeepPartial<AppSchema> = {
      calculatorItems: [DndTypes.Display, DndTypes.Equal],
    };
    const action = { type: appActions.moveItem.type, payload: DndTypes.NumPad };
    const result = appReducer(state as AppSchema, action);
    expect(result).toEqual({
      calculatorItems: [DndTypes.Display, DndTypes.Equal, DndTypes.NumPad],
    } as AppSchema);
  });

  it('should remove the item to the calculatorItems', () => {
    const state: DeepPartial<AppSchema> = {
      calculatorItems: [DndTypes.Display, DndTypes.Equal],
    };
    const action = {
      type: appActions.removeItems.type,
      payload: DndTypes.Equal,
    };
    const result = appReducer(state as AppSchema, action);
    expect(result).toEqual({
      calculatorItems: [DndTypes.Display],
    } as AppSchema);
  });

  describe('reorderItems', () => {
    it('should move the element', () => {
      const state: DeepPartial<AppSchema> = {
        calculatorItems: [DndTypes.Equal, DndTypes.NumPad],
      };
      const action = {
        type: appActions.reorderItems.type,
        payload: { from: 0, to: 1 },
      };
      const result = appReducer(state as AppSchema, action);

      expect(result).toEqual({
        calculatorItems: [DndTypes.NumPad, DndTypes.Equal],
      } as AppSchema);
    });

    it('should throw an error if the indices are wrong', () => {
      const state: DeepPartial<AppSchema> = {
        calculatorItems: [DndTypes.Equal, DndTypes.NumPad],
      };
      const action = {
        type: appActions.reorderItems.type,
        payload: { from: 1, to: 4 },
      };
      expect(() => appReducer(state as AppSchema, action)).toThrowError(
        'Invalid indices for calculator items',
      );
    });

    it('appReducer(state as AppSchema, action)', () => {
      const state: DeepPartial<AppSchema> = {
        calculatorItems: [DndTypes.Equal, DndTypes.NumPad],
      };
      const action = {
        type: appActions.reorderItems.type,
        payload: { from: 1, to: 1 },
      };
      const result = appReducer(state as AppSchema, action);
      expect(result).toEqual({
        calculatorItems: [DndTypes.Equal, DndTypes.NumPad],
      } as AppSchema);
    });
  });
});
