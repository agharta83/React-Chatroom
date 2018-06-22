import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Message = ({
  user,
  content,
  own,
}) => {
  const kls = classNames(
    'app-message',
    {
      'app-message--own': own,
    },
  );
  return (
    <div className={kls}>
      <div className="app-message-user">{user}</div>
      <div className="app-message-content">{content}</div>
    </div>
  );
};
Message.propTypes = {
  user: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  own: PropTypes.bool.isRequired,
};

export default Message;
