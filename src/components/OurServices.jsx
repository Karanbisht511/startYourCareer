import { useState } from "react";
import yellowCardIcon from ".././images/card_icon.svg";
import whiteCardIcon from '.././images/white_card_icon.svg';

function OurServices() {

    const [showWhiteIcon, setShowWhiteIcon] = useState(true)
    const [showYellowIcon,setYellowIcon]=useState(false)

    return <>
        <div id="our-services" className="grid-item" >
            <h1 className="primary main-heading">Our Services</h1>
            <div className="services-container">
                <div onMouseOver={() => { console.log("mouseOVer")}} onMouseDown={() => {console.log('mouseDown')}} className="services-item">
                    <div>
                        {/* <img src={card} alt="" className="services-icon" /> */}
                    </div>
                    <div>
                        <div>College Application Resource </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        </p>
                    </div>
                </div>

                <div onMouseOver={() => { setShowWhiteIcon(true) }} onMouseDown={() => { setShowWhiteIcon(false) }} className="services-item" >
                    <div>
                        {/* <img src={showWhiteIcon ? whiteCardIcon : card} alt="" className="services-icon" /> */}
                    </div>
                    <div>
                        <div>College Application Resource </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                    </div>
                </div>

                <div onMouseOver={() => { setShowWhiteIcon(true) }} onMouseDown={() => { setShowWhiteIcon(false) }} className="services-item">
                    <div>
                        {/* <img src={showWhiteIcon ? whiteCardIcon : card} alt="" className="services-icon" /> */}
                    </div>
                    <div>
                        <div>College Application Resource </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                    </div>
                </div>

                <div onMouseOver={() => { setShowWhiteIcon(true) }} onMouseDown={() => { setShowWhiteIcon(false) }} className="services-item">
                    <div>
                        {/* <img src={showWhiteIcon ? whiteCardIcon : card} alt="" className="services-icon" /> */}
                    </div>
                    <div>
                        <div>College Application Resource </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                    </div>
                </div>
            </div >
        </div >
    </>;
}

export default OurServices;