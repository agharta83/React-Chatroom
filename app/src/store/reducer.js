/**
 * Code
 */
const initialState = {
  title: 'Chatroom',
  settings: {
    user: 'jd',
    open: true, // Settings ouverts ou fermés ?
  },
  message: '',
  messages: [
    // {
    //   id: 1,
    //   content: 'Salut, ça va ?',
    //   user: 'jd',
    // },
    // {
    //   id: 2,
    //   content: 'Pas mal, pas mal.',
    //   user: 'Guillaume',
    // },
    // {
    //   id: 3,
    //   content: 'Et toi ?',
    //   user: 'Guillaume',
    // },
  ],
};

export const WEBSOCKET_CONNECT = 'WEBSOCKET_CONNECT';
export const MESSAGE_RECEIVED = 'MESSAGE_RECEIVED';
export const TOGGLE_SETTINGS = 'TOGGLE_SETTINGS';
export const CHANGE_USER = 'CHANGE_USER';
export const CHANGE_MESSAGE = 'CHANGE_MESSAGE';
export const SEND_MESSAGE = 'SEND_MESSAGE';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_SETTINGS:
      return {
        ...state,
        settings: {
          ...state.settings,
          open: !state.settings.open,
        },
      };

    case CHANGE_USER:
      return {
        ...state,
        settings: {
          ...state.settings,
          user: action.value,
        },
      };

    case CHANGE_MESSAGE:
      return {
        ...state,
        message: action.value,
      };

    case SEND_MESSAGE:
      return {
        ...state,
        message: '',
      };

    case MESSAGE_RECEIVED:
      return {
        ...state,
        messages: [...state.messages, action.message],
      };

    default:
      return state;
  }
};

/**
 * Export
 */
export default reducer;

export const wsConnect = () => ({
  type: WEBSOCKET_CONNECT,
});

export const messageReceived = message => ({
  type: MESSAGE_RECEIVED,
  message,
});

export const toggleSettings = () => ({
  type: TOGGLE_SETTINGS,
});

export const changeUser = value => ({
  type: CHANGE_USER,
  value,
});

export const changeMessage = value => ({
  type: CHANGE_MESSAGE,
  value,
});

export const sendMessage = () => ({
  type: SEND_MESSAGE,
});
