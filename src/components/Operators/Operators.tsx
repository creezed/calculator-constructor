import { OperatorsEnum } from '@/shared/constants';
import styled from 'styled-components';
import { Button } from '@/components/Button/Button.tsx';
import { FC } from 'react';

const operatorsList = [
  OperatorsEnum.Division,
  OperatorsEnum.Multiply,
  OperatorsEnum.Minus,
  OperatorsEnum.Plus,
];

interface Props {
  isActive?: boolean;
  onClick?: (operator: OperatorsEnum) => void;
  onKeyDown?: (operator: OperatorsEnum) => void;
}
export const Operators: FC<Props> = ({ isActive = false }) => {
  return (
    <OperatorsWrapper>
      {operatorsList.map(operator => (
        <Button key={operator}>{operator}</Button>
      ))}
    </OperatorsWrapper>
  );
};

const OperatorsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  width: 100%;
  height: 100%;
  column-gap: 8px;

  background-color: ${props => props.theme.colors.white};
`;
