
import { useState } from "react";
import '../ItemListContainer/ItemListContainer.css';


export const ItemCard = ({stock, initial, onAdd}) =>{

    const inicial = parseInt(initial)
    const [count, setCount] = useState(inicial);
  
       const sumar = () => {
           if(count < stock){
               setCount(count+1);
           } else {
               alert('No hay stock!')
           }           
       }
      
       const restar = () => {
           if (count > 1){
           setCount(count-1);
           }
       }
  
    //    const onAdd = () => {
          
    //       onAddCard()
    //    }
  
      return(

              <div>
                  <p style={{fontSize: '1rem', paddingTop:'8px'}}>Cantidad: {count} </p>
                  <button className="botonModif" onClick={restar}>-</button>
                   <button className="botonAgregar" onClick={onAdd}>Agregar</button> 
                  <button className="botonModif" onClick={sumar}>+</button>
              </div>
              
      )
  }
  
  