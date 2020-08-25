import React from "react"

function Footer() {
    return (
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
    )
}

export default Footer