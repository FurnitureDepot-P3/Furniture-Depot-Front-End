import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { RegisterUser, SignInUser } from '../services/Auth'


function SignIn(props) {

    let navigate = useNavigate()

    const [formValues, setFormValues] = useState({ email: '', password: '' })
  
    const handleChange = (e) => {
      setFormValues({ ...formValues, [e.target.name]: e.target.value })
    }
  
    const handleSubmit = async (e) => {
      e.preventDefault()
      const payload = await SignInUser(formValues)
      setFormValues({ email: '', password: '' })
      props.setUser(payload)
      props.toggleAuthenticated(true)
      navigate('/Home')
    }
    
  return (
    <div>SignIn</div>
  )
}

export default SignIn