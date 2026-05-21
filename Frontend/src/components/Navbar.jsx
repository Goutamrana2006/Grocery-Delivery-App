import { Link } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'

function Navbar() {
  return (
    <nav className='navbar'>
      <h2>FreshKart</h2>

      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/products'>Products</Link></li>
        <li><Link to='/tracking'>Tracking</Link></li>
        <li><Link to='/login'>Login</Link></li>
      </ul>

      <Link to='/cart' className='cart-icon'>
        <FaShoppingCart />
      </Link>
    </nav>
  )
}

export default Navbar