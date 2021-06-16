import React from 'react'

import './App.css';

//theme
import { ThemeProvider } from '@material-ui/core'
import theme from './utils/theme'

import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Feed from './components/Feed/Feed';
import Widgets from './components/Widgets/Widgets';
import Login from './components/Login/Login';
import { useStateValue } from './components/StateProvider/StateProvider';

function App() {

  const [{ user }, dispatch] = useStateValue();

  return (
    <ThemeProvider theme={theme}>
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />
          <div className="app__body">
            <Sidebar />
            <Feed />
            <Widgets />
          </div>
        </>
      )}
    </ThemeProvider>
  );
}

export default App;
