import Navbar from '../components/Navbar'
import OrderTracker from '../components/OrderTracker'

function Tracking() {
  return (
    <>
      <Navbar />

      <div className='tracking-page'>
        <h1>Track Your Order</h1>

        <OrderTracker />
      </div>
    </>
  )
}

export default Tracking