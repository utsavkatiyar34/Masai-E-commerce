import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Navigate } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import { useDispatch, useSelector } from "react-redux";
import { Productcard } from "../Components/Productcard";
import "../Styles/products.css";
import axios from "axios";
import { getProductsError, getProductsLoading, getProductsSuccess } from "../Store/actions";
export const Grocery = () => {
  const [page, setPage]= useState(1);
  const [sort,setSort]= useState("asc");
  const [star, setStar] = useState("");
  const dispatch = useDispatch();
  const {  data } = useSelector((state) => state.products);
  let fetchProducts = () => {
    dispatch(getProductsLoading());
    axios({
      method: "get",
      url: `http://localhost:4000/products?${star}category_like=grocery&_sort=price&_order=${sort}&_page=${page}&_limit=20`,
    })
      .then((res) => {
        
        dispatch(getProductsSuccess(res.data));
      })
      .catch(() => dispatch(getProductsError()));
    };
  useEffect(() => {
    fetchProducts();
  }, [page,sort,star]);
  const { logdata } = useSelector((state) => state.login);
  if (logdata.length === 0) {
    return <Navigate to="/login" />;
  }
  return (
        <>
      <div
        style={{
          marginTop: ".5vw",
          marginBottom: "0",
          display: "flex",
          overflow: "auto",
          width: "90%",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <div
          style={{
            marginTop: ".5vw",
            marginBottom: "0",
            display: "flex",
            overflow: "auto",
            width: "40%",
            marginLeft: "auto",
            marginRight: "auto",
            padding:'5px',
            border:'2px solid purple'
          }}
        >
          <Button
            varient="solid"
            sx={{
              backgroundColor: "purple",
              color: "white",
              height: "40px",
              width: "150px",
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: ".5vw",
              marginBottom: ".5vw",
              "&:hover": { backgroundColor: "purple", color: "white" },
            }}
            disabled={sort === "asc"}
            onClick={() => setSort("asc")}
          >
            Min to max
          </Button>
          <Button
            varient="solid"
            sx={{
              backgroundColor: "purple",
              color: "white",
              height: "40px",
              width: "150px",
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: ".5vw",
              marginBottom: ".5vw",
              "&:hover": { backgroundColor: "purple", color: "white" },
            }}
            disabled={sort === "desc"}
            onClick={() => setSort("desc")}
          >
            Max to Min
          </Button>
          <Button
            varient="solid"
            sx={{
              backgroundColor: "purple",
              color: "white",
              height: "40px",
              width: "150px",
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: ".5vw",
              marginBottom: ".5vw",
              "&:hover": { backgroundColor: "purple", color: "white" },
            }}
            disabled={!sort}
            onClick={() => setSort((prev) => null)}
          >
            Remove Sort
          </Button>
        </div>
        <div
          style={{
            marginTop: ".5vw",
            marginBottom: "0",
            display: "flex",
            overflow: "auto",
            width: "40%",
            marginLeft: "auto",
            marginRight: "auto",
            border:'2px solid purple',
            padding:'5px',
          }}
        >
          <Button
            varient="solid"
            sx={{
              backgroundColor: "purple",
              color: "white",
              height: "40px",
              width: "35px",
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: ".5vw",
              marginBottom: ".5vw",
              "&:hover": { backgroundColor: "purple", color: "white" },
            }}
            disabled={star === "rating_gte=1&rating_lte=3&"}
            onClick={() => setStar("rating_gte=1&rating_lte=3&")}
          >
            1-3 <StarIcon sx={{ fontSize: "20px", color: "gold" }} />
          </Button>
          <Button
            varient="solid"
            sx={{
              backgroundColor: "purple",
              color: "white",
              height: "40px",
              width: "35px",
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: ".5vw",
              marginBottom: ".5vw",
              "&:hover": { backgroundColor: "purple", color: "white" },
            }}
            disabled={star === "rating_gte=3&rating_lte=4&"}
            onClick={() => setStar("rating_gte=3&rating_lte=4&")}
          >
            3-4 <StarIcon sx={{ fontSize: "20px", color: "gold" }} />
          </Button>
          <Button
            varient="solid"
            sx={{
              backgroundColor: "purple",
              color: "white",
              height: "40px",
              width: "35px",
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: ".5vw",
              marginBottom: ".5vw",
              "&:hover": { backgroundColor: "purple", color: "white" },
            }}
            disabled={star === "rating_gte=4&rating_lte=5&"}
            onClick={() => setStar("rating_gte=4&rating_lte=5&")}
          >
            4-5 <StarIcon sx={{ fontSize: "20px", color: "gold" }} />
          </Button>
          <Button
            varient="solid"
            sx={{
              backgroundColor: "purple",
              color: "white",
              height: "40px",

              marginLeft: "auto",
              marginRight: "auto",
              marginTop: ".5vw",
              marginBottom: ".5vw",
              "&:hover": { backgroundColor: "purple", color: "white" },
            }}
            disabled={star === ""}
            onClick={() => setStar("")}
          >
            remove <StarIcon sx={{ fontSize: "20px", color: "gold" }} /> filter
          </Button>
        </div>
      </div>
      <div className="productdiv">
        {data.map((ele) => (
          <Productcard key={ele.id} {...ele} />
        ))}
      </div>
      <div
        style={{
          marginBottom: "2.5vw",
          display: "flex",
          overflow: "auto",
          width: "50%",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Button
          varient="solid"
          sx={{
            backgroundColor: "purple",
            color: "white",
            height: "40px",
            width: "35px",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: ".5vw",
            marginBottom: "0",
            "&:hover": { backgroundColor: "purple", color: "white" },
          }}
          disabled={page === 1}
          onClick={() => setPage((prev) => prev - 1)}
        >
          <ArrowBackIosNewIcon />
        </Button>
        <Button
          varient="solid"
          sx={{
            backgroundColor: "purple",
            color: "white",
            height: "40px",
            width: "35px",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: ".5vw",
            marginBottom: "0",
            fontSize: "1.5vw",
            "&:hover": { backgroundColor: "purple", color: "white" },
          }}
        >
          {page}
        </Button>
        <Button
          varient="solid"
          sx={{
            backgroundColor: "purple",
            color: "white",
            height: "40px",
            width: "35px",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: ".5vw",
            marginBottom: "0",
            "&:hover": { backgroundColor: "purple", color: "white" },
          }}
          disabled={page === 3}
          onClick={() => setPage((prev) => prev + 1)}
        >
          <ArrowForwardIosIcon />
        </Button>
      </div>
    </>
  );
};
