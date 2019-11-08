import React, { Component } from 'react';

class Fatty extends Component {
    state = {
        firstName: "",
        location: ""
    }    

handleChange(event) {
    const {name} = event.target
    type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
}

render() {
    return (
        <main>
            <input
                type="text"
                value={this.state.firstName}
                name="firstName"
                placeholder="Your first name"
                onChange={this.handleChange}
            />

            <input 
                type="text"
                value={this.state.location}
                name="location"
                placeholder="Where are you from?"
                onChange={this.handleChange}
            />
            
            <h1>mountainTopCoding(&#9968;);</h1>
            <p>Welcome {this.state.firstName} from {this.state.location} to mountainTopCoding(&#9968;);</p>
        </main>
        )
    }
}

export default Fatty