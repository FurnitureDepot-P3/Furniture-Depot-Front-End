import React from 'react'
import { useNavigate } from 'react-router-dom'

function Register() {

    let navigate = useNavigate()

    const [formValues, setFromValues] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    })

    const handleChange = (e) => {
        setFromValues({ ...formValues, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
    }

    await RegisterUser({
        name: formValues.name,
        email: formValues.email,
        password: formValues.password
      })
  
      setFormValues({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
      })
  
      navigate('/signin')
      
  return (
    <div>Register</div>
  )
}

export default Register