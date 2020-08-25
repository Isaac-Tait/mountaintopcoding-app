import React from 'react';
import Header from './Header.js'
import Image from './Image.js'
import NavBar from './NavBar.js'
import Home from './Home.js'
import Footer from './Footer.js'

function Main() {
    return (
        <div>
            <Header />
            <Image />
            <NavBar />
            <Home /> {/*Disabling this module removes the extra state function on the main page... Why?*/}
            <Footer /> 
        </div>
    )
}

export default Main