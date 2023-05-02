import styled, { css } from 'styled-components';

interface GridProps {
  as?: keyof JSX.IntrinsicElements;
  columns?: number;
  gap?: string;
  rowGap?: string;
  columnGap?: string;
  autoFlow?: string;
}

export const Grid = styled.div.attrs<GridProps>(props => ({
  as: props.as,
}))<GridProps>`
  display: grid;
  grid-template-columns: repeat(
    ${props => props.columns || 12},
    minmax(0, 1fr)
  );
  grid-gap: ${props => props.gap || '0'};
  grid-row-gap: ${props => props.rowGap || props.gap || '0'};
  grid-column-gap: ${props => props.columnGap || props.gap || '0'};
  ${props =>
    props.autoFlow &&
    css`
      grid-auto-flow: ${props.autoFlow};
    `}
`;
