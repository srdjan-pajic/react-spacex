import FlightDetails from "./FlightDetails";
import Header from "./Header";
import Homepage from "./Homepage";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="content">
          <Switch>
            <Route path="/">
              <Homepage />
            </Route>
            <Route path='/flights/:id'>
              <FlightDetails />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
