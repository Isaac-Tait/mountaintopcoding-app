import React from 'react';

import Header from './Header.js'
import Image from './Image.js'
import NavBar from './NavBar.js'
import Footer from './Footer.js'
//{import Home from './Home.js'}

function Main() {
    return (
        <div class="container w-3/4 mx-auto bg-pink-200">
            <Header />
            <Image />
            <NavBar />
            <Footer /> 
        </div>
    )
}

export default Main
