import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Hello from './containers/Hello';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { StoreState } from './types/index';
import { enthusiasm } from './reducers/index';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const store = createStore<StoreState, any, any, any>(enthusiasm, {
  enthusiasmLevel: 1,
  languageName: 'TypeScript',
});

ReactDOM.render(
  <Provider store={store}>
    <Hello />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
