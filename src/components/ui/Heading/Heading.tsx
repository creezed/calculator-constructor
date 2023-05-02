import styled from 'styled-components';
import { HeadingLevel, TextProps } from '@/components/ui/types/text.type.ts';

interface HeadingProps extends TextProps {
  as?: HeadingLevel;
}
export const Heading = styled.h1.attrs<HeadingProps>(props => ({
  as: props.as,
}))<HeadingProps>`
  font-size: ${props => props.fontSize || '24px'};
  font-weight: ${props => props.fontWeight || 600};
  color: ${props => props.color || '#000'};
`;
