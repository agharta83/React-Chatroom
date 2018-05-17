/**
 * InitialState
 */

const initialState = {

};

/*
 * Reducer
 */

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return {
        ...state,
      };
    case 'MESSAGE_RECIEVED':
      return {
        ...state,
      };
    case 'ADD_USER':
      return {
        ...state,
      };
    case 'USER_LIST':
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
let nextMessageId = 0;
const nextUserId = 0;

export const addMessage = (message, user) => ({
  type: 'ADD_MESSAGE',
  id: nextMessageId + 1,
  message,
  user,
});

export const addUSer = name => ({
  type: 'ADD_USER',
  id: nextUserId + 1,
  name,
});

export const messageReceived = (message, user) => ({
  type: 'MESSAGE_RECIEVED',
  id: nextMessageId + 1,
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
