import React from 'react';

import Header from './Header.js'
import Image from './Image.js'
import NavBar from './NavBar.js'
import Footer from './Footer.js'
import Home from './Home.js'

function Main() {
    return (
        <div class="bg-gray-500">
            <Header />
            <Image />
            <NavBar />
            <Footer /> 
        </div>
    )
}

export default Main
