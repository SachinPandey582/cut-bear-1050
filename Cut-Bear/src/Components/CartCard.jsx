import { Button } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { DecreaseQuantity, DeleteTheItem, IncreaseQuantity } from "../Redux/Cart/Cart.Action";

const CartCard = (props) => {
  const { imgOFProd,Price, NameOFProd,Quant,Price1 ,id} = props;
  const dispatch =useDispatch()
  const handleIncreaseData=(id)=>{
    console.log(id,"sachinda    ")
dispatch(IncreaseQuantity(id))
  }
  const handledecreasedata=(id)=>{
    console.log(id,"sachinda    ")
dispatch(DecreaseQuantity(id))
  }
  const handleDelete=()=>{
    dispatch(DeleteTheItem(id))
  }

  useEffect(()=>{

  },[dispatch])
  return (
    <div
      style={{
        border: "2px solid",
        display: "grid",
        gridTemplateColumns: "30% 70%",
      }}
    >
      <div>
        <img src={imgOFProd} alt="imageofProducts" />
      </div>
      <div>
        <div>{NameOFProd}</div>
        <h6>Price per Quantity:{Price}</h6>
        <div style={{fontSize:"20px",textAlign:"left"}}>Total units</div>

       <div style={{display:"flex"}}>
        <div><Button p={10} onClick={()=>handledecreasedata(id)}>-</Button></div>
        <div><Button p={10}>{Quant}</Button></div>
       <div><Button p={10} onClick={()=>handleIncreaseData(id)}>+</Button></div>
       </div>
       Total Price= {Quant * Price1}
       <Button p={14} bg={"red"} color="white">Proceed to Buy</Button>
       <Button p={14} bg={"red"} color="white" onClick={()=>handleDelete(id)}>Delete the Item</Button>
      </div>
    </div>
  );
};

export default CartCard;
