import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { singleDataofCart } from "./Cart";
import SPcss from "./SingleProduct.module.css";
 const SingleProduct = () => {
  const [sprod, getsprod] = useState({});
  const params = useParams();
  const getSingleProductData = async () => {
    const response = await axios
      .get(`http://localhost:8080/mobiles/${params.id}`)
      .then((res) => getsprod(res.data));
    //   console.log(response)
  };
const dispatch=useDispatch()
  const handleADDtoCart=(id)=>{
    console.log("sachin",id)
    dispatch(singleDataofCart(id))
  }
  
const saving=+(sprod.Price1)+1000

  useEffect(() => {
    getSingleProductData();
  }, []);
  return (
    <div className={SPcss.container}>
      <div>
        <img  className={SPcss.imgOFProd} src={sprod.imgOFProd} alt="imageOfProd" />
      </div>
      <div>
        <div className={SPcss.Heading}>
          <h2>{sprod.NameOFProd}</h2>
        </div>
        <div className={SPcss.SecondContainer}>
          <div className={SPcss.KeyFeatures}>
            <h4>Key Features</h4>
            <li>120 Hz refresh rate, Mptidimensional stereo sound</li>
            <li>16 MP Front Camera, 5000 mAh Battery</li>
              <li>50 MP + 8 MP + 2 MP Primary Camera</li>
          
            <li>16.5 cm (6.5 Inch) 2400 x 1080 Fpl HD+ Display</li>
            <h4>Return Popcy</h4>
            <li>
              Items are epgible for return within 7 Days of Depvery. Read-T&C
            </li>
            <li>
              All accessories, product & packaging need to be returned in
              original condition.
            </li>
            <li>Got Feedback to share on this page? report here.</li>
          </div>
          <div className={SPcss.AddToCart}>
            <h2> Price : {sprod.Price}</h2>
            <p>
            MRP: {saving} (Inclusive of all taxes)
            <br />
You Save: 12%(₹5,41)
<br />
EMIs (Credit Cards) from ₹2016.49/month | View-Plans
<br />
FREE Shipping!
<br />
            </p>
          <div>
          <button onClick={()=>handleADDtoCart(sprod.id)} className={SPcss.btn}><Link to={"/cart"}>
          Add To Cart 
          </Link></button>
            <button className={SPcss.btn}> Proceed To Buy</button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default SingleProduct