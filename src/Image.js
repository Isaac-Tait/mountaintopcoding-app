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
            <p class="font-semibold flex justify-center text-lg">
                <span role="img" aria-label="waving hand">&#128075;&nbsp;&#128075;&nbsp;</span>
                This is my old site, left here for posterity sake - go check out&nbsp;<a href="https://mountaintopcoding.dev" rel="noopener noreferrer" class="underline text-red-500">mountaintopcoding.dev</a>&nbsp;to see the new site.
            </p>
        </div>
    )
}

export default Image