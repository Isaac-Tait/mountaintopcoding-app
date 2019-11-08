import React, { Component } from 'react';

class Fatty extends Component {
    state = {
        firstName: "",
        location: ""
    }    

handleChange(event) {
    const {name, value, type} = event.target
    type === "checkbox" ? state({ [name]: checked }) : state({ [name]: value })
}

render() {
    return (
        <main>
            <input
                type="text"
                value={state.firstName}
                name="firstName"
                onChange={this.handleChange}
            /> What is your first name?

            <input 
                type="text"
                value={state.location}
                name="location"
                onChange={this.handleChange}
            /> Where are you from?

            <h1>mountainTopCoding(&#9968;);</h1>
            <p>Welcome {this.state.firstName} from {this.state.location} to mountainTopCoding(&#9968;);</p>
        </main>
        )
    }
}

export default Fatty