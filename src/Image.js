import React from "react"
import Mountain from './img/mTC.jpg'

function Image() {
    return (
        <div>
            <img 
                class="h-56 md:rounded-full mx-auto"
                src={Mountain}
                alt="Mount Baldy's north flank viewed from Pine Peak near Los Angeles, California."
            />
        </div>
    )
}

export default Image