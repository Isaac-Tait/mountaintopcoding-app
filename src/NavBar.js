import React from "react"
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom"

import Home from './Home.js'
import About from './About.js'
import Theology from './Theology.js'
import GravelCycling from './GravelCycling.js'
import BackcountrySkiing from './BackcountrySkiing.js'
import Tenkara from './Tenkara.js'
import Coding from './Coding.js'

function NavBar() {
    return (
      <HashRouter class="">
        <div>
          <p class="bg-orange-400 text-3xl pl-8">Topics</p>
            <ul class="pl-12">
              <li class="text-black hover:text-blue-800 w-20">
                <NavLink to="/"><span role="img" aria-label="Home with garden">&#127969;</span> - Home</NavLink>
              </li>
              <li class="text-black hover:text-blue-800 w-20">
                <NavLink to="/About"><span role="img" aria-label="Question mark">&#10067;</span> - About</NavLink>
              </li>
              <li class="text-black hover:text-blue-800 w-32">
                <NavLink to="/Theology"><span role="img" aria-label="Scroll">&#128220;</span> - Theology</NavLink>
              </li>
              <li class="text-black hover:text-blue-800 w-40">
                <NavLink to="/GravelCycling"><span role="img" aria-label="Man bicycling">&#128692;</span> - Gravel Cycling</NavLink>
              </li>
              <li class="text-black hover:text-blue-800 w-48">
                <NavLink to="/BackcountrySkiing"><span role="img" aria-label="Skier">&#9975;</span> - Backcountry Skiing</NavLink>
              </li>
              <li class="text-black hover:text-blue-800 w-24">
                <NavLink to="/Tenkara"><span role="img" aria-label="Fishing pole with a fish">&#127907;</span> - Tenkara</NavLink>
              </li>
              <li class="text-black hover:text-blue-800 w-324">
                <NavLink to="/Coding"><span role="img" aria-label="DNA">&#129516;</span> - Coding</NavLink>
              </li>
            </ul>
            <div>
              <Route exact path="/" component={Home}/>
              <Route path="/About" component={About}/>
              <Route path="/Theology" component={Theology}/>
              <Route path="/GravelCycling" component={GravelCycling}/>
              <Route path="/BackcountrySkiing" component={BackcountrySkiing}/>
              <Route path="/Tenkara" component={Tenkara}/>
              <Route path="/Coding" component={Coding}/>
            </div>
          </div>
      </HashRouter>
    )
}

export default NavBar

// Tutorial: https://www.kirupa.com/react/creating_single_page_app_react_using_react_router.htm