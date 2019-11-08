import React, { Component } from 'react';
import NavBar from './NavBar.js'
import Header from './Header.js'

class Fatty extends Component {
    state = {
        firstName: "",
        location: ""
    }    

handleChange = (event) => {
    const {name, value} = event.target
    this.setState({
        [name]: value
    })
}

render() {
    return (
        <main>
            <Header />
            <NavBar />
            <Home />
            
        </main>
        )
    }
}

export default Fatty