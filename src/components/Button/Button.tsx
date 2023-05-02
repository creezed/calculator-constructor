import { FC, PropsWithChildren } from 'react';
import styled from 'styled-components';

type Props = PropsWithChildren;
export const Button: FC<Props> = ({ children, ...props }) => {
  return <ButtonWrapper {...props}>{children}</ButtonWrapper>;
};

const ButtonWrapper = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 42px;

  color: black;
  border: 1px solid ${props => props.theme.colors.gray300};
  border-radius: 6px;
  background-color: white;

  font-family: inherit;
  font-size: 14px;
  font-weight: 500;
  line-height: 15px;
`;
