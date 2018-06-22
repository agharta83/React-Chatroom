/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Local import
 */
import Message from 'src/containers/Messages/Message';

/**
 * Code
 */
const Messages = ({
  messages,
}) => (
  <div className="app-messages">
    {
      messages.map(message => (
        <Message
          key={message.id}
          {...message}
        />
      ))
    }
  </div>
);
Messages.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  })).isRequired,
};

/**
 * Export
 */
export default Messages;
