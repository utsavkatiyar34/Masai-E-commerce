import React from "react";
import "../Styles/products.css";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import StarIcon from '@mui/icons-material/Star';

export const Productcard = ({id, title, color, price, description, rating, category, hex, imageBase}) => {
  return (
        <div className="productcard">
        <div style={{height:'15vw',width:'80%',backgroundColor:`${hex}`,marginLeft:'auto',marginRight:'auto',borderRadius:'2.5px'}} ></div>
        <h4>{title}</h4>
        <h4>Rating: {rating} <StarIcon sx={{fontSize:'1.5vw',color:'gold'}}/> </h4>
        <h4>Price: ₹{price}</h4>
        <Link to={`product/${title}/${id}`} style={{textDecoration:'none'}}>
        <Button
          varient="solid"
          sx={{
            backgroundColor: "purple",
            color: "white",
            height: "35px",
            width: "100px",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: ".5vw",
            marginBottom: "0",
            "&:hover": { backgroundColor: "purple", color: "white" },
          }}
        >
          Details
        </Button>
        </Link>
        </div>
  )
}
