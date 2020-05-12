import React from 'react';
import GlobalStyle from './Styles/Globol';
import Header from './components/Header/index';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import light from './Styles/Themes/light';
import dark from './Styles/Themes/dark';
import usePersistedState from './Utils/usePersistedState';

const App = () => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light)

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  }
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header toggleTheme={toggleTheme}></Header>

      </ThemeProvider>
    </div>
  );
}

export default App;
