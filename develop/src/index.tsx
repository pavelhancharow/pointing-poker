import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App/App';

import GlobalStyle from './shared/GlobalStyle';

ReactDOM.render(
  <>
    <GlobalStyle />
    <App />
  </>,
  document.getElementById('root')
);
