import React, { useState } from 'react';
import './Navbar.css'; // Make sure to add your CSS here
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isActive, setIsActive] = useState(false);

    const handleHamburgerClick = () => {
        setIsActive(!isActive);
    };

    const closeMenu = () => {
        setIsActive(false); // Close the menu when any link is clicked
    };

    return (
        <div className={`hero ${isActive ? 'is-active' : ''}`}>
            <header id="masthead" role="banner" className={isActive ? 'is-active' : ''}>
                <div className="n-container">
                    <div id="masthead-search">
                        <Link to="/" onClick={closeMenu}>
                            <img src="./homepage/pitti-logo.jpg" alt="" />
                        </Link>
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
                                <li><Link to="/" onClick={closeMenu}>Home</Link></li>
                                <li><Link to="/financial" onClick={closeMenu}>Financial Performance</Link></li>
                                <li><Link to="/accelerating-growth" onClick={closeMenu}>Accelerating growth inorganically</Link></li>
                                <li><Link to="/management-message" onClick={closeMenu}>Management’s Message</Link></li>
                                <li><Link to="/excellence" onClick={closeMenu}>Excellence Has No Borders</Link></li>
                                <li><Link to="/engineering-future-stakeholder" onClick={closeMenu}>Engineering the Future with Decades of Excellence</Link></li>
                                <li><Link to="/engineering-excellence" onClick={closeMenu}>Engineering the Future with Key Stakeholders</Link></li>
                                <li><Link to="/operating-landscape" onClick={closeMenu}>Operating Landscape</Link></li>
                                <li><Link to="/operations" onClick={closeMenu}>Operations</Link></li>
                                <li><Link to="/distinguished-clients" onClick={closeMenu}>Distinguished Clients</Link></li>
                                <li><Link to="/quality" onClick={closeMenu}>Quality</Link></li>
                                <li><Link to="/awards" onClick={closeMenu}>Awards and Accolades</Link></li>
                            </ul>
                        </div>
                        <div className="col">
                            <h4>Statutory Reports</h4>
                            <ul>
                                <li><Link to="./docs/MDA.pdf" target='_blank' onClick={closeMenu}>Management Discussion and Analysis</Link></li>
                                <li><Link to="./docs/Director's Report.pdf" target='_blank' onClick={closeMenu}>Directors’ Report</Link></li>
                                <li><Link to="./docs/BRSR.pdf" target='_blank' onClick={closeMenu}>Business Responsibility & Sustainability Report</Link></li>
                                <li><Link to="./docs/Corporate Governance.pdf" target='_blank' onClick={closeMenu}>Report on Corporate Governance</Link></li>
                            </ul>
                        </div>
                        <div className="col">
                            <h4>Financial Statements</h4>
                            <ul>
                                <li><Link to="./docs/Standalone balance sheet.pdf" target='_blank' onClick={closeMenu}>Standalone Financial Statements</Link></li>
                                <li><Link to="./docs/Consolidated balance sheet.pdf" target='_blank' onClick={closeMenu}>Consolidated Financial Statements</Link></li>
                            </ul>
                        </div>
                        <div className="col">
                            <h4>Notice</h4>
                            <ul>
                                <li><Link to="./docs/Notice.pdf" target='_blank' onClick={closeMenu}>40th Annual General Meeting</Link></li>
                            </ul>
                        </div>
                        <div className="col">
                            <ul className="social">
                                <li>
                                    <Link to="./docs/PITTI AR 2023-24.pdf" target='_blank' className="download-button" onClick={closeMenu}>
                                        <div className='svg'>
                                            <img src="./homepage/download-pdf.svg" alt="" />
                                        </div>
                                        Download Full Report
                                    </Link>
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
