import React, {Component} from 'react';
import HomeOffice from './img/HomeOffice.jpg'
class Coding extends Component {
    render() {
        return (
            <div>
                <img
                    class="h-56 rounded-full pt-6"
                    src={HomeOffice}
                    alt="My home office setup"
                />
                <p class="pt-4">#dayOneChallenge</p>
                    <iframe 
                        height={265} 
                        style={{width: '100%'}} 
                        scrolling="no" 
                        title="Ying Yang" 
                        src="https://codepen.io/isaac-tait/embed/preview/BaywrNQ?height=265&theme-id=default&default-tab=css,result" 
                        frameBorder="no" 
                        allowTransparency="true" 
                        allowFullScreen="true"
                    >
                        <span>See the Pen 
                            <a href='https://codepen.io/isaac-tait/pen/BaywrNQ'>Ying Yang</a>by Isaac Tait
                            (<a href='https://codepen.io/isaac-tait'>@isaac-tait</a>) on <a href='https://codepen.io'>CodePen</a></span>.
                    </iframe>

                <p>#dayTwoChallenge</p>
                    <iframe 
                        height={265} 
                        style={{width: '100%'}} 
                        scrolling="no" 
                        title="Kilometer/Mile Splits Calculator" 
                        src="https://codepen.io/isaac-tait/embed/rNabNgY?height=265&theme-id=default&default-tab=html,result" 
                        frameBorder="no" 
                        allowTransparency="true" 
                        allowFullScreen="true"
                    >
                        <span>See the Pen <a href='https://codepen.io/isaac-tait/pen/rNabNgY'>Kilometer/Mile Splits Calculator</a> by Isaac Tait
                        (<a href='https://codepen.io/isaac-tait'>@isaac-tait</a>) on <a href='https://codepen.io'>CodePen</a></span>.
                    </iframe>
            </div>
        )
    }
}

export default Coding