/*
 * NPM Import
 */
import { connect } from 'react-redux';

/*
 * Local import
 */
import MessagesList from 'src/components/MessagesList';


/*
 * Code
 */

const mapStateToProps = state => ({
  messages: state.messages,
});

const MessagesListContainer = connect(
  mapStateToProps,
  null,
)(MessagesList);

/*
 * Export
 */
export default MessagesListContainer;
