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
              <NavLink to="/"><span role="img" aria-label="Home with garden">&#127969;</span> - Home</NavLink>
            </li>
            <li>
              <NavLink to="/About"><span role="img" aria-label="Question mark">&#10067;</span> - About</NavLink>
            </li>
            <li>
              <NavLink to="/Theology"><span role="img" aria-label="Scroll">&#128220;</span> - Theology</NavLink>
            </li>
            <li>
              <NavLink to="/GravelCycling"><span role="img" aria-label="Man bicycling">&#128692;</span> - Gravel Cycling</NavLink>
            </li>
            <li>
              <NavLink to="/BackcountrySkiing"><span role="img" aria-label="Skier">&#9975;</span> - Backcountry Skiing</NavLink>
            </li>
            <li>
              <NavLink to="/Tenkara"><span role="img" aria-label="Fishing pole with a fish">&#127907;</span> - Tenkara</NavLink>
            </li>
            <li>
              <NavLink to="/Coding"><span role="img" aria-label="DNA">&#129516;</span> - Coding</NavLink>
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