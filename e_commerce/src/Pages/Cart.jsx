import React, { useEffect, useState } from 'react'
import "../Styles/products.css";
import { Button } from "@mui/material";
import axios from 'axios';

export const Cart = () => {
const[cart,setCart]=useState([]);

        let fetchCart = () => {
                axios({
                  method: "get",
                  url: `http://localhost:4000/cart`,
                })
                  .then((res) => {
                    setCart(res.data);
                    
                  })

              };

              useEffect(() => {
                fetchCart();
              }, []);

  return (
        <>
    { cart.map ((ele)=>(
        <div className="productcard2">
        
        <div style={{height:'10vw',width:'30%',backgroundColor:`${ele.hex}`,marginLeft:'auto',marginRight:'auto',borderRadius:'2.5px'}} ></div>
        <h4>{ele.title}</h4>
        <h4>Price: ₹{ele.price}</h4>
        {/* <Link to="/" style={{textDecoration:'none'}}> */}
        <div style={{display:'flex',overflow:'auto'}}>
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
          Increase
        </Button>
        {/* </Link> */}
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
          Remove from cart
        </Button>
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
          Decrease
        </Button>
        </div>
        </div>
    ))}
    </>
  )
}
