import Footer from './containers/Footer';
import Header from './containers/Header';
import Main from './containers/Main';
import { BrowserRouter as Router} from 'react-router-dom';

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Main />
        <Footer />      
      </Router>
    </>
  );
}
 
export default App;