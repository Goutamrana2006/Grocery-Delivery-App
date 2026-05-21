import { useState, useContext } from 'react'
import { CartContext } from '../context/CartContext'
import API from '../services/api'

function ProductCard({ product }) {

  const [showOrderBox, setShowOrderBox] = useState(false)

  const [paymentMethod, setPaymentMethod] = useState('')

  const [name, setName] = useState('')

  const [mobile, setMobile] = useState('')

  const [plotNo, setPlotNo] = useState('')

  const [landmark, setLandmark] = useState('')

  const [address, setAddress] = useState('')

  const { addToCart } = useContext(CartContext)

  const handleOrder = async (e) => {

    e.preventDefault()

    try {

      await API.post('/orders/place', {

        customer_name: name,

        mobile_number: mobile,

        product_name: product.name,

        product_price: product.price,

        address,

        landmark,

        payment_method: paymentMethod
      })

      alert('Order Placed Successfully ✅')

      setShowOrderBox(false)

    } catch (error) {

      console.log(error)

      alert('Order Failed ❌')
    }
  }

  return (
    <>
      <div className='product-card'>

        <img
          src={product.image}
          alt={product.name}
        />

        <h3>{product.name}</h3>

        <p>₹{product.price}</p>

        <div className='product-buttons'>

          <button
            className='cart-btn'
            onClick={() => addToCart(product)}
          >
            Add To Cart
          </button>

          <button
            className='order-btn'
            onClick={() => setShowOrderBox(true)}
          >
            Order Now
          </button>

        </div>

      </div>

      {
        showOrderBox && (

          <div className='order-modal'>

            <div className='order-box'>

              <h2>Delivery Details 🚚</h2>

              <form onSubmit={handleOrder}>

                <input
                  type='text'
                  placeholder='Full Name'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />

                <input
                  type='text'
                  placeholder='Plot / House No'
                  value={plotNo}
                  onChange={(e) => setPlotNo(e.target.value)}
                  required
                />

                <input
                  type='text'
                  placeholder='Mobile Number'
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  required
                />

                <input
                  type='text'
                  placeholder='Landmark'
                  value={landmark}
                  onChange={(e) => setLandmark(e.target.value)}
                  required
                />

                <textarea
                  placeholder='Full Delivery Address'
                  rows='4'
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                ></textarea>

                <select
                  required
                  value={paymentMethod}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                >

                  <option value=''>
                    Select Payment Method
                  </option>

                  <option value='UPI'>
                    UPI
                  </option>

                  <option value='CARD'>
                    Credit / Debit Card
                  </option>

                  <option value='NETBANKING'>
                    Net Banking
                  </option>

                  <option value='COD'>
                    Cash On Delivery
                  </option>

                </select>

                {
                  paymentMethod === 'UPI' && (

                    <input
                      type='text'
                      placeholder='Enter UPI ID (example@upi)'
                      required
                    />
                  )
                }

                {
                  paymentMethod === 'CARD' && (

                    <>
                      <input
                        type='text'
                        placeholder='Enter Card Number'
                        required
                      />

                      <input
                        type='text'
                        placeholder='Enter Card Holder Name'
                        required
                      />

                      <div className='card-details'>

                        <input
                          type='text'
                          placeholder='CVV'
                          required
                        />

                        <input
                          type='text'
                          placeholder='Expiry MM/YY'
                          required
                        />

                      </div>
                    </>
                  )
                }

                {
                  paymentMethod === 'NETBANKING' && (

                    <>
                      <input
                        type='text'
                        placeholder='Bank Name'
                        required
                      />

                      <input
                        type='text'
                        placeholder='Account Number'
                        required
                      />

                      <input
                        type='password'
                        placeholder='Transaction PIN'
                        required
                      />
                    </>
                  )
                }

                <div className='modal-buttons'>

                  <button
                    type='button'
                    className='cancel-btn'
                    onClick={() => setShowOrderBox(false)}
                  >
                    Cancel
                  </button>

                  <button
                    type='submit'
                    className='place-btn'
                  >
                    Place Order
                  </button>

                </div>

              </form>

            </div>

          </div>
        )
      }
    </>
  )
}

export default ProductCard