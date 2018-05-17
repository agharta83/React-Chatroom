/**
 * NPM import
 */
import React from 'react';

/**
 * Local import
 */
import MessagesList from 'src/components/MessagesList';
import AddMessage from 'src/components/AddMessage';
import Users from 'src/components/Users'
/**
 * Code
 */
class App extends React.Component {
  state = {

  }

  // On va récupérer le this dans le contexte de la classe.

  /*
   * Lifecycle
   */
  componentDidMount() {

  }

  /*
  * Actions
  */
  // Soumission du formulaire


  /*
   * Render
   */
  render() {
    return (
      <div id="app">
        <h1>Welcome in Amazing Chatroom !</h1>
        <Users />
        <div id="main">
          <MessagesList />
          <AddMessage />
        </div>
      </div>
    );
  }
}


/**
 * Export
 */
export default App;
