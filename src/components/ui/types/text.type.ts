export interface TextProps {
  fontSize?: string;
  fontWeight?: fontWeight;
  fontFamily?: string;
  color?: string;
}

type fontWeight = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

export type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
export type TextVariant = 'span' | 'p';
