/**
 * NPM import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import Messages from 'src/components/Messages';

/**
 * Code
 */
const mapStateToProps = (state, ownProps) => ({
  messages: state.messages,
});

const mapDispatchToProps = null;

const MessagesContainer = connect(
  // comment connecter Messages au store Redux ? => stratégies de lecture/écriture
  mapStateToProps, // extraire de la data du state
  mapDispatchToProps, // écrire de la data dans le state
)(Messages);

/**
 * Export
 */
export default MessagesContainer; // composant React
