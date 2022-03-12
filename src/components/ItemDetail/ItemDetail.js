import React, { useContext, useState }  from 'react' 
import ItemCount from '../ItemCount/ItemCount'
import '../ItemListContainer/ItemListContainer.css'  
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/useContext'

    export const ItemDetail = ({item}) =>{
        const [add, setAdd] = useState(false)

        const { addItem } = useContext(CartContext)

 
  
     return(
        <>
            <div className='container'>
                <div className='row' >
                    <div className='col-md-4' > 
                        <img className="card-img-top" src={item.thumbnail} alt="thumbnail"/> 
                    </div>
                    <div className='col-md-8'>
                        <h2 className="card-title">{item.title}</h2>      
                    
                        <h3>Precio: ${item.price}</h3>
                        <div>
                        { add ? 
                            <p>Producto añadido al carrito</p>
                            :
                            <ItemCount item={item} stock={5} initial={1} addItem={addItem} />   
                        }
                        <Link to="/cart" type="button">Finalizar Compra</Link>
                        </div>
                    </div>  
                </div>
            </div>  
        </>
     )
}
