/**
 * NPM import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import Message from 'src/components/Messages/Message';

/**
 * Code
 */
const mapStateToProps = (state, ownProps) => ({
  own: state.settings.user === ownProps.user,
});

const mapDispatchToProps = null;

const MessageContainer = connect(
  // comment connecter Message au store Redux ? => stratégies de lecture/écriture
  mapStateToProps, // extraire de la data du state
  mapDispatchToProps, // écrire de la data dans le state
)(Message);

/**
 * Export
 */
export default MessageContainer; // composant React
