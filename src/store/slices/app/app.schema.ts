import { AppMode, DndTypes } from '@/shared/constants';

export interface AppSchema {
  activeMode: AppMode;
  calculatorItems: DndTypes[];
}
