import React, { useEffect } from "react";
import Header from "./Header";
import Homepage from "./Homepage";
import FlightDetails from "./FlightDetails";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import useLocalStorage from "use-local-storage";
import PopupCloud from "./PopupCloud";

function App() {
  const [theme, setTheme] = useLocalStorage('theme');

  useEffect(() => {
    if (!theme) {
      setTheme('dark');
    }
  }, [theme, setTheme]);

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }

  return (
    <Router>
      <div className={`App ${theme}`}>
        <Header switchTheme={switchTheme} theme={theme} />
        <PopupCloud text="Sad je Andjela sokirana sto resize radi i bez bootstrapa xD" />
        <div className="content">
          <Switch>
            <Route exact path='/'>
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