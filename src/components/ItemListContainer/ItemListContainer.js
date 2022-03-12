import '../ItemListContainer/ItemListContainer.css'
import { useState , useEffect } from "react"
import React from 'react'
import { Item } from '../Item/Item'


 export const ItemListContainer = () =>{ 

    const [items, setItems] = useState([])

    useEffect (()=>{
        fetchItems();
        }, [])

    async function fetchItems(){
        const response = await fetch ('https://api.mercadolibre.com/sites/MLA/search?q=vinilos-musica'
        );

        if (response.ok){
            const result = await response.json()
            setItems(result.results)
        }
    }
    
    const texto = "Tienda Valhalla Music Vinilos"
    
    return (
        <>
            <div>
                <h1>
                    {texto}
                </h1>
                <div>
                    {
                        items.map(item=>(
                            <Item key={item.id}
                                title={item.title}
                                price={item.price}
                                thumbnail={item.thumbnail}
                            />
                        ))
                    }
                </div>
            </div>
            
        </>
    )
 }