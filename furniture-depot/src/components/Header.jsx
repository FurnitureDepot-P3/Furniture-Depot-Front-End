import React from 'react'
import Register from './Register'
import SearchForm from "./SearchForm"
import SignIn from './SignIn'
import { Link } from "react-router-dom"
import Nav from "./Nav"

export default function Header () {
    return (
        <div id="containerhdr">

            <div className="title-utility">

            <div>
                <h1 className="headertitle"> furniture depot </h1>
            </div>

            {/* <div className="utility-nav"> */}
                <div classname="searchbox">
                    <SearchForm />
                </div>

                <div className="signinbox">
                    <Link id="signinbtn" to='/SignIn' style={{textDecoration: 'none'}}>Sign-In</Link> or <Link id="registerbtn" to="/Register" style={{textDecoration: 'none'}}>Register</Link>
                {/* </div> */}
            </div>

            </div>

            <div className="site-nav">
                <Nav />
            </div>
        </div>
    )
}