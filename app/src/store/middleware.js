/*
 * Middleware Socket.io
 */
/*
 * NPM Import
 */
import io from 'socket.io-client';

/*
 * Local Import
 */
import { ADD_MESSAGE } from './reducer';

/*
 * Code
 */

const socketio = store => next => (action) => {
  next(action);

  switch (action.type) {
    case ADD_MESSAGE: {
      const state = store.getState();
      break;
    }
    default:
      break;
  }
};

/*
 * Export
 */
export default socketio;
