import React from "react"
import Mountain from './img/mTC.jpg'

function Image() {
    return (
        <div>
            <img 
                class="h-64 mt-6 mb-6 md:rounded-full mx-auto"
                src={Mountain}
                alt="Mount Baldy's north flank viewed from Pine Peak near Los Angeles, California."
            />
        </div>
    )
}

export default Image