/**
 * NPM import
 */
import { createStore, applyMiddleware, compose } from 'redux';

/**
 * Local import
 */
import reducer from './reducer';
import socketio from './middleware';

/**
 * Code
 */
// DevTools
const devTools = [];
if (window.devToolsExtension) {
  devTools.push(window.devToolsExtension());
}

// Middleware
const Middleware = applyMiddleware(socketio);

// Package Middleware // enhancers
const enhancers = compose(Middleware, ...devTools);
const store = createStore(reducer, enhancers);

/**
 * Export
 */
export default store;
