import React, {Component} from 'react';
import './style.css';

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

                    <h3>Contact</h3>
                    <a href="mailto:isaac@mountaintopcoding.com">Email</a>
                    <br />
                    <a href="https://twitter.com/Isaac_Tait_83">Twitter</a>
                    <br />
                    <a href="https://github.com/Isaac-Tait">GitHub</a>
                </div>
            )
        }
    }

export default Home