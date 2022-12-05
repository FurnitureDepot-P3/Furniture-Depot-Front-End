import React from 'react'
import SearchForm from "./SearchForm"
import SignIn from './SignIn'

export default function Header () {
    return (
        <div id="containerhdr">
            <h2 className='signin'> <SignIn/> </h2>
            <h2 className="headertitle"> Furniture header </h2>
            <h2 className="searchbox" > <SearchForm /> </h2>
        </div>
    )
}