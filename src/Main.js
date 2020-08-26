import React from 'react';

import Header from './Header.js'
import Image from './Image.js'
import NavBar from './NavBar.js'
//{import Home from './Home.js'}

function Main() {
    return (
        <div class="h-screen flex flex-col bg-pink-200">
            
                <Header />
            
                <Image />
            
                <NavBar />
        <div class="bg-pink-200 text-center">
            <p class="text-4xl mt-10 bg-pink-500 w-full">Contact</p>
            <a 
                class="font-bold text-red-600 pl-2 hover:text-red-900 w-20"
                href="mailto:isaac@mountaintopcoding.com?subject=I%20am%20contacting%20you%20through%20your%20portfolio%20site&body=Hi%20Isaac,"
                rel="noopener noreferrer"
            >Email </a>
            <a 
                class="external link font-bold text-blue-600 pl-2 hover:text-blue-900 w-20"
                href="https://twitter.com/Isaac_Tait_83"
                target="_blank" 
                rel="noopener noreferrer"
            >Twitter </a>
            <a 
                class="external link font-bold text-green-600 pl-2 hover:text-green-900 w-20"
                href="https://github.com/Isaac-Tait"
                target="_blank"  
                rel="noopener noreferrer"
            >GitHub</a>
        </div>
        </div>
    )
}

export default Main
