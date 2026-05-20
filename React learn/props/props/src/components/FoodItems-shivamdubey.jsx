import Item from "./Item";

const FoodItems = ({ items }) => {
  // console.log(styles);
  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item key={item} foodItem={item}></Item>
      ))}
    </ul>
  );
};

export default FoodItems;

