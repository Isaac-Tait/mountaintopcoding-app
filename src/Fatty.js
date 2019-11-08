import React, { Component } from 'react';
import navBar from './navBar.js'

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
        <navBar />
            <input
                type="text"
                value={this.state.firstName}
                name="firstName"
                onChange={this.handleChange}
            /> What is your first name?
<br />
            <input 
                type="text"
                value={this.state.location}
                name="location"
                onChange={this.handleChange}
            /> Where are you from?
<br />
        <p>Welcome {this.state.firstName} from {this.state.location} to mountainTopCoding(&#9968;);</p>
        </main>
        )
    }
}

export default Fatty