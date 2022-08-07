import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Productcard } from "../Components/Productcard";
import "../Styles/products.css";
import axios from "axios";
import { getProductsError, getProductsLoading, getProductsSuccess } from "../Store/actions";
export const Home = () => {
 
  const dispatch = useDispatch();
  const {  data } = useSelector((state) => state.products);
  let fetchProducts = () => {
    dispatch(getProductsLoading());
    axios({
      method: "get",
      url: "http://localhost:4000/products",
    })
      .then((res) => {
        
        dispatch(getProductsSuccess(res.data));
      })
      .catch(() => dispatch(getProductsError()));
    };
  useEffect(() => {
    fetchProducts();
  }, []);
  const { logdata } = useSelector((state) => state.login);
  if (logdata.length === 0) {
    return <Navigate to="/login" />;
  }
  return (
    <div className="productdiv">
      {data.map((ele) => (
        <Productcard key={ele.id} {...ele} />
      ))}
    </div>
  );
};
