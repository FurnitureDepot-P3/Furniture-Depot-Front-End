import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import React from 'react'
import { useState, useEffect } from 'react'
import { CheckSession } from './services/Auth'


function App() {
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
      CheckToken()
    }
  }, [])

  const CheckToken = async () => {
    const user = await CheckSession()
    setUser(user)
    toggleAuthenticated(true)
  }
  
  return (
    <div className="App">
      
      <Header />
      

        <Main />




      <Footer />

    </div>
  );
}

export default App;
