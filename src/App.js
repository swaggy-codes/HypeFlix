import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Header from "./components/Header";
import Home from "./components/Home";
import './App.css';
import Detail from "./components/Details";

function App() {
  return (
    <div className="App">
      { /* <h2>This is the HypeFlix! 😃</h2> */}
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path='/home'>
            <Home />
          </Route>
          <Route path='/detail/:id'>
            <Detail />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
