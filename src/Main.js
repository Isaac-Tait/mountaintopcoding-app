import React from 'react';
import NavBar from './NavBar.js'
import Header from './Header.js'

function Main() {
    return (
        <div class="h-14 bg-gradient-to-r from-orange-400 via-red-500 to-pink-500">
            <Header />
            <NavBar />
        </div>
        )
}

export default Main