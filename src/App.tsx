import React, { Fragment } from 'react';
import Routes from './routes'
import GlobalStyle from './styles/global';

function App() {
  return (
    <Fragment>
      <GlobalStyle/>
      <Routes />
    </Fragment>
  );
}

export default App;
