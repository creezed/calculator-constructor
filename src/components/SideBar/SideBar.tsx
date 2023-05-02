import styled from 'styled-components';
import { FC } from 'react';
import { useAppSelector } from '@/shared/hooks/redux';
import { selectCalculatorItems } from '@/store/slices/app/app.selectors.ts';
import { DragItem } from '@/components/DragItem/DragItem.tsx';
import { DndTypes } from '@/shared/constants';
import { Display } from '@/components/Display/Display.tsx';
import { Operators } from '@/components/Operators/Operators.tsx';
import { Numpad } from '@/components/Numpad/Numpad.tsx';
import { EqualButton } from '@/components/EqualButton/EqualButton.tsx';

export const SideBar: FC = () => {
  const calculatorItems = useAppSelector(selectCalculatorItems);
  return (
    <Wrapper>
      <DragItem
        canDrag={!calculatorItems.includes(DndTypes.Display)}
        type={DndTypes.Display}
      >
        <Item isActive={!calculatorItems.includes(DndTypes.Display)}>
          <Display value={'0'} />
        </Item>
      </DragItem>
      <DragItem
        canDrag={!calculatorItems.includes(DndTypes.Operators)}
        type={DndTypes.Operators}
      >
        <Item isActive={!calculatorItems.includes(DndTypes.Operators)}>
          <Operators />
        </Item>
      </DragItem>
      <DragItem
        canDrag={!calculatorItems.includes(DndTypes.NumPad)}
        type={DndTypes.NumPad}
      >
        <Item isActive={!calculatorItems.includes(DndTypes.NumPad)}>
          <Numpad />
        </Item>
      </DragItem>
      <DragItem
        canDrag={!calculatorItems.includes(DndTypes.Equal)}
        type={DndTypes.Equal}
      >
        <Item isActive={!calculatorItems.includes(DndTypes.Equal)}>
          <EqualButton />
        </Item>
      </DragItem>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;
  row-gap: 12px;
`;

const Item = styled.div<{ isActive: boolean }>`
  border: 4px solid white;
  border-radius: 4px;
  background: white;
  box-shadow: ${props =>
    props.isActive
      ? '0 2px 4px rgb(0 0 0 / 6%), 0 4px 6px rgb(0 0 0 / 10%)'
      : 'none'};
  opacity: ${props => (props.isActive ? 1 : 0.5)};
`;
