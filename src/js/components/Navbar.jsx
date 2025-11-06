import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar  bg-secondary navbar-expand-lg">
            <div className="container px-4 d-flex align-items-center">

                <a href="#" className="navbar-brand text-light fw-bold fs-4">MLB</a>

                <div className="d-flex align-items-center gap-4 ms-auto f-bold">
                    <a href="#" className="nav-link text-light">Home</a>
                    <a href="#" className="nav-link text-light">News</a>
                    <a href="#" className="nav-link text-light">Standings</a>
                    <a href="#" className="nav-link text-light">Stats</a>
                    <a href="#" className="nav-link text-light">Contact</a>
                </div>

            </div>
        </nav>
    );
};

export default Navbar; 