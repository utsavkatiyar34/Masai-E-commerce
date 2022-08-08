import React from 'react'
import {Route,Routes} from 'react-router-dom'
import { Grocery } from './Grocery';
import { Home } from './Home';
import {Login} from './Login';
import { Pharmacy } from './Pharmacy';
import { Signup } from './Signup';
import { Individualitem } from './Individualitem';
export const Pages = () => {
  return (<>
    <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/signup" element={<Signup />}></Route>
        <Route exact path="/grocery" element={<Grocery/>}></Route>
        <Route exact path="/pharmacy" element={<Pharmacy />}></Route>
        <Route  path="/product/:title/:id" element={<Individualitem/>}></Route>
        <Route path="*" element={<h2>Error... Page not found.</h2>}></Route>
    </Routes>
    
</>)
}
