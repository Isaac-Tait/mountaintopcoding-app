import React, {Component} from 'react'

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
                </div>
            )
        }
    }

export default Home