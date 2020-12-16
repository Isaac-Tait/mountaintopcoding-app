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
                <div class="bg-pink-200">
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
                    <p class="mt-6 ml-4">Welcome <span class="text-red-500">{this.state.firstName ? this.state.firstName : "_______"}</span> from <span class="text-red-500">{this.state.location ? this.state.location : "________"}</span> to my portfolio site - mountainTopCoding(<span role="img" aria-label="mountain with snow-cap">&#127956;</span>);</p>
                    <p class="mt-10 ml-4">For a long time now I have wanted to start my own coding blog. Awhile back I was having some problems with another one of my projects and the support team who helped resolve my issue pointed to me to their Hashnode community. I had never heard of Hashnode before so I went and checked it out. Not only is it a cool community of like minded hackers but they had a very cool solution for setting up your own blog.</p> 
                    <p class="mt-8 ml-4">So, I gave it a shot and rather effortlessly I was able to setup my very own coding blog!</p> 
                    <p class="mt-8 ml-4">Check out the official mountainTopCoding(&#127956;); blog <span class="text-red-500"><a href="https://blog.mountaintopcoding.com" target="_blank" rel="noopener noreferrer">here</a></span>!</p>
                </div>
            )
        }
    }

export default Home