import { createGlobalStyle } from 'styled-components';

import regularInterTtf from '@/assets/fonts/Inter-Regular.ttf';
import mediumInterTtf from '@/assets/fonts/Inter-Medium.ttf';
import extraBoldInterTtf from '@/assets/fonts/Inter-ExtraBold.ttf';

export const GlobalFonts = createGlobalStyle`
  @font-face {
    font-family: 'Inter';
    url(${regularInterTtf} format('ttf'));
    font-weight: 400;
    font-style: normal;
  },
  @font-face {
    font-family: 'Inter';
    url(${mediumInterTtf} format('ttf'));
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: 'Inter';
    url(${extraBoldInterTtf} format('ttf'));
    font-weight: 800;
    font-style: normal;
  }
`;
