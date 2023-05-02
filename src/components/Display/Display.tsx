import styled from 'styled-components';
import { FC } from 'react';

interface Props {
  value: string;
}

export const Display: FC<Props> = ({ value }) => {
  return <DisplayStyle>{value}</DisplayStyle>;
};

const DisplayStyle = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  background-color: ${props => props.theme.colors.gray100};
  color: ${props => props.theme.colors.gray900};
  font-weight: ${props => props.theme.fontWeight.extraBold};
  border-radius: 6px;
  font-size: 36px;
  padding: 4px 8px;
`;
