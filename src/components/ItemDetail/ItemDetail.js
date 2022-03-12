// import ItemCount from '../ItemCount/ItemCount'
import '../ItemListContainer/ItemListContainer.css'
import React from 'react'

// // import { useState } from 'react'
// import { useEffect } from 'react'

 export const ItemDetail = ({item}) =>{

    // const {itemName} = useParams();
    // console.log('itemName', itemName);

     return(
        <>
        <div className='container'>
            <h3>{item.price}</h3>
            <p>{item.title}</p>
            </div>
        </>
     )
}