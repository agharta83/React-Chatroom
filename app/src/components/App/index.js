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
class App extends React.Component {
  state = {}

  /*
  * Actions
  */
  // Soumission du formulaire
  handleSubmit = (evt) => {
    evt.preventDefault();
  }

  // Réagir à l'input du formulaire
  handleInputChange = () => {
  }

  /*
   * Render
   */
  render() {
    return (
      <div id="app">
        <h1>Welcome in Amazing Chatroom !</h1>
        <Messages />
        <Form onSubmitMessage={this.handleSubmit} changeInput={this.handleInputChange} />
      </div>
    );
  }
}


/**
 * Export
 */
export default App;
