import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import Alert from '../components/alert'
import Spinner from '../components/spinner'
import {login} from '../redux/actions/userActions'

const LogingScreen = ({location, history}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const {loading, error, userInfo} = userLogin

  const redirect = location.search ? location.search.split('=')[1] : '/'

  useEffect(() => {
    if (userInfo) {
      history.push(redirect)
    }
  }, [history, userInfo, redirect])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(login(email, password))
  }
  return (
    <div className='log-in-and-sign-up'>
      <div className='sign-up-log-in'>
        <h1 className='sign-up-log-in__title'>I already have an account</h1>
        {error && <Alert>{error}</Alert>}
        {loading && <Spinner />}
        <span> Log in with your email and password</span>
        <form className='sign-up-log-in__form' onSubmit={submitHandler}>
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

          <div className='buttons'>
            <button className='custom-btn' type='submit'>
              Sing In
            </button>
          </div>
        </form>
        <div>
          <p>
            New Customer ?{' '}
            <Link
              to={redirect ? `/register?redirect=${redirect}` : '/register'}
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default LogingScreen
