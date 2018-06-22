/**
 * NPM import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import Settings from 'src/components/Settings';
import { toggleSettings, changeUser } from 'src/store/reducer';

/**
 * Code
 */
const mapStateToProps = (state, ownProps) => ({
  open: state.settings.open,
  inputValue: state.settings.user,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  toggle: () => {
    dispatch(toggleSettings());
  },
  submit: (evt) => {
    evt.preventDefault();
    dispatch(toggleSettings());
  },
  handleInputChange: (evt) => {
    const { value } = evt.target;
    dispatch(changeUser(value));
  },
});

const SettingsContainer = connect(
  // comment connecter Settings au store Redux ? => stratégies de lecture/écriture
  mapStateToProps, // extraire de la data du state
  mapDispatchToProps, // écrire de la data dans le state
)(Settings);

/**
 * Export
 */
export default SettingsContainer; // composant React
