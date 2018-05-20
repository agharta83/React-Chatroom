/**
 * NPM import
 */
import { createStore } from 'redux';

/**
 * Local import
 */
import reducer from './reducer';

/**
 * Code
 */
// DevTools
const devTools = [];
if (window.devToolsExtension) {
  devTools.push(window.devToolsExtension());
}

const store = createStore(reducer, ...devTools);

/**
 * Export
 */
export default store;
