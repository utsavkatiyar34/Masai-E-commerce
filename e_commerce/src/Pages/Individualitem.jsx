import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useParams } from 'react-router-dom';
import "../Styles/products.css";
import { Button } from "@mui/material";

import StarIcon from '@mui/icons-material/Star';
import axios from 'axios';
import { getProductsError, getProductsLoading, getProductsSuccess } from '../Store/actions';

export const Individualitem = () => {
  const {id, title} = useParams();
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.products);

let fetchItem = (id) => {
  dispatch(getProductsLoading());
  axios({
    method: "get",
    url: `http://localhost:4000/products?id=${id}`,
  })
    .then((res) => {
      dispatch(getProductsSuccess(res.data));
    })
    .catch(() => dispatch(getProductsError()));
};
useEffect(() => {
  fetchItem(id);
}, []);
const { logdata } = useSelector((state) => state.login);
if (logdata.length === 0) {
  return <Navigate to="/login" />;
}
  return (
    <>
    {data.map((ele) => (
    <div className="productcard" style={{width:'80%',backgroundColor:"",marginLeft:'auto',marginRight:'auto',borderRadius:'2.5px'}}>
    <h4 style={{textTransform:'uppercase',fontSize:'2vw'}}>{title}</h4>
    <div style={{height:'15vw',width:'50%',backgroundColor:`${ele.hex}`,marginLeft:'auto',marginRight:'auto',borderRadius:'5px'}} ></div>
    <h4>Rating: {ele.rating} <StarIcon sx={{fontSize:'1.5vw',color:'gold'}}/> </h4>
    <h4>Price: ₹{ele.price}</h4>
    <h4>Category: {ele.category}</h4>
    <h4>Description: {ele.description}</h4>
    <Button
      varient="solid"
      sx={{
        backgroundColor: "purple",
        color: "white",
        height: "35px",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: ".5vw",
        marginBottom: "0",
        "&:hover": { backgroundColor: "purple", color: "white" },
      }}
    >
      Add to cart
    </Button>
    </div>
    ))}
    </>
    
  )
}
