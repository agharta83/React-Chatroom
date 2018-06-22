/**
 * NPM import
 */
import { createStore, applyMiddleware, compose } from 'redux';

/**
 * Local import
 */
import reducer from './reducer';
import socket from './middlewares/socket';

/**
 * Code
 */
let devTools = [];
if (window.devToolsExtension) {
  devTools = [window.devToolsExtension()];
}
const socketMiddleware = applyMiddleware(socket);
const enhancers = compose(socketMiddleware, ...devTools);
const store = createStore(reducer, enhancers);

/**
 * Export
 */
export default store;
