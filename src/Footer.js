import React, { useEffect } from 'react'
import Aos from "aos";

const Footer = () => {

    useEffect(() => {
        Aos.init({});
     }, [])


    return (
        <div className="container-fluid">
        <div className="row footer">
            <div className="col-lg-6 col-sm-6 col-md-6">
                <p>Patricia L. Gaddy</p>
               <a href="/About">About</a>
               <a href="/Contact">Contact</a>
               <div className="footerservices">
                   <p>Services</p>
                    <a href="/Child-Custody">Child Custody</a>
                    <a href="/Child-Support">Child Support</a>
                    <a href="/Divorce">Divorce</a>
                    <a href="/Grandparent-Rights">Grandparent Rights</a>
                    <a href="/Marriage-Dissolution">Marriage Dissolution</a>
                    <a href="/Protection-Rights">Protection Rights</a>
                    <a href="/Third-Party-Custody">Third Party Custody</a>
               </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6">
                <a href="https://www.google.com/maps/dir/42.3264256,-83.329024/patricia+l+gaddy/@42.0320206,-83.8182379,10z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x883c7d57cebe0ebb:0xb547d8280a5ec711!2m2!1d-83.7480288!2d41.6733929"><p className="footeraddress">
                    Patricia L Gaddy<br></br>
                    8527 Central Ave<br></br>
                    Sylvania, OH, 43560-9749
                </p></a>
                <i className="fab fa-facebook-square"></i>
            </div>
            <div className="col-lg-12 footercopyright">
                <div className="row">
                    <div className="col-lg-4">
                        <a href="#"><p>Privacy Policy</p></a>
                    </div>
                    <div className="col-lg-4">
                        <p>Copyright Patricia L. Gaddy Law Services. Website by <a href="#">AdrianDC</a></p>
                    </div>
                    <div className="col-lg-4">
                        <a href="#"><p>Legal Disclaimer</p></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Footer
