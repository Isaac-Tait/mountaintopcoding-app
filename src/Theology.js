import React, {Component} from 'react';
import EpicSunset from "./img/Theology.jpg"

class Theology extends Component {
    render() {
        return (
            <div class="bg-pink-200">
                <img
                    class="h-56 rounded-full"
                    src={EpicSunset}
                    alt="A glimpse of heaven from Oceanside, CA during an epic sunset after a wild storm June 2019"
                />
                <p class="pt-4">
                "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was 
                born and I will give you a complete account of the system, and expound the actual teachings of the 
                great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids 
                pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure 
                rationally encounter consequences that are extremely painful. Nor again is there anyone who loves 
                or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances 
                occur in which toil and pain can procure them some great pleasure. To take a trivial example, 
                which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? 
                But who has any right to find fault with a person who chooses to enjoy a pleasure that has no annoying 
                consequences, or one who avoids a pain that produces no resultant pleasure?"
                </p>
            </div>
        )
    }
}

export default Theology
