import { Route, Routes } from 'react-router-dom'
// import { Link } from 'react-router-dom'
import Home from './Home'
import Dining from './Dining'
import Living from './Living'
import Bed from './Bed'
import Outside from './Outside'
import Reviews from './UserReviews'
import Header from './Header'
import React from 'react';
import SearchForm from "./SearchForm"
import SignIn from './SignIn'
import Register from './Register'
import { useState, useEffect } from 'react'
import { CheckSession } from '../services/Auth'


export default function Main () {
    const [authenticated, toggleAuthenticated] = useState(false)
    const [user, setUser] = useState(null)

    const handleLogout = () => {
        setUser(null)
        toggleAuthenticated(false)
        localStorage.clear()
    }
    
    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            checkToken()
            }
        }, [])

    const checkToken = async () => {
        const user = await CheckSession()
        setUser(user)
        toggleAuthenticated(true)
    }
    
    return (
    <div>
        <div className="App-header">
        <Header
                authenticated={authenticated}
                user={user}
                handleLogout={handleLogout}
                />
        </div>
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/SearchForm" element={<SearchForm/>}/>
                <Route path ="/Dining" element={<Dining />} />
                <Route path="/Living" element={<Living />} />
                <Route path="/Bed" element={<Bed />} />
                <Route path="/Outside" element={<Outside />} />
                {/* <Route path="/Reviews" element={<Reviews />} /> */}
                <Route path="/SignIn" element={<SignIn 
                setUser={setUser}
                toggleAuthenticated={toggleAuthenticated}
                />} />
                <Route path="/Register" element={<Register />} />
            </Routes>
        </div>

    </div>
    )
}

console.log(Main)