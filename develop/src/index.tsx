import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/App/index';

import GlobalStyle from './style';

ReactDOM.render(
  <>
    <GlobalStyle />
    <App />
  </>,
  document.getElementById('root')
);
