import Item from "./Item";

const FoodItems = () => {

  let foodItems = [
    "dal",
    "greenvegitable",
    "roti",
    "salad",
    "milk",
    "ghee"
  ];

  return (
    <ul className="list-group">
      {foodItems.map((item, index) => (
        <Item
          key={index}
          foodItem={item}
          handleBuyButton={() => console.log("clicked")}
        ></Item>
      ))}
    </ul>
  );
};

export default FoodItems;