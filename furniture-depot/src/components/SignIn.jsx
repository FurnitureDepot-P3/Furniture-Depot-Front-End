import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { SignInUser } from "../services/Auth";

function SignIn(props) {
  let navigate = useNavigate();

  const [formValues, setFormValues] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.id]: e.target.value });
    console.log(formValues);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = await SignInUser(formValues);
    setFormValues({ email: "", password: "" });
    props.setUser(payload);
    props.toggleAuthenticated(true);
    navigate("/");
  };

  return (
    <div className="signin col">
      <div className="card-overlay centered">
        <form className="col" onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="email">Email</label>
            <input
              onChange={handleChange}
              id="email"
              type="email"
              placeholder="example@example.com"
              value={formValues.email}
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              onChange={handleChange}
              type="password"
              id="password"
              value={formValues.password}
              required
            />
          </div>
          <button disabled={!formValues.email || !formValues.password}>
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
