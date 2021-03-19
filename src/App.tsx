import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import Home from './routes/Home';
import Learn from './routes/Learn';
import Signin from './routes/Signin';
import Feed from './routes/Feed';

function App() {
  return (
    <Router>
      <div className="container">
        <Link className="navbar-item" to="/">
          <h1>AlgoStreet</h1>
        </Link>
        <Link className="navbar-item" to="/learn">
          <div>Learn</div>
        </Link>
        <Link className="navbar-item" to="/signin">
          <div>Sign-in</div>
        </Link>
        <Link className="navbar-item" to="/feed">
          <div>Feed</div>
        </Link>
      </div>

      <div className="container mt-4">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/learn" exact component={Learn} />
          <Route path="/signin" exact component={Signin} />
          <Route path="/feed" exact component={Feed} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
