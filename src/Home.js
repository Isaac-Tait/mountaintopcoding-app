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
                    <p class="mt-6 ml-2">Welcome <span class="text-red-500">{this.state.firstName}</span> from <span class="text-red-500">{this.state.location}</span> to my portfolio site - mountainTopCoding(&#9968;);</p>
                    <div>
                        <h3 class="text-3xl bg-pink-500 pl-8">Contact</h3>
                        <a 
                            href="mailto:isaac@mountaintopcoding.com"
                            class="font-bold text-red-600 ml-8 pl-2"
                        >Email </a>
                        <a 
                            href="https://twitter.com/Isaac_Tait_83"
                            class="font-bold text-blue-600 pl-2"
                        >Twitter </a>
                        <a 
                            href="https://github.com/Isaac-Tait"
                            class="font-bold text-green-600 pl-2"
                        >GitHub</a>
                    </div>
                </div>
            )
        }
    }

export default Home