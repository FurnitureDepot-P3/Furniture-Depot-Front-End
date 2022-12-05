import React from 'react'
import SearchForm from "./SearchForm"
import { Link } from "react-router-dom"

export default function Header () {
    return (
        <div id="containerhdr">

            <div className="signinbox">
                <Link id="signinbtn" to='/SignIn' style={{textDecoration: 'none'}}>Sign-In</Link> or <Link id="registerbtn" to="/Register" style={{textDecoration: 'none'}}>Register</Link>
            </div>

            <div>
                <h1 className="headertitle"> furniture depot </h1>
            </div>

            <div classname="searchbox">
                <SearchForm />
            </div>
            

            <div>

            </div>
        </div>
    )
}