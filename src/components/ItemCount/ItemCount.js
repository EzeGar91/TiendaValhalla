import {useState} from "react"
import "../ItemListContainer/ItemListContainer.css"

const ItemCount = ({stock, initial, onAdd}) => {

   const [count, setCount] = useState(initial)
 
    const sumar = () => {
        if (count < stock) {
            setCount (count+1);
        } else {
            alert("No tenemos mas stock")
        }
}

    const restar = () => {
        if (count > initial) {
            setCount(count - 1);
        }
    }

    /*const addToCart = () => {
        onAdd(count)
    }*/
 

    return(
        <div>
            <div>
                <p> Cantidad: {count} </p>
                <button onClick={restar}>-</button>
                <button onClick={onAdd}>Agregar</button>
                <button onClick={sumar}>+</button>
            </div>
        </div>
    )
}

export default ItemCount