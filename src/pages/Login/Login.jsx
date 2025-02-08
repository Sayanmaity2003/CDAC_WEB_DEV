import React from 'react'
import { Link } from 'react-router-dom'

export const Login = () => {
  return (
    <>
      <h1>Login Form</h1>
      <form>
        <label>Email ID:</label>
        <input 
          type="email" 
          name="email" 
          placeholder="email" 
          id="email" 
          required
        />
        <br />
        <label>Password: </label>
        <input 
          type="password" 
          name="password" 
          placeholder="password" 
          id="password" 
          required
        />
        <br />
        <button>Login</button>
      </form>

      <div>New User?</div>
      <div><Link to='/registration'>Register Yourself</Link></div>
    </>
  )
}

export default Login