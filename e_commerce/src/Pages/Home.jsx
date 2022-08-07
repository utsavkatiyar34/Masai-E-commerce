import React from 'react'
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
export const Home = () => {
        const { logdata } = useSelector((state) => state.login);
        if(logdata.length===0){
          return <Navigate to="/login"/>
        }
  return (
    <div>Home</div>
  )
}
