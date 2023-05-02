import styled from 'styled-components';
import { FC, ReactNode } from 'react';
import { FlexProps } from '@/components/ui/types';

interface Props extends FlexProps {
  as?: keyof JSX.IntrinsicElements;
  children?: ReactNode;
  spacing?: string;
}

export const StackContainer = styled.div.attrs<Props>(props => ({
  as: props.as || 'div',
}))<Props>`
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  justify-content: ${props => props.justify || 'flex-start'};
  align-items: ${props => props.align || 'stretch'};
  flex-wrap: ${props => props.wrap || 'nowrap'};
  & > * + * {
    margin-left: ${props => (props.direction === 'row' ? props.spacing : '0')};
    margin-top: ${props =>
      props.direction === 'column' ? props.spacing : '0'};
  }
`;

export const Stack: FC<Props> = ({ children, ...props }) => {
  return <StackContainer {...props}>{children}</StackContainer>;
};
