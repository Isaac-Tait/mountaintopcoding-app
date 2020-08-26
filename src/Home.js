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
                    <p class="mt-6 p-2">Welcome <span class="text-red-500">{this.state.firstName ? this.state.firstName : "_______"}</span> from <span class="text-red-500">{this.state.location ? this.state.location : "________"}</span> to my portfolio site - mountainTopCoding(<span role="img" aria-label="mountain with snow-cap">&#127956;</span>);</p>
                    <p class="mt-10 p-2">Lorem ipsum dolor sit amet, an mel eligendi argumentum, ea eum veri oblique omittam. Cu utinam facilisis sed, usu ex voluptatum temporibus, sed prima iriure consectetuer ex. 
                        Ornatus disputando est at. Mucius noster expetendis te vim, vocent splendide at nam, in officiis similique his. Vim liberavisse concludaturque te, an omnis appareat vim, 
                        usu ex possim sententiae. Qui et inani accusata moderatius. Ut ignota disputationi usu, eam te explicari percipitur.
                        Ut est meliore vocibus. Accusamus patrioque mei cu. Vel an antiopam gubergren. Dolor dolorum ceteros pri ne, eos id adhuc iisque ancillae, quo verterem rationibus ex. 
                        Ad qui debet vivendo definitiones.
                    </p>
                </div>
            )
        }
    }

export default Home