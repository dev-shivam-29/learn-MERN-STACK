import styles from "./Item.module.css";
const Item = (props) => {
  //array destructuring kiya hai yaha par
  let { foodItem } = props;
  // upper ek method bana raha hai onClick method ka
  const handleBuyButtonClicked = (event) => {
    console.log(event);
    console.log(`${foodItem} being brought`);
  };
  return (
    <li className={`${styles["kg-item"]}list-group-item`}>
      <span className={styles["kg-span"]}>{foodItem}</span>
      <button
        className={`${styles.button} btn btn-info`}
        onClick={(event) => handleBuyButtonClicked(event)}
      >
        Buy
      </button>
    </li>
  );
};

export default Item;
