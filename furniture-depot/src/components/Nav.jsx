import { Link } from "react-router-dom";
import React from "react";

export default function Nav () {
    return (
        <nav className="navbar">
            <div className="links">
                <button id="home">
                <Link to='/'>Home</Link>
                </button>
                <button id="livrom">
                <Link to='/Categories/2'>LIVING ROOM</Link> 
                </button>
                <button id="dinrom">
                <Link to='/Dining'>DINING ROOM</Link>
                </button>
                <button id="bedrom">
                <Link to='/Bed'>BEDROOM</Link>
                </button>
                <button id="outside">
                <Link to='/Outside'>OUTSIDE FURNITURE</Link>
                </button>
            </div>
        </nav>
    )
}