import React, { useState, useContext }  from 'react' 
import ItemCount from '../ItemCount/ItemCount'
import '../ItemListContainer/ItemListContainer.css'  

    export const ItemDetail = ({item}) =>{
        const [add, setAdd] = useState(false)

        const onAdd = () => {
            setAdd(!add)
        }
 
  
     return(
        <>
            <div className='container'>
                <div className='row' >
                    <div className='col-md-4' > 
                        <img className="card-img-top" src={item.thumbnail} /> 
                    </div>
                    <div className='col-md-8'>
                        <h2 className="card-title">{item.title}</h2>      
                    
                        <h3>Precio: ${item.price}</h3>
                        <div>
                        { add ? 
                            <p>Producto añadido al carrito</p>
                            :
                            <ItemCount stock={5} initial={1} onAdd={onAdd} />   
                        }
                        </div>
                    </div>  
                </div>
            </div>  
        </>
     )
}
