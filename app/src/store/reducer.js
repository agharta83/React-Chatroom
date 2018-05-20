/**
 * InitialState
 */

const initialState = {
  input: '',
  users: '',
  messages: [
    {
      id: 0,
    }
  ],
};

/*
 * Reducer
 */
export const CHANGE_INPUT = 'CHANGE_INPUT';
export const ADD_MESSAGE = 'ADD_MESSAGE';
export const ADD_USER = 'ADD_USER';
export const USERS_LIST = 'USERS_LIST';

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
        author: action.author,
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
        name: action.name,
      };

    case 'USERS_LIST':
      return {
        users: action.users,
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

export const addUser = name => ({
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
