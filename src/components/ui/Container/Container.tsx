import styled from 'styled-components';

interface ContainerProps {
  maxWidth?: string;
  padding?: string;
  height?: string;
}

export const Container = styled.div<ContainerProps>`
  max-width: ${props => props.maxWidth || '1200px'};
  padding: ${props => props.padding || '0 15px'};
  margin: 0 auto;
  height: ${props => props.height || 'auto'};
`;
