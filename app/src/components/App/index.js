/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Local import
 */
import Messages from 'src/containers/Messages';
import Settings from 'src/containers/Settings';
import Form from 'src/containers/Form';

/**
 * Code
 */
const App = ({
  title,
}) => (
  <div className="app">
    <h1 className="app-title">{title}</h1>
    <Messages />
    <Settings />
    <Form />
  </div>
);
App.propTypes = {
  title: PropTypes.string.isRequired,
};

/**
 * Export
 */
export default App;
