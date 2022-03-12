import React, { createContext, useState } from 'react'

export const CartContext = createContext([])

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState ([])

  const isInCart = (id) => {

  }

  const addItem = (item, count) => {
    setItems([...items, { ...item, count: count}])
    console.log(items);
  }

  return (
      <CartContext.Provider value={{ items, addItem}}>
          {children}
      </CartContext.Provider>
  )
}
