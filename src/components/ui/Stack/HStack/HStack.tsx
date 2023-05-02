import styled from 'styled-components';
import { FlexProps } from '@/components/ui/types';
import { FC, ReactNode } from 'react';
import { StackContainer } from '../Stack/Stack.tsx';

interface Props extends FlexProps {
  as?: keyof JSX.IntrinsicElements;
  children?: ReactNode;
  spacing?: string;
}

const HStackContainer = styled(StackContainer).attrs<Props>(props => ({
  as: props.as,
}))<Props>`
  flex-direction: row;
  align-items: ${props => props.align || 'stretch'};
`;

export const HStack: FC<Omit<Props, 'direction'>> = ({
  children,
  ...props
}) => {
  return <HStackContainer {...props}>{children}</HStackContainer>;
};
