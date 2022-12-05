import { Link } from "react-router-dom";
import React from "react";

export default function Nav () {
    return (
        <div className="navbar">
            <Link id="home" to='/'>HOME</Link>
            
            <Link id="livrom" to='/Categories/2'>LIVING ROOM</Link> 
            
            <Link id="dinrom" to='/Dining'>DINING</Link>
                
            <Link id="bedrom" to='/Categories/1'>BEDROOM</Link>
                
            <Link id="outside" to='/Outside'>OUTDOOR</Link>
               
        </div>
    )
}