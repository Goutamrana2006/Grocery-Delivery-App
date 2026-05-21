import { createContext, useState } from 'react'

export const CartContext = createContext()

export const CartProvider = ({ children }) => {

  const [cart, setCart] = useState([])

  const addToCart = (product) => {

    setCart([...cart, product])

    alert(`${product.name} added to cart ✅`)
  }

  const removeFromCart = (id) => {

    const updatedCart = cart.filter(item => item.id !== id)

    setCart(updatedCart)
  }

  return (

    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart
      }}
    >
      {children}
    </CartContext.Provider>
  )
}