/*
 * NPM Import
 */
import { connect } from 'react-redux';

/*
 * Local import
 */
import AddMessage from 'src/components/AddMessage';
import { changeInput, addMessage } from 'src/store/reducer';

/*
 * Code
 */

const mapStateToProps = state => ({
  inputValue: state.input,
});

const mapDispatchToProps = dispatch => ({
  onAddMessage: () => {
    dispatch(addMessage());
  },
  onInputChange: (value) => {
    dispatch(changeInput(value));
  },
});

const AddMessageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddMessage);

/*
 * Export
 */
export default AddMessageContainer;
