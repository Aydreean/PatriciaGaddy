import React from 'react'
import {useEffect} from 'react'
import Aos from "aos";
const HomeBio2 = () => {

    useEffect(() => {
       Aos.init({once: true});
    }, [])

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="homebio2">
                    <div>
                        <div className="col-lg-12 biospecialize">
                        <h3>What I Offer </h3>
                            <h4>I specialize in all areas of Family Law. Committed, knowledgeable, compassionate, and directly accessible, I focus on protecting your interests. I offer a wide range of family law services, including: </h4>
                            <ul>
                                <a href="#"><li>Child Custody</li></a>
                                <li>Child Support</li>
                                <li>Divorce</li>
                                <li>Grandparent Rights</li>
                                <li>Protection Rights</li>
                                <li>Third Party Rights</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeBio2
