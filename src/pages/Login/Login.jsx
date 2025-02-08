import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const Login = () => {
  const [user, setUser] = useState({
    // username:"",
    // number:"",
    email: " ",
    password: " ",
  });
  const handleInput=(e)=>{
    console.log(e);
    let name=e.target.name;
    let value=e.target.value;

    setUser({
        ...user,
        [name]:value, //this name can be usernmae, phone, email, passowrd, it is for updating the field which is being updated by user
       })
    };
const handelSubmit= (e)=>{ //we pass async at last and for this we include await
  e.preventDefault();
  // alert(user); //this will show the dialogbox for user
  console.log(user);
};
  
  return (
    <>
      <h1>Login Form</h1>
      <form onSubmit={handelSubmit}>
        <label>Email ID:</label>
        <input 
          type="email" 
          name="email" 
          placeholder="email" 
          id="email" 
          required
          value={user.email}
          onChange={handleInput}
        />
        <br />
        <label>Password: </label>
        <input 
          type="password" 
          name="password" 
          placeholder="password" 
          id="password" 
          required
          value={user.password}
          onChange={handleInput}
        />
        <br />
        <button type='submit'>Login</button>
      </form>

      <div>New User?</div>
      <div><Link to='/registration'>Register Yourself</Link></div>
    </>
  )
}

export default Login