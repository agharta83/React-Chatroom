/**
 * InitialState
 */

const initialState = {
  input: '',
  users: '',
  messages: [
    {
      id: 0,
      text: '',
    },
  ],
};

const messageId = 0;
/*
 * Reducer
 */

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'CHANGE_INPUT':
      return {
        ...state,
        input: action.value,
      };

    case 'ADD_MESSAGE': {
      const allIds = state.messages.map(message => message.id);
      const newId = Math.max(...allIds) + 1;

      const message = {
        id: newId,
        text: state.input,
      };

      const newMessages = [...state.messages, message];
      return {
        ...state,
        messages: newMessages,
        input: '', // Pour vider l'input
      };
    }

    case 'ADD_USER':
      return {
        ...state,
      };

    case 'USERS_LIST':
      return {
        ...state,
      };

    default:
      return state;
  }
};


/**
 * actionCreators
 */
export const changeInput = value => ({
  type: 'CHANGE_INPUT',
  value,
});

export const addMessage = () => ({
  type: 'ADD_MESSAGE',
});

export const addUSer = name => ({
  type: 'ADD_USER',
  name,
});

export const messageReceived = (message, user) => ({
  type: 'MESSAGE_RECIEVED',
  message,
  user,
});

export const UsersList = users => ({
  type: 'USERS_LIST',
  users,
});

/**
 * Export
 */

export default reducer;
