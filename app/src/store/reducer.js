/**
 * InitialState
 */

const initialState = {
  messages: '',
  users: '',
};

/*
 * Reducer
 */

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'ADD_MESSAGE': // On fait la même chose donc on évite les doublons
    case 'MESSAGE_RECIEVED': {
      // Je crée un tableau avec avec toutes les ID
      const allIds = this.state.messages.map(message => message.id);
      // Je calcule le prochain id en prenant la plus haute et en ajoutant 1
      const newId = Math.max(...allIds) + 1;
      // Créer un message et le remplir avec l'user, le message et l'id
      const message = {
        id: newId,
        message: action.message,
        user: action.user,
      };
      // On créer un nouveau state.messages avec ceux deja créer + le nouveau
      const newMessages = [...state.messages, message];
      return {
        ...state,
        message: newMessages,
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
export const addMessage = (message, user) => ({
  type: 'ADD_MESSAGE',
  message,
  user,
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
