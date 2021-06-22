import React from 'react'

function colorBackground() {
    var scrollTop = window.scrollTop;
    if (scrollTop > 30) {
        console.log("hey");
    }
}

colorBackground();

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg sticky-top navbar-dark">
            <div className="container">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="true" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <a className="nav-link" href="/About">About</a>
                    </li>
                    <li className="nav-item">
                        <div class="dropdown">
                                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-toggle="dropdown" aria-expanded="false">
                                    Services
                                </button>
                                <ul class="dropdown dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><a class="dropdown-item" href="/Child-Custody">Child Custody</a></li>
                                    <li><a class="dropdown-item" href="/Child-Support">Child Support</a></li>
                                    <li><a class="dropdown-item" href="/Divorce">Divorce</a></li>
                                    <li><a class="dropdown-item" href="/Grandparent-Rights">Grandparent Rights</a></li>
                                    <li><a class="dropdown-item" href="/Marriage-Dissolution">Marriage Dissolution</a></li>
                                    <li><a class="dropdown-item" href="/Protection-Rights">Protection Rights</a></li>
                                    <li><a class="dropdown-item" href="/Third-Party-Custody">Third Party Custody</a></li>
                                </ul>
                        </div>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/Contact">Contact</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
