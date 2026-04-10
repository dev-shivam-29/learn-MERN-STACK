import "./Product.css";

function Product({ title, price, features }) {
    //const list = features.map((feature) => <li>{feature}</li>);
   // let isDiscount = price > 30000 ? "Discount of 5%" : "";
    return(
        <div className="Product">
        <h3>{title}</h3>
        <h3>price : {price}</h3>
        {price > 30000 ? <p>"Discount of 5%"</p>: "null"}
       
        </div>
    );
    
     
} 

export default Product;