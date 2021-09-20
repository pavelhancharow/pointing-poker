import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { App } from './App/App';
import { store } from './store/store';

import GlobalStyle from './shared/GlobalStyle';

render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>,
  document.getElementById('root')
);
