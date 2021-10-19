import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import Alert from '../components/alert'
import Spinner from '../components/spinner'
import {register} from '../redux/actions/userActions'

const RegisterScreen = ({location, history}) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState(null)

  const dispatch = useDispatch()

  const userRegister = useSelector((state) => state.userRegister)
  const {loading, error, userInfo} = userRegister

  const redirect = location.search ? location.search.split('=')[1] : '/'

  useEffect(() => {
    if (userInfo) {
      history.push(redirect)
    }
  }, [history, userInfo, redirect])

  const submitHandler = (e) => {
    e.preventDefault()

    if (password !== confirmPassword) {
      setMessage('Password do not match')
    } else {
      dispatch(register(name, email, password))
    }
  }
  return (
    <div className='log-in-and-sign-up'>
      <div className='sign-up-log-in'>
        <h1 className='sign-up-log-in__title'>Sing Up</h1>
        {message && <Alert>{message}</Alert>}
        {loading && <Spinner />}
        <span> Log in with your email and password</span>
        <form className='sign-up-log-in__form' onSubmit={submitHandler}>
          <label>Name</label>
          <input
            type='name'
            className='sign-up-log-in__input'
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
          <label>Email</label>
          <input
            type='email'
            className='sign-up-log-in__input'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>

          <label>Password</label>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='sign-up-log-in__input'
          ></input>
          <label>Confirm password</label>
          <input
            type='password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className='sign-up-log-in__input'
          ></input>

          <div className='buttons'>
            <button className='custom-btn' type='submit'>
              Sing In
            </button>
          </div>
        </form>
        <div>
          <p>
            Have an Account ?{' '}
            <Link to={redirect ? `/login?redirect=${redirect}` : '/login'}>
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default RegisterScreen
