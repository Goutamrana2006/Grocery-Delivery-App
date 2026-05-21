function OrderTracker() {
  return (
    <div className='tracker'>
      <div className='step active'>Order Placed</div>
      <div className='step active'>Packed</div>
      <div className='step'>Out for Delivery</div>
      <div className='step'>Delivered</div>
    </div>
  )
}

export default OrderTracker