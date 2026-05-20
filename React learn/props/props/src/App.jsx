import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import FoodInput from "./components/FoodInput";
import "./App.css";
import { useState } from "react";

function App() {
  //let foodItems = [];
  // let foodItems = ["dal", "greenvegitable", "roti", "salad", "milk", "ghee"];
  let [textToShow, setTextState] = useState();
  let [foodItems, setFoodItems]=useState(["salad","green vegetable","roti"]);
  // let textToShow = textStateArr[0];
  // let setTextstate = textStateArr[1];

  const onKeyDown= (event) => {
    console.log(event.target.value);
    setTextState(event.target.value);
  };
  // console.log(`Current value of textState:${textToShow}`);
  return (
    <>
      <h1>Healthy Food</h1>
       <FoodInput></FoodInput>
      <ErrorMessage></ErrorMessage>
      <FoodItems></FoodItems>
    </>
  );
}
export default App; 
