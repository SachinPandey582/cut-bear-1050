import { Box, Button, Heading } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Skeleton1 from "../Components/Skeleton1";
import SCard1 from "../Components/SmallCard/SCard";
import {
  fetchUsers,
  sorttheuserpricefromhtl,
  sorttheuserpricefromlth,
} from "../Redux/Products/Product.Action";
import MSCss from "./AllProducts.module.css";
const AllProducts = () => {
  const store = useSelector((state) => state.products);
  //here is my dispatch function called to get the data
  const dispatch = useDispatch();

  console.log(store, "this is Now Store");
  const handleHTL = () => {
    dispatch(sorttheuserpricefromhtl());
    console.log(store, "this is after HAndleClick");
  };
  const handleLTH = () => {
    setTimeout(() => {
      dispatch(sorttheuserpricefromlth());
    }, 1000);

    console.log(store, "this is after HAndleClick");
  };
  useEffect(() => {
    dispatch(fetchUsers());
    //this is where i called the API
  }, [dispatch]);

  if (store.loading === true) {
    return <Skeleton1 />;
  }
  return (
    <div>
      <div className={MSCss.upperContainer}>

        <div className={MSCss.SideCon}>
          <Box fontSize={"20px"}>showing 1 - {store.data.length} Products of 12078 Products</Box>
          <div>Sort By:-</div>
          <div>
            <Button onClick={handleHTL}>Price High to Low</Button>
          </div>
          <div>
            <Button onClick={handleLTH}>Price low to High</Button>
          </div>
        </div>
      </div>
      <div className={MSCss.container}>
       
        <div className={MSCss.smallContainer}>
          {store.data.map((el) => (
            <Link to={`/allproducts/${el.id}`}>
              <SCard1
                key={el.id}
                ProdCut={el.ProdCut}
                image={el.imgOFProd}
                NameOFProd={el.NameOFProd}
                Price={el.Price}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
