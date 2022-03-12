import React, {useState} from "react";

const ItemCount = ({stock, initial, onAdd}) =>{
 
      const [count, setCount] = useState(initial);

      const sumar = () => {
          if (count < stock){
          setCount(count+1);
      }   else{
          alert('No tenemos mas stock')
          }
      }

      const restar = () => {
          if (count > 0){
          setCount(count-1);
          }
      }

    return(
       <>
           <div> 
                <button type="button" className="btn btn-outline-danger" onClick={restar}>-</button>
                <h5>{count}</h5>
                <button type="button" className="btn btn-outline-success" onClick={sumar}>+</button>
            </div>
            
                <button type="button" className="btn btn-outline-primary" onClick={onAdd}>
                    Añadir al Carrito
                </button>
          
        </>
    )
}
export default ItemCount
