import React, { Component } from 'react';

class Fatty extends Component {
    state = {
        firstName: "",
        location: ""
    }    

render() {
    return (
        <main>
            <h1>mountainTopCoding(&#9968;);</h1>
            <p>Welcome {this.state.firstName} from {this.state.location} to mountainTopCoding(&#9968;);</p>
        </main>
        )
    }
}

export default Fatty