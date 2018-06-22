/**
 * NPM import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import Form from 'src/components/Form';
import { sendMessage, changeMessage } from 'src/store/reducer';

/**
 * Code
 */
const mapStateToProps = (state, ownProps) => ({
  inputValue: state.message,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  submit: (evt) => {
    evt.preventDefault();
    dispatch(sendMessage());
  },
  handleChangeValue: (evt) => {
    const { value } = evt.target;
    dispatch(changeMessage(value));
  },
});

const FormContainer = connect(
  // comment connecter Form au store Redux ? => stratégies de lecture/écriture
  mapStateToProps, // extraire de la data du state
  mapDispatchToProps, // écrire de la data dans le state
)(Form);

/**
 * Export
 */
export default FormContainer; // composant React
