import React, { useState } from 'react'
import '../Styles/Signup.css'
import { Button } from '@mui/material';
import { v4 } from "uuid";
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { signupToDoError, signupToDoLoading, signupToDoSuccess } from '../Store/actions';
import { Navigate, NavLink } from 'react-router-dom';
export const Signup = () => {
const [name, setName]=useState('');
const [email,setEmail]=useState('');
const [username,setUsername]=useState('');
const [mobile,setMobile]=useState('');
const [description,setDescription]=useState('');
const [password, setPassword]=useState('');
const dispatch=useDispatch();
let handleSignUp=()=>{
        dispatch(signupToDoLoading());
axios({
      method: "post",
      url: "http://localhost:4000/users",
      data: {
        id: v4(),
        name:name,
        email:email,
        username:username,
        mobile:mobile,
        description:description,
        password:password
        
      },
}).then((res) => {
        dispatch(signupToDoSuccess());
      })
      .catch((err) => {
        dispatch(signupToDoError());
      });
}
const { logdata } = useSelector((state) => state.login); 
  if(logdata.length===1){
    return <Navigate to="/" /> 
  }

  return (
    <div className='signUp'>
        <input
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="inpfields"
          placeholder='Name'
          type="text"
        ></input>
        <input
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="inpfields"
          placeholder='Email'
          type="text"
        ></input>
        <input
          required
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          className="inpfields"
          placeholder='Mobile Number'
          type="text"
        ></input>
        <input
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="inpfields"
          placeholder='Username'
          type="text"
        ></input>
        <input
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="inpfields"
          placeholder='Description'
          type="text"
        ></input>
        <input
          required
          value={password}
          name='number'
          onChange={(e) => setPassword(e.target.value)}
          className="inpfields"
          placeholder='Password'
          type="password"
        ></input>
         <Button  variant="solid"
         onClick={handleSignUp}
          sx={{
            color: "white",
            backgroundColor: "purple",
            width:'30%',
            borderColor: "purple",
            height:"3vw",
            marginLeft:'auto',
            marginRight:'auto',
            "&:hover": { backgroundColor: "#a0522d" },
          }}>Register</Button>
          <NavLink to="/login">Already Registered?<br></br>Login</NavLink>
     </div>
    
  )
}