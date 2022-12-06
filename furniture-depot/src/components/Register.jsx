import { useState } from 'react'
import { RegisterUser } from '../services/Auth'
import { useNavigate } from 'react-router-dom'

const Register = () => {

  let navigate = useNavigate()

  const [formValues, setFormValues] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.id]: e.target.value })
    console.log(formValues)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    await RegisterUser({
      username: formValues.username,
      email: formValues.email,
      password: formValues.password
    })

    setFormValues({
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    })

    navigate('/signin')

  }

  return (
    <div className="signin col">
    
      <div className="card-overlay centered">
        <form className="col" onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              placeholder="John Smith"
              value={formValues.username}
              required
              onChange={handleChange}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="example@example.com"
              value={formValues.email}
              required
              onChange={handleChange}
            />
          </div>

          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={formValues.password}
              required
              onChange={handleChange}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              value={formValues.confirmPassword}
              required
              onChange={handleChange}
            />
          </div>
          <button
            disabled={
              !formValues.email ||
              (!formValues.password &&
                formValues.confirmPassword === formValues.password)
            }
          >
            Register
          </button>
        </form>
      </div>
    </div>
  )
}

export default Register
