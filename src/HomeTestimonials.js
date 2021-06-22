import React from 'react'
import {useEffect} from 'react'
import Aos from "aos";

const HomeTestimonials = () => {

    useEffect(() => {
       Aos.init({duration: 1000, once: true});
    }, [])

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12 hometestimonials">
                    <div>
                        <h2>Client Words</h2>
                        <h3 data-aos="fade-left"><quote>“If you need a lawyer who is going to believe in what they do, and be passionate about your case and your family stop what you are doing right now and hire her immediately”</quote></h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeTestimonials
