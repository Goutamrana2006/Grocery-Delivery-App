import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import API from '../services/api'

function Login() {

  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async (e) => {

    e.preventDefault()

    try {

      const res = await API.post('/auth/login', {
        email,
        password
      })

      localStorage.setItem('token', res.data.token)

      alert('Login Successful ✅')

      navigate('/products')

    } catch (error) {

      console.log(error)

      alert('Invalid Email or Password ❌')
    }
  }

  return (
    <>
      <Navbar />

      <div className='auth-page'>

        <div className='auth-container'>

          <div className='auth-left'>
            <img
              src='https://images.pexels.com/photos/264547/pexels-photo-264547.jpeg'
              alt='FreshKart Login'
            />
          </div>

          <div className='auth-right'>

            <form
              className='auth-form'
              onSubmit={handleLogin}
            >

              <h2>Welcome Back 👋</h2>

              <p>
                Login to continue shopping with FreshKart
              </p>

              <input
                type='email'
                placeholder='Enter Your Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <input
                type='password'
                placeholder='Enter Your Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <button type='submit'>
                Login
              </button>

              <span>
                Don’t have an account?
                <Link to='/register'>
                  Register
                </Link>
              </span>

            </form>

          </div>

        </div>

      </div>
    </>
  )
}

export default Login