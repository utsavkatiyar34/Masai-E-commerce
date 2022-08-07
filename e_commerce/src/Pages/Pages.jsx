import React from 'react'
import {Route,Routes} from 'react-router-dom'
import { Home } from './Home';
import {Login} from './Login';
import { Signup } from './Signup';
export const Pages = () => {
  return (<>
    <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/signup" element={<Signup />}></Route>
        <Route path="*" element={<h2>Error... Page not found.</h2>}></Route>
    </Routes>
    
</>)
}
