import React from 'react'
import SearchForm from "./SearchForm"
import { Link } from "react-router-dom"
import Nav from "./Nav"

export default function Header ({ authenticated, user, handleLogout }) {
    let authenticatedOptions
    if (user) {
        authenticatedOptions = (
            <div className="signinbox">
                <span className="user">Welcome, {user.email}</span>
                <Link onClick={handleLogout} to="/">
                Sign Out
                </Link>
            </div>
        )
    }
    const publicOptions = (
        <div className="signinbox">
            <Link id="signinbtn" to='/SignIn' style={{textDecoration: 'none'}}>Sign-In</Link> or <Link id="registerbtn" to="/Register" style={{textDecoration: 'none'}}>Register</Link>
        </div>
    )   
    return (
        <div id="containerhdr">
            <div className="title-utility">
            <div>
                <h1 className="headertitle"> furniture depot </h1>
            </div>
                <div className="searchbox">
                    <SearchForm />
                </div>
                <div className="signinbox">
                    {authenticated && user ? authenticatedOptions : publicOptions}
                </div>
            </div>
            <div className="site-nav">
                <Nav />
            </div>

        </div>
    )
}