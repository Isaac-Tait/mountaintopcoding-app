import React from 'react'

function Home() {
    return (
        <div>
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
        </div>
    )
}

export default Home