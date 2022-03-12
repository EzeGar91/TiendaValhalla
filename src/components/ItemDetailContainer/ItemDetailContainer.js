import React, {useState, useEffect} from 'react'
import { ItemDetail } from '../ItemDetail/ItemDetail'
import '../ItemListContainer/ItemListContainer.css'
import { useParams } from 'react-router-dom'



 export const ItemDetailContainer = () => {
     
    const [item, setItem] = useState([])
    const [loading, setLoading] = useState(true)
    const params = useParams()

    useEffect(()=>{
        setTimeout(()=>{
            fetch(`https://api.mercadolibre.com/items/${params.id}`)
                .then((response) => response.json())
                        .then(respJSON => {setItem(respJSON); setLoading(false)})
        }, 1000)
    }, [params.id])

    return(
        <>    
           {
               loading ?
                    <p>Cargando...</p>
                    :
                    <div>
                        <ItemDetail item={item}/>
                    </div>
           }
                        
          
        </>
     )
}
