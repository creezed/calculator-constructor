import styled from 'styled-components';
import { Button } from '@/components/Button/Button.tsx';
import { FC } from 'react';

const numpadItems = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, ','];

interface Props {
  isActive?: boolean;
  onClickNumber?: (number: number) => void;
  onKeyDownNumber?: (number: number) => void;
  onClickPoint?: () => void;
  onKeyDownPoint?: () => void;
}

export const Numpad: FC<Props> = () => {
  return (
    <NumpadWrapper>
      {numpadItems.map(item => {
        if (item === 0) {
          return <LargeButton key={item}>{item}</LargeButton>;
        } else {
          return <Button key={item}>{item}</Button>;
        }
      })}
    </NumpadWrapper>
  );
};

const NumpadWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 48px);
  gap: 8px;
  width: 100%;
  background-color: ${props => props.theme.colors.white};
`;

const LargeButton = styled(Button)`
  grid-column: span 2;
`;
