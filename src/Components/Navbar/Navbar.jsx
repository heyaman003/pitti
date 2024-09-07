import React, { useState } from 'react';
import './Navbar.css'; // Make sure to add your CSS here

const Navbar = () => {
    const [isActive, setIsActive] = useState(false);

    const handleHamburgerClick = () => {
        setIsActive(!isActive);
    };

    return (
        <div className={`hero ${isActive ? 'is-active' : ''}`}>
            {/* <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                <defs>
                    <symbol viewBox="0 0 60 60" height={"10px"} width={"60"} id="icon-download">
                        <path d="M30 0C13.4 0 0 13.4 0 30s13.4 30 30 30 30-13.4 30-30S46.6 0 30 0zm0 56C16.5 56 4 43.5 4 30S16.5 4 30 4s26 12.5 26 26-12.5 26-26 26zm-5-26V15h10v15h8l-13 13-13-13h8z" />

                    </symbol>


                </defs>
            </svg> */}

            <header id="masthead" role="banner" className={isActive ? 'is-active' : ''}>
                <div className="n-container">

                    <div id="masthead-search">
                        <a href="/"><img src="./homepage/pitti-logo.jpg" alt="" /></a>
                    </div>

                    <button
                        className={`hamburger hamburger--boring ${isActive ? 'is-active' : ''}`}
                        type="button"
                        onClick={handleHamburgerClick}
                    >
                        <span className="hamburger-box">
                            <span className="hamburger-inner"></span>
                        </span>
                        <span className="hamburger-label">Menu</span>
                    </button>



                    <nav id="site-nav" role="navigation" className={isActive ? 'is-active' : ''}>
                        <div className="col">
                            <h4>Corporate Overview</h4>
                            <ul>
                                <li><a href="#">Board of Directors</a></li>
                                <li><a href="#">About Pitti</a></li>
                                <li><a href="#">Wide Array of Offerings</a></li>
                                <li><a href="#">Financial Performance</a></li>
                                <li><a href="#">Accelerating growth inorganically </a></li>
                                <li><a href="#">Management’s Message</a></li>
                                <li><a href="#">Excellence Has No Borders</a></li>
                                <li><a href="#">Engineering the Future with Decades of Excellence</a></li>
                                <li><a href="#">Engineering the Future with Key Stakeholders</a></li>
                                <li><a href="#">Operating Landscape</a></li>
                                <li><a href="#">Operations </a></li>
                                <li><a href="#">Distinguished Clients</a></li>
                                <li><a href="#">Quality</a></li>
                                <li><a href="#">Awards and Accolades</a></li>
                            </ul>
                        </div>

                        <div className="col">
                            <h4>Statutory Reports</h4>
                            <ul>
                                <li><a href="#">Management Discussion and Analysis</a></li>
                                <li><a href="#">Directors’ Report</a></li>
                                <li><a href="#">Business Responsibility & Sustainability Report</a></li>
                                <li><a href="#">Report on Corporate Governance</a></li>
                            </ul>
                        </div>

                        <div className="col">
                            <h4>Financial Statements</h4>
                            <ul>
                                <li><a href="#">Standalone Financial Statements</a></li>
                                <li><a href="#">Consolidated Financial Statements</a></li>
                            </ul>
                        </div>

                        <div className="col">
                            <h4>Notice</h4>
                            <ul>
                                <li><a href="#">40th Annual General Meeting</a></li>
                            </ul>
                        </div>

                        <div className="col">
                            <ul className="social">
                                <li>

                                    {/* <a href="#">
                                        <svg title="LinkedIn">
                                            <use xlinkHref="#icon-download" />
                                        </svg>
                                    </a> */}
                                    <a href="#" class="download-button">
                                        <div className='svg'>
                                    <img src="./homepage/download-pdf.svg" alt="" />
                                        </div>
                                        Download Full Report
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>
        </div>
    );
};

export default Navbar;
