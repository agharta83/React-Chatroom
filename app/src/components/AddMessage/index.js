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
class AddMessage extends React.Component {
  handleSubmit = (evt) => {
    evt.preventDefault();
    console.log('submit !!!');
    this.props.onAddMessage();
  };

  handleChange = (evt) => {
    const { value } = evt.target;
    this.props.onInputChange(value);
  };

  render() {
    const { inputValue } = this.props;
    return (
      <form id="form" action="" onSubmit={this.handleSubmit}>
        <input id="m" value={inputValue} onChange={this.handleChange} />
        <button>Send</button>
      </form>
    );
  }
}


/*
 * Validation Props
 */
AddMessage.propTypes = {
  inputValue: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onAddMessage: PropTypes.func.isRequired,
};
/*
 * Export
 */
export default AddMessage;
