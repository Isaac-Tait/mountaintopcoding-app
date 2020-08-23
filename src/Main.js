import React from 'react';
import NavBar from './NavBar.js'
import Header from './Header.js'

function Main() {
    return (
        <div class="h-24 bg-gradient-to-r from-orange-400 via-red-500 to-pink-500">
            <Header />
            <NavBar />
            
            <link rel="me" href="https://twitter.com/Isaac_Tait_83" />
            <link rel="me" href="https://github.com/Isaac-Tait" />
        </div>
        )
}

export default Main