import Product from "./Product.jsx";

function ProductTab(){
    let features=["hi-teach", "durable", "fast"];
    //let options2 = {a: "hi-teach",b:"durable",c:"fast"};
    return(
    <>
    <Product  title="phone" price={30000}/>
    <Product  title="Laptop" price={40000}/>
    <Product  title="pen" price={10}/>
    </>
    );
}
 export default ProductTab; 