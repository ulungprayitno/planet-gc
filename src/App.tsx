import { Fragment } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Pages from './pages';
import { ChakraProvider } from "@chakra-ui/react"

const App: React.FC = () => {
  return (
    <Fragment>
      <Router basename="/">
        <ChakraProvider>
          <Pages />
        </ChakraProvider>
      </Router>
    </Fragment>
  );
};

export default App;