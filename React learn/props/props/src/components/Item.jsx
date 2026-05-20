import { RiAddCircleLine } from "react-icons/ri";
import styles from "./Item.module.css";

const Item = ({ foodItem, handleBuyButton}) => {

  

  return (
    <li className="list-group-item">
      {foodItem}

      <button
        className={`${styles.button} btn btn-info`}
        onClick={
         handleBuyButton}
      >
        <RiAddCircleLine />

      </button>
    </li>
  );
};

export default Item;
