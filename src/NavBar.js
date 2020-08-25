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
import About from './About.js'
import Coding from './Coding.js'

class NavBar extends Component {
  
  render() {
    return (
      <div class="bg-gray-300 bg-opacity-100">
        <img 
          class="md:rounded-full mx-auto"
          src="https://mountaintop-coding.s3-us-west-1.amazonaws.com/images/Mountain+Top.JPG"
          alt="Mount Baldy's north flank viewed from Pine Peak near Los Angeles, California."
        />

        <HashRouter>
          
        <h2 class="bg-orange-400 text-3xl pl-8">Topics</h2>
          <ul class="pl-12">
            <li class="mt-6">
              <NavLink to="/">&#127969; - Home</NavLink>
            </li>
            <li>
              <NavLink to="/About">&#10067; - About</NavLink>
            </li>
            <li>
              <NavLink to="/Theology">&#128220; - Theology</NavLink>
            </li>
            <li>
              <NavLink to="/GravelCycling">&#128692; - Gravel Cycling</NavLink>
            </li>
            <li>
              <NavLink to="/BackcountrySkiing">&#9975; - Backcountry Skiing</NavLink>
            </li>
            <li>
              <NavLink to="/Tenkara">&#127907; - Tenkara</NavLink>
            </li>
            <li>
              <NavLink to="/Coding">&#129516; - Coding</NavLink>
            </li>
          </ul>
          <div>
            <Route exact path = "/" component={Home}/>
            <Route path = "/About" component={About}/>
            <Route path = "/Theology" component={Theology}/>
            <Route path = "/GravelCycling" component={GravelCycling}/>
            <Route path = "/BackcountrySkiing" component={BackcountrySkiing}/>
            <Route path = "/Tenkara" component={Tenkara}/>
            <Route path = "/Coding" component={Coding}/>
          </div>
        </HashRouter>
      </div>
    )
  }
}

export default NavBar

// Tutorial: https://www.kirupa.com/react/creating_single_page_app_react_using_react_router.htm