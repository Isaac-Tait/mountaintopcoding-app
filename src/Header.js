import React from 'react';
import { 
    Route, 
    NavLink, 
    HashRouter 
} from "react-router-dom";

function Header() {
    return (
        <HashRouter>
            <NavLink 
                class="h-14 w-full text-center bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 md:text-5xl tracking-wider font-mono"
                to="/" 
            >mountainTopCoding(<span role="img" aria-label="mountain with snow-cap">&#127956;</span>);
            </NavLink>
            <div>
                <Route exact path="/"/>
            </div>
        </HashRouter>
    )
}

export default Header 