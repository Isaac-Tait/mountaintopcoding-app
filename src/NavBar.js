import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
  NavLink,
  HashRouter
} from "react-router-dom";
import Theology from './Theology.js'
import GravelCycling from './GravelCycling.js'
import BackcountrySkiing from './BackcountrySkiing.js'
import Tenkara from './Tenkara.js'

export default function NestingExample() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>

        <hr />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/topics">
            <Topics />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function Topics() {
  // The `path` lets us build <Route> paths that are
  // relative to the parent route, while the `url` lets
  // us build relative links.
  let { path, url } = useRouteMatch();

  return (
    <HashRouter>
      <h2>Topics</h2>
      <ul>
        <li>
          <NavLink to="/Theology.js">Theology</NavLink>
        </li>
        <li>
          <NavLink to="/GravelCycling.js">Gravel Cycling</NavLink>
        </li>
        <li>
          <NavLink to="/BackcountrySkiing.js">Backcountry Skiing</NavLink>
        </li>
        <li>
          <NavLink to="/Tenkara.js">Tenkara</NavLink>
        </li>
      </ul>

      <Switch>
        <Route path = "/Theology" component={Theology}>
        <Route path = "/GravelCycling" component={GravelCycling}>
        <Route path = "/BackcountrySkiing" component={BackcountrySkiing}>
        <Route path = "/Tenkara" component={Tenkara}>
          
        </Switch>
    </HashRouter>
  )
}

function Topic() {
  // The <Route> that rendered this component has a
  // path of `/topics/:topicId`. The `:topicId` portion
  // of the URL indicates a placeholder that we can
  // get from `useParams()`.
  let { topicId } = useParams();

  return (
    <div>
      <h3>{topicId}</h3>
    </div>
  );
}
