import { useContext } from 'react'
import Navbar from '../components/Navbar'
import { CartContext } from '../context/CartContext'

function Cart() {
  const { cart, removeFromCart } = useContext(CartContext)

  return (
    <>
      <Navbar />

      <div className='cart-page'>
        <h1>Your Cart</h1>

        {
          cart.map(item => (
            <div key={item.id} className='cart-item'>
              <img src={item.image} alt='' />
        <div>
                <h3>{item.name}</h3>
                <p>₹{item.price}</p>
              </div>

              <button onClick={() => removeFromCart(item.id)}>
                Remove
              </button>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default Cart