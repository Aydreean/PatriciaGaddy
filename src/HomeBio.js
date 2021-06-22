import React, {useEffect} from 'react'

import Aos from "aos";

const HomeBio = () => {

    useEffect(() => {
       Aos.init();
    }, [])

    return (
    <div className="container-fluid">
        <div className="row">
            <div className="col-lg-12 homebio">
                <div>
                    <h3 data-aos="fade-down">Peace of Mind</h3>
                    <h4>I am dedicated to helping you make informed, rational decisions during highly charged and emotional times. <br/><br/>I put my time and talents to work for you utilizing all available resources — including in and out-of-court solutions — to obtain the best possible outcome for you and your loved ones.</h4>
                </div>
            </div>
        </div>
    </div>
    )
}

export default HomeBio
