import React, { useState } from 'react'
import '../Styles/Signup.css'
import { Button } from '@mui/material';
import axios from 'axios';
import { useDispatch,useSelector } from 'react-redux';
import { loginToDoError, loginToDoLoading, loginToDoSuccess } from '../Store/actions';
import { Navigate, NavLink } from 'react-router-dom';

export const Login = () => {
  const [email,setEmail]=useState('');
  const [password, setPassword]=useState('');
  const dispatch=useDispatch();
  let handleLogin=()=>{
    dispatch(loginToDoLoading());
    axios({
          method: "post",
          url: 'https://reqres.in/api/login',
          data:{
            email:email,
            password:password
          }
    }).then((res) => {
      if (res.data.length===0){
        alert("Invalid Creditionals");
        return;
      }
            dispatch(loginToDoSuccess(res.data));
            
          })
          .catch((err) => {
            dispatch(loginToDoError());
          });
  }

  const { logdata } = useSelector((state) => state.login);

  if(logdata.length>0){
    return <Navigate to="/" /> 
  }
  return (
    <div className='signUp'>
        <input
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="inpfields"
          placeholder='Enter Email'
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
         onClick={handleLogin}
          sx={{
            color: "white",
            backgroundColor: "purple",
            width:'30%',
            borderColor: "purple",
            height:"3vw",
            marginLeft:'auto',
            marginRight:'auto',
            "&:hover": { backgroundColor: "purple" },
          }}>Login</Button>
          <NavLink to="/signup">Not Registered?<br></br> SignUp</NavLink>
     </div>
  )
}