import React from 'react'
import { Link } from 'react-router-dom'
export const Registration = () => {
  return (
    <>
      <h1>Registration Form</h1>
      <form>
        <label>Username:</label>
        <input 
          type="text" 
          name="username" 
          placeholder="username" 
          id="username" 
          required
        />
        <br />
        <label>Phone:</label>
        <input 
          type="number" 
          name="phone" 
          placeholder="phone" 
          id="phone" 
          required
        />
        <br />
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
        <button>Register</button>
      </form>

      {/* <div>New User?</div> */}
      <div><Link to='/login'>Go to login page</Link></div>
    </>
  )
}

export default Registration