import"./product.css";
function Product({title, price,features}) {
    
    return(
          <div className="Product">
            <h2>{title}</h2>
            <h3> price  :{price}</h3>
            <p>{features}</p>
        </div>
    );
}

export default Product;