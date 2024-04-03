import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AppContext from "../../AppContainer/context";
import './Nav.css';

const Nav = () => {

    const [inputValue, setInputValue] = useState("");
    const [debouncedValue, setDebouncedValue] = useState("");
    const context = useContext(AppContext);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setDebouncedValue(inputValue);
        }, 1000);
        return () => clearTimeout(timeoutId);
    }, [inputValue])

    useEffect(() => {
        context.setState(debouncedValue);
    }, [debouncedValue])

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
                    <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                </div>
            </div>
        </div>
    )
}

export default Nav;