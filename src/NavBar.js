import React, {Component} from "react"
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom"

import Home from './Home.js'
import Theology from './Theology.js'
import GravelCycling from './GravelCycling.js'
import BackcountrySkiing from './BackcountrySkiing.js'
import Tenkara from './Tenkara.js'

class NavBar extends Component {
  
  render() {
    return (
      <div>
      <img className="image" src="https://mountaintop-coding.s3-us-west-1.amazonaws.com/images/Mountain+Top.JPG"alt="Mt. Baldy as seen from Pine Peak near Los Angeles"/>
      <HashRouter>
        <h2>Topics</h2>
        <ul className="header">
          <li>
            <NavLink to="/Home">Home</NavLink>
          </li>
          <li>
            <NavLink to="/Theology">Theology</NavLink>
          </li>
          <li>
            <NavLink to="/GravelCycling">Gravel Cycling</NavLink>
          </li>
          <li>
            <NavLink to="/BackcountrySkiing">Backcountry Skiing</NavLink>
          </li>
          <li>
            <NavLink to="/Tenkara">Tenkara</NavLink>
          </li>
        </ul>
  
        <div className="content">
          <Route exact path = "/Home" component={Home}/>
          <Route path = "/Theology" component={Theology}/>
          <Route path = "/GravelCycling" component={GravelCycling}/>
          <Route path = "/BackcountrySkiing" component={BackcountrySkiing}/>
          <Route path = "/Tenkara" component={Tenkara}/>
            
          </div>
      </HashRouter>
      </div>
    )
  }
}

export default NavBar