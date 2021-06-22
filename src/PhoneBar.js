import React from 'react'
import logo from './Images/Logo.png'

const PhoneBar = () => {
    return (
        <div className="container-fluid phonebar">
            <div className="row">
                <div className="col-lg-3 hide">
                    <p>Call for free Consultation</p>
                    <a href="tel:5172063935"><h2>517-206-3935</h2></a>
                </div>
                <div className="col-lg-6">
                   <a href="/"><img src={logo}></img></a>
                </div>
                <div className="col-lg-3 consultation">
                    <p>Call for free Consultation</p>
                    <a href="tel:5172063935"><h2>517-206-3935</h2></a>
                </div>
            </div>
        </div>
    )
}

export default PhoneBar

