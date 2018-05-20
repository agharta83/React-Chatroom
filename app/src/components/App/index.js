/**
 * NPM import
 */
import React from 'react';

/**
 * Local import
 */
import MessagesList from 'src/containers/MessagesList';
import AddMessage from 'src/containers/AddMessage';
import Users from 'src/components/Users';
/**
 * Code
 */
const App = () => (
  <div id="app">
    <h1>Welcome in Amazing Chatroom !</h1>
    <div id="container">
      <Users />
      <div id="main">
        <MessagesList />
        <AddMessage />
      </div>
    </div>
  </div>
);

/**
 * Export
 */
export default App;
