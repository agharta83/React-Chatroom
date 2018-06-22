/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';

/**
 * Local import
 */

/**
 * Code
 */
const Form = ({
  submit,
  inputValue,
  handleChangeValue,
}) => (
  <form
    className="app-form"
    onSubmit={submit}
  >
    <input
      className="app-form-input"
      type="text"
      placeholder="votre message…"
      value={inputValue}
      onChange={handleChangeValue}
    />
  </form>
);
Form.propTypes = {
  submit: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
  handleChangeValue: PropTypes.func.isRequired,
};

/**
 * Export
 */
export default Form;
