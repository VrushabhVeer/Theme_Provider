import React from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Navbar = () => {
    const { isLight, toggleTheme } = useContext(ThemeContext);

    return (
        <div>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Masai</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Features</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Courses</a>
                            </li>
                        </ul>
                        <span className="navbar-text">
                            <button type="button" class="btn btn-sm btn-light" onClick={toggleTheme}>{`${isLight ? "🌙" : "🌞"}`}</button>
                            <a className="nav-link" href="#">Log In</a>
                            <a className="nav-link" href="#">Contact Us</a>
                        </span>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;