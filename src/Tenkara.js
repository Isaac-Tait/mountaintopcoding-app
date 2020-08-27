import React, {Component} from 'react';
import TenkaraPhoto from './img/Tenkara.jpg'

class Tenkara extends Component {
    render() {
        return (
            <div class="bg-pink-200">
                <p class="mt-12">
                    Please visit my site 
                    <a 
                        href="http://www.fallfishtenkara.com" 
                        target="_blank" 
                        class="text-blue-600" 
                        rel="noopener noreferrer"
                    > Fallfish Tenkara, </a>for a three plus year recollection of my tenkara adventures in "The Land of the Rising Sun". 
                </p>
                <img
                    class="h-56 rounded-full pt-6"
                    src={TenkaraPhoto}
                    alt=""
                />
            </div>
        )
    }
}

export default Tenkara
