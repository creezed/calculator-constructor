import styled from 'styled-components';
import { FC } from 'react';

interface Props {
  isActive?: boolean;
  onClick?: () => void;
  onKeyDown?: () => void;
}
export const EqualButton: FC<Props> = () => {
  return <Wrapper>=</Wrapper>;
};

const Wrapper = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 64px;

  color: white;
  border: none;
  border-radius: 6px;
  background-color: ${props => props.theme.colors.accentColor};

  font-family: inherit;
  font-size: 14px;
  font-weight: 500;
  line-height: 15px;
`;
