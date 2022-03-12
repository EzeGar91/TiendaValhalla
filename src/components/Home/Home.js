import React from 'react'
import { ItemListContainer} from '../ItemListContainer/ItemListContainer';

 
export const Home = () => {
  return (
    <div>
      <div className='container'> 
        <div className='contain'> 
          <ItemListContainer categoryId="MLA1051" categoryName="Categoria1"/>    
          <ItemListContainer categoryId='MLA1576' categoryName='Categoria2'/>    
          <ItemListContainer categoryId='MLA1577' categoryName='Categoria3'/>    
        </div> 
      </div>
    </div> 
  )
}
