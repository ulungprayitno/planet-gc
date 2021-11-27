import { Fragment } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Pages from './pages';

const App: React.FC = () => {
  return (
    <Fragment>
      <Router basename="/">
        <Pages />
      </Router>
    </Fragment>
  );
};

export default App;