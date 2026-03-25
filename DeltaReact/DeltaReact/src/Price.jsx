
export default function Price({ oldPrice, newPrice }) {
    let oldStyles={
        textDecorationLine: "line-through",
    };
    let newstyle ={
      fontWeight:"bold",  
    };
    return (
        <div>
            <span style={oldStyles}>{oldPrice}</span>
            &nbsp;&nbsp;&nbsp;
            <span style={newstyle}>{newPrice}</span>
        </div>
    );
}