import React, {Component} from 'react';

class Home extends Component {
    constructor() {
        super()
            this.state ={
                firstName: "",
                location: ""
            }
            this.handleChange = this.handleChange.bind(this)
        }

        handleChange(event) {
            const { name, value } = event.target
            this.setState({
                [name]: value
            })
        }

        render() {
            return (
                <div>
                  <input
                        class="mt-8 ml-2"
                        type="text"
                        value={this.state.firstName}
                        name="firstName"
                        onChange={this.handleChange}
                        placeholder="What is your first name?"
                    /> 
                    <br />
                    <input 
                        class="mt-4 ml-2"
                        type="text"
                        value={this.state.location}
                        name="location"
                        onChange={this.handleChange}
                        placeholder="Where are you from?"
                    /> 
                    <br />
                    <p class="mt-6 ml-2">Welcome <span class="text-red-500">{this.state.firstName ? this.state.firstName : "_______"}</span> from <span class="text-red-500">{this.state.location ? this.state.location : "________"}</span> to my portfolio site - mountainTopCoding(<span role="img" aria-label="mountain with snow-cap">&#127956;</span>);</p>
                </div>
            )
        }
    }

export default Home