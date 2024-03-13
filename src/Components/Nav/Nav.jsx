import React from "react";
import { Link } from "react-router-dom";
import './Nav.css';

const Nav = () => {
    return (
        <div className="nav-container-wrapper">
            <div className="nav-wrapper-left">
                <div className="nav-values">
                    Home
                </div>
                <div className="nav-values">
                    About
                </div>
                <div className="nav-values">
                    Contact us
                </div>
            </div>
            <div className="nav-wrapper-right">
                <div className="">
                    <input type="text" />
                </div>
            </div>
        </div>
    )
}

export default Nav;