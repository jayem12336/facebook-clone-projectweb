import React from 'react'

import './App.css';

//theme
import {ThemeProvider } from '@material-ui/core'
import theme from './utils/theme'

import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Feed from './components/Feed/Feed';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <div className="app__body"> 
        <Sidebar />
        <Feed />
        {/* Feed */}
      </div>
    </ThemeProvider>
  );
}

export default App;
