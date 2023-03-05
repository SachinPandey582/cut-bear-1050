import { Box, Button, Heading } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
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

  const dispatch = useDispatch();
  const [filterdData, setFilterdData] = useState([]);
  const [filter, setfilter] = useState(false);

  const [priceFilter1, setpriceFilter1] = useState({
    under5000: false,
    between_20000_to_50000: false,
    "Above_10000": false,
  });
  const getData1 = async () => {
    let data = await axios.get(`https://abracadabra-4mt6.onrender.com/mobiles`);
    let response = data.data;
    let filterd1data = response.filter((el) => {
      return el.Price1 < 20000;
    });

    setFilterdData(filterd1data);
  };
  const getData2 = async () => {
    let data = await axios.get(`https://abracadabra-4mt6.onrender.com/mobiles`);
    let response = data.data;
    let filterd1data = response.filter((el) => {
      return el.Price1 > 20000 && el.Price1 < 50000;
    });

    setFilterdData(filterd1data);
  };
  const getData3 = async () => {
    let data = await axios.get(`https://abracadabra-4mt6.onrender.com/mobiles`);
    let response = data.data;
    let filterd1data = response.filter((el) => {
      return el.Price1 > 50000;
    });

    setFilterdData(filterd1data);
  };
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
  const handlePriceFilterChange = (event) => {
    setpriceFilter1({
      ...priceFilter1,
      [event.target.name]: event.target.checked,
    });
    setfilter(!filter);
  };
  useEffect(() => {
    dispatch(fetchUsers());
   
    if (priceFilter1.under5000 && filter) {
    
      getData1();
    } else if (priceFilter1.between_20000_to_50000 && filter) {
      getData2();
    }else if (priceFilter1.Above_10000 && filter) {
      getData3();
    }
    //this is where i called the API
  }, [dispatch, priceFilter1]);

  if (store.loading === true) {
    return <Skeleton1 />;
  }
  return (
    <div>
      <div className={MSCss.upperContainer}>
        <div className={MSCss.SideCon}>
          <Box fontSize={"20px"}>
            showing 1 - {store.data.length} Products of 12078 Products
          </Box>
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
        <div className={MSCss.FilterCon}>
          <div style={{ width: "100%", margin: "auto" }}>
            <div>
            <Heading>Filter:-</Heading>
            </div>
           <div style={{display:"flex",justifyContent:"space-evenly",marginBottom:"10px",border:" 2px solid" ,padding:"10px"}}>
           <label>
              <input
              className={MSCss.inputCheck}
                type="checkbox"
                name="under5000"
                checked={priceFilter1.under5000}
                onChange={handlePriceFilterChange}
              />
              Under 20,000
            </label>
            <label>
              <input 
             className={MSCss.inputCheck}
                type="checkbox"
                name="between_20000_to_50000"
                checked={priceFilter1.between_20000_to_50000}
                onChange={handlePriceFilterChange}
              />
              between 20,000 to 50,000
            </label>
            <label>
              <input
              className={MSCss.inputCheck}
                type="checkbox"
                name="Above_10000"
                checked={priceFilter1.Above_10000}
                onChange={handlePriceFilterChange}
              />
              Above_10000
            </label>
           </div>
          </div>
        </div>
        {filter ? (
          <div className={MSCss.smallContainer}>
            {filterdData.map((el) => (
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
        ) : (
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
        )}
      </div>
    </div>
  );
};

export default AllProducts;
