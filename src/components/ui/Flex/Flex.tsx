import { ReactNode } from 'react';
import styled from 'styled-components';
import { FlexProps } from '@/components/ui/types';

interface Props extends FlexProps {
  as?: keyof JSX.IntrinsicElements;
  children?: ReactNode;
  margin?: string;
  padding?: string;
  width?: string;
  height?: string;
}

export const Flex = styled.div.attrs<Props>(props => ({
  as: props.as || 'div',
}))<Props>`
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  justify-content: ${props => props.justify || 'Flex-start'};
  align-items: ${props => props.align || 'stretch'};
  flex-wrap: ${props => props.wrap || 'nowrap'};
  margin: ${props => props.margin || '0'};
  padding: ${props => props.padding || '0'};
  width: ${props => props.width || 'auto'};
  height: ${props => props.height || 'auto'};
  gap: ${props => props.gap || '0px'};
`;
