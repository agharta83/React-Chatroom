/**
 * NPM import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import App from 'src/components/App';

/**
 * Code
 */
const mapStateToProps = (state, ownProps) => ({
  title: state.title,
});

const mapDispatchToProps = null;

const AppContainer = connect(
  // comment connecter App au store Redux ? => stratégies de lecture/écriture
  mapStateToProps, // extraire de la data du state
  mapDispatchToProps, // écrire de la data dans le state
)(App);

/**
 * Export
 */
export default AppContainer; // composant React
