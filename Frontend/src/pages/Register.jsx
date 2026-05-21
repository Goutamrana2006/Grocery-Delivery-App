import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import API from '../services/api'

function Register() {

  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleRegister = async (e) => {

    e.preventDefault()

    try {

      await API.post('/auth/register', {
        name,
        email,
        password
      })

      alert('Registration Successful ✅')

      navigate('/login')

    } catch (error) {

      console.log(error)

      alert('Registration Failed ❌')
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
              alt='FreshKart Register'
            />
          </div>

          <div className='auth-right'>

            <form
              className='auth-form'
              onSubmit={handleRegister}
            >

              <h2>Create Account 🚀</h2>

              <p>
                Register to continue shopping with FreshKart
              </p>

              <input
                type='text'
                placeholder='Enter Your Name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />

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
                Create Account
              </button>

              <span>
                Already have an account?
                <Link to='/login'>
                  Login
                </Link>
              </span>

            </form>

          </div>

        </div>

      </div>
    </>
  )
}

export default Register