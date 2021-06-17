import Navbar from './Components/Navbar';
import SearchPage from './Components/SearchPage';
import ResultsPage from './Components/ResultsPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NoResults from './Components/NoResults';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <SearchPage />
        </Route>

        <Route exact path='/results/:id'>
          <ResultsPage />
        </Route>

        <Route exact path='/results/'>
          <NoResults />
        </Route>

      </Switch>
    </Router>
  )
}

export default App;
