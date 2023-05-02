import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { GlobalFonts } from '@/shared/styles/GlobalFonts.tsx';
import { GlobalStyles } from '@/shared/styles/GlobalStyles.tsx';
import { Provider } from 'react-redux';
import { store } from '@/store';
import { ThemeProvider } from 'styled-components';
import { theme } from '@/shared/styles/theme.ts';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <Provider store={store}>
      <GlobalFonts />
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <DndProvider backend={HTML5Backend}>
          <App />
        </DndProvider>
      </ThemeProvider>
    </Provider>
  </StrictMode>,
);
