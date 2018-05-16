/**
 * NPM import
 */
import React from 'react';

/**
 * Local import
 */
import Messages from 'src/components/Messages';
import Form from 'src/components/Form';
/**
 * Code
 */
const App = () => (
  <div id="app">
    <h1>Welcome in Amazing Chatroom !</h1>
    <Messages />
    <Form />
  </div>
);

/**
 * Export
 */
export default App;
