import React from 'react'
import {useEffect} from 'react';
import Aos from "aos";

const HomeBlurbs = () => {

    useEffect(() => {
       Aos.init({once: true});
    }, [])

    return (
    <div className="container-fluid homeblurbs">
        <div className="row">
            <div className="col-lg-4 blurb marriage-dissolutions-blurb">
                <div data-aos="fade-left">
                    <i class="fad fa-rings-wedding"></i>
                    <h4>Divorce</h4>
                </div>
                <p>Divorces can be stressful. Whether contested or amicable, I take the burden of separation off of your shoulders to find the best solution for you, your assets, your property, and your family.</p>
                <a href="/Divorce"><button className="btn">Get Started</button></a>
            </div>
            <div className="col-lg-4 blurb child-custody-blurb">
                <div data-aos="fade-left">
                    <i class="fad fa-child"></i>
                    <h4>Child Custody</h4>
                </div>
                <p>The custody of a child is never a simple issue during a divorce. Well-versed in child custody, support, and visition rights, I work tirelessly for the best outcome for your children. </p>
                <a href="/Child-Custody"><button className="btn">Learn More</button></a>
            </div>
            <div className="col-lg-4 blurb protection-rights-blurb">
                <div data-aos="fade-left">
                    <i class="fad fa-umbrella"></i>
                    <h4>Protection Rights</h4>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt enim vel interdum fermentum. In lorem neque, mollis eu faucibus vitae, sollicitudin non nisi. Ut sagittis lobortis fringilla. Nam vitae ligula odio. </p>
                <a href="/Protection-Rights"><button className="btn">More Info</button></a>
            </div>
        </div>
    </div>
    )
}

export default HomeBlurbs


