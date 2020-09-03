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
        <div class="">
          <p class="text-3xl pl-8 sm:w-full bg-orange-400 lg:bg-pink-200">Topics</p>
            <ul class="lg:flex">
              <li class="lg:-mb-px mr-1">
                <NavLink class="bg-pink-200 inline-block lg:bg-orange-400 lg:border-l lg:border-t lg:border-r lg:rounded-t lg:py-2 lg:px-4 font-semibold text-black hover:text-blue-800 w-32" to="/"><span role="img" aria-label="Home with garden">&#127969;</span> - Home</NavLink>
              </li>
              <li class="lg:mr-1">
                <NavLink class="bg-pink-200 inline-block lg:bg-orange-400 lg:border-l lg:border-t lg:border-r lg:rounded-t lg:py-2 lg:px-4 font-semibold text-black hover:text-blue-800 w-32"to="/About"><span role="img" aria-label="Question mark">&#10067;</span> - About</NavLink>
              </li>
              <li class="lg:mr-1">
                <NavLink class="bg-pink-200 inline-block lg:bg-orange-400 lg:border-l lg:border-t lg:border-r lg:rounded-t lg:py-2 lg:px-4 font-semibold text-black hover:text-blue-800 w-40" to="/Theology"><span role="img" aria-label="Scroll">&#128220;</span> - Theology</NavLink>
              </li>
              <li class="lg:mr-1">
                <NavLink class="bg-pink-200 inline-block lg:bg-orange-400 lg:border-l lg:border-t lg:border-r lg:rounded-t lg:py-2 lg:px-4 font-semibold text-black hover:text-blue-800 w-60" to="/GravelCycling"><span role="img" aria-label="Man bicycling">&#128692;</span> - Gravel Cycling</NavLink>
              </li>
              <li class="lg:mr-1">
                <NavLink class="bg-pink-200 inline-block lg:bg-orange-400 lg:border-l lg:border-t lg:border-r lg:rounded-t lg:py-2 lg:px-4 font-semibold text-black hover:text-blue-800 w-60" to="/BackcountrySkiing"><span role="img" aria-label="Skier">&#9975;</span> - Backcountry Skiing</NavLink>
              </li>
              <li class="lg:mr-1">
                <NavLink class="bg-pink-200 inline-block lg:bg-orange-400 lg:border-l lg:border-t lg:border-r lg:rounded-t lg:py-2 lg:px-4 font-semibold text-black hover:text-blue-800 w-40" to="/Tenkara"><span role="img" aria-label="Fishing pole with a fish">&#127907;</span> - Tenkara</NavLink>
              </li>
              <li class="lg:mr-1">
                <NavLink class="bg-pink-200 inline-block lg:bg-orange-400 lg:border-l lg:border-t lg:border-r lg:rounded-t lg:py-2 lg:px-4 font-semibold text-black hover:text-blue-800 w-40" to="/Coding"><span role="img" aria-label="DNA">&#129516;</span> - Coding</NavLink>
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