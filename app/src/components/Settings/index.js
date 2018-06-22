/**
 * NPM import
 */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

/**
 * Local import
 */

/**
 * Code
 */
const Settings = ({
  open,
  toggle,
  submit,
  inputValue,
  handleInputChange,
}) => {
  const kls = classNames(
    'app-settings',
    {
      'app-settings--open': open,
    },
  );
  return (
    <div className={kls}>
      <div
        className="app-settings-toggle"
        onClick={toggle}
      />
      <form
        className="app-settings-form"
        onSubmit={submit}
      >
        <input
          className="app-settings-input"
          type="text"
          placeholder="pseudo"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button className="app-settings-button">OK</button>
      </form>
    </div>
  );
};
Settings.propTypes = {
  open: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
};

/**
 * Export
 */
export default Settings;
