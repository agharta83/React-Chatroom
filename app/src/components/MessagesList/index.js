/*
 * NPM Import
 */
import React from 'react';
import PropTypes from 'prop-types';
/*
 * Local Import
 */

/*
 * Code
 */
const MessagesList = ({ messages }) => (
  <div id="chatroom">
    <h2>Chatroom</h2>
    <ul id="messages">
      {messages.map(message => (
        <li
          key={message.id}
        >
          {message.text}
        </li>
      ))}
    </ul>
  </div>
);

MessagesList.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    message: PropTypes.string.isRequired,
  }).isRequired).isRequired,
};
/*
 * Export
 */
export default MessagesList;
