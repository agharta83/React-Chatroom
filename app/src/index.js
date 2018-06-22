/**
 * NPM import
 */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

/**
 * Local import
 */
import App from 'src/containers/App';
import store from 'src/store';
import { sendMessage, wsConnect } from 'src/store/reducer';

window.store = store;
window.sendMessage = sendMessage;

/**
 * Code
 */
window.addEventListener('DOMContentLoaded', () => {
  const rootComponent = (
    <Provider store={store}>
      <App />
    </Provider>
  );
  const node = document.getElementById('root');
  render(rootComponent, node);
  // On se connecte au WebSocket de socket.io
  store.dispatch(wsConnect());
});
