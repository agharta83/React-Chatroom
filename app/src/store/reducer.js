/**
 * InitialState
 */

const initialState = {
  input: '',
  users: '',
  messages: [],
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
      const message = {
        id: messageId + 1,
        message: state.input,
      };
      return {
        ...state,
        messages: [...state.messages, message],
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
