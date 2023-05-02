import { FC, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/shared/hooks/redux';
import { AppMode, DndTypes, OperatorsEnum } from '@/shared/constants';
import { useDrop } from 'react-dnd';
import {
  selectActiveMode,
  selectCalculatorItems,
} from '@/store/slices/app/app.selectors.ts';
import { selectScreenValue } from '@/store/slices/calculator/calculator.selectors.ts';
import { appActions } from '@/store/slices/app/app.slice.ts';
import { calculatorActions } from '@/store/slices/calculator/calculator.slice.ts';
import { Display } from '@/components/Display/Display.tsx';
import { Operators } from '@/components/Operators/Operators.tsx';
import { Numpad } from '@/components/Numpad/Numpad.tsx';
import { EqualButton } from '@/components/EqualButton/EqualButton.tsx';
import { DragItem } from '@/components/DragItem/DragItem.tsx';
import placeSvg from '@/assets/svg/place.svg';
import styled from 'styled-components';

export const Calculator: FC = () => {
  const activeMode = useAppSelector(selectActiveMode);
  const calculatorItems = useAppSelector(selectCalculatorItems);
  const screenValue = useAppSelector(selectScreenValue);
  const dispatch = useAppDispatch();

  const [overlayItemType, setOverlayItemType] = useState<DndTypes | null>(null);

  const [{ isOver, currentDraggedItem }, drop] = useDrop(
    () => ({
      accept: Object.values(DndTypes),
      drop: ({ type }: { type: DndTypes }) => {
        const isItemAlreadyMoved = calculatorItems.includes(type);
        if (overlayItemType === DndTypes.Display) {
          return;
        }
        if (!isItemAlreadyMoved) {
          dispatch(appActions.moveItem(type));
        } else if (overlayItemType) {
          const oldIndex = calculatorItems.indexOf(type);
          const newIndex = calculatorItems.indexOf(overlayItemType);
          if (oldIndex < newIndex) {
            dispatch(
              appActions.reorderItems({ from: oldIndex, to: newIndex - 1 }),
            );
          } else {
            dispatch(appActions.reorderItems({ from: oldIndex, to: newIndex }));
          }
        } else {
          const currentItemIndex = calculatorItems.indexOf(type);
          dispatch(
            appActions.reorderItems({
              from: currentItemIndex,
              to: calculatorItems.length,
            }),
          );
        }
      },
      collect: monitor => ({
        isOver: monitor.isOver(),
        currentDraggedItem: monitor.getItemType() as DndTypes | null,
      }),
    }),
    [calculatorItems, overlayItemType],
  );

  const handleComponentDoubleClick = (type: DndTypes) => {
    if (activeMode === AppMode.Runtime) return;
  };

  const handleOperatorClick = (operator: OperatorsEnum) =>
    dispatch(calculatorActions.addOperator(operator));

  const handleEqualButtonClick = () => {};

  const handleNumpadNumberClick = (number: number) => {};

  const handleNumpadPointClick = () => {};

  const shouldShowBottomLine =
    (isOver &&
      overlayItemType === null &&
      currentDraggedItem !== DndTypes.Display) ||
    (currentDraggedItem !== null &&
      !calculatorItems.includes(currentDraggedItem) &&
      isOver &&
      currentDraggedItem !== DndTypes.Display);

  return (
    <Wrapper ref={drop}>
      {calculatorItems.length ? (
        <>
          {calculatorItems.map((type, index) => {
            let component = null;

            switch (type) {
              case DndTypes.Display: {
                component = <Display value={screenValue} />;
                break;
              }
              case DndTypes.Operators: {
                component = (
                  <Operators
                    isActive={activeMode === AppMode.Runtime}
                    onClick={handleOperatorClick}
                    onKeyDown={handleOperatorClick}
                  />
                );
                break;
              }
              case DndTypes.NumPad: {
                component = (
                  <Numpad
                    isActive={activeMode === AppMode.Runtime}
                    onClickNumber={handleNumpadNumberClick}
                    onKeyDownNumber={handleNumpadNumberClick}
                    onClickPoint={handleNumpadPointClick}
                    onKeyDownPoint={handleNumpadPointClick}
                  />
                );
                break;
              }
              case DndTypes.Equal: {
                component = (
                  <EqualButton
                    isActive={activeMode === AppMode.Runtime}
                    onClick={handleEqualButtonClick}
                    onKeyDown={handleEqualButtonClick}
                  />
                );
                break;
              }

              default:
                return null;
            }

            const shouldShowTopLine =
              (overlayItemType !== null &&
                overlayItemType === type &&
                overlayItemType !== DndTypes.Display &&
                currentDraggedItem !== DndTypes.Display &&
                currentDraggedItem !== null &&
                calculatorItems.includes(currentDraggedItem)) ||
              (currentDraggedItem === DndTypes.Display && index === 0);

            return (
              <div key={type}>
                {shouldShowTopLine && <div />}
                <DragItem
                  key={type}
                  type={type}
                  index={index}
                  canDrag={
                    type !== DndTypes.Display && activeMode !== AppMode.Runtime
                  }
                  setOverlayItemType={setOverlayItemType}
                >
                  <div onDoubleClick={() => handleComponentDoubleClick(type)}>
                    {component}
                  </div>
                </DragItem>
              </div>
            );
          })}
          {shouldShowBottomLine && <div />}
        </>
      ) : (
        <div>
          <img src={placeSvg} alt="place" />
          <p>Перетащите сюда</p>
          <p>любой элемент из левой панели</p>
        </div>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;

  border: none;
  row-gap: 12px;
`;
