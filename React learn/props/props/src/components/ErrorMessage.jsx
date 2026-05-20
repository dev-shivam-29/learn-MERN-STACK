const ErrorMessage =()=> {
    let foodItems = ["dal", "greenvegitable", "roti", "salad", "milk", "ghee"];
     return 
     <>
    {foodItems.length === 0 && <h3>i am Still hungry</h3>}
    </>
}
export default ErrorMessage;