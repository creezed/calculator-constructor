import styled from 'styled-components';
import { TextProps, TextVariant } from '@/components/ui/types/text.type.ts';

interface Text extends TextProps {
  as?: TextVariant;
}
export const Text = styled.span.attrs<Text>(props => ({
  as: props.as,
}))<Text>`
  font-size: ${props => props.fontSize || '16px'};
  font-family: ${props => props.fontFamily};
  font-weight: ${props => props.fontWeight || 400};
  color: ${props => props.color || '#000'};
`;
