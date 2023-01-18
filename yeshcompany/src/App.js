import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { fetchUsers, sorttheuserpricefromhtl } from "./Redux/Products/Product.Action";
import { store } from "./Redux/store";

function App() {
  //here is my store got Called
  const store = useSelector((state) => state.data);

  //here is my dispatch function called to get the data
  const dispatch = useDispatch();

  console.log(store, "this is Now Store");
const handleHTL=()=>{
  dispatch(sorttheuserpricefromhtl())
  console.log(store,"this is after HAndleClick")
}
  //this is required to called the funtion to get the data
  useEffect(() => {
    dispatch(fetchUsers());
    //this is where i called the API
  }, [dispatch]);
  return (
    <div className="App">
      hi
      <button onClick={handleHTL}>HTL</button>
      <button>LTH</button>
    </div>
  );
}

export default App;
