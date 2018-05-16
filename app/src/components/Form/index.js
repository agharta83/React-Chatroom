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
const Form = ({ onSubmitMessage, changeInput }) => (
  <form action="" onSubmit={onSubmitMessage}>
    <input id="m" autoComplete="off" onChange={changeInput} />
    <button>Send</button>
  </form>

);

/*
 * Validation Props
 */
Form.propTypes = {
  onSubmitMessage: PropTypes.func.isRequired,
  changeInput: PropTypes.func.isRequired,
};
/*
 * Export
 */
export default Form;
