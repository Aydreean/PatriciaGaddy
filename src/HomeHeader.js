import React, { Component } from 'react'
import anime from 'animejs/lib/anime.es.js';
import AnchorLink from 'react-anchor-link-smooth-scroll';

export default class HomeHeader extends Component {

    componentDidMount() {
        var textWrapper = document.querySelector('.ml3');
        var textWrapper2 = document.querySelector('.ml31');
        console.log(textWrapper);
        console.log(textWrapper2);
        textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
        textWrapper2.innerHTML = textWrapper2.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
        anime.timeline({loop: 0})
        .add({
            targets: '.ml3 .letter',
            opacity: [0,1],
            easing: "easeInOutQuad",
            duration: 2000,
            delay: (el, i) => 100 * (i+1)
        })
        .add({
            targets: '.ml31 .letter',
            opacity: [0,1],
            easing: "easeInQuad",
            duration: 500,
            delay: (el, i) => 25 * (i+1)
        })
    }
    render() {
        return (
        <header className="masthead">
            <div className="container-fluid h-100">
                <div className="row h-100 align-items-center">
                    <div className="col-8">
                        <h1 className="ml3">Your Partner in Family Law</h1>
                        <p className="ml31">Compassionate solutions for the most difficult of times</p>
                        <AnchorLink href="#form"><button>Request Consultation</button></AnchorLink>
                    </div>
                </div>
            </div>
        </header>
        )
    }
}

