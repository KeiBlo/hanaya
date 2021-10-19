import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import Alert from '../components/alert'
import Spinner from '../components/spinner'
import {getUserDetails, updateUserProfile} from '../redux/actions/userActions'
import {listMyOrders} from '../redux/actions/orderActions'

const ProfileScreen = ({location, history}) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState(null)

  const dispatch = useDispatch()

  const userDetails = useSelector((state) => state.userDetails)
  const {loading, error, user} = userDetails

  const userLogin = useSelector((state) => state.userLogin)
  const {userInfo} = userLogin

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile)
  const {success} = userUpdateProfile

  const orderListMy = useSelector((state) => state.orderListMy)
  const {loading: loadingOrders, error: errorOrders, orders} = orderListMy

  useEffect(() => {
    if (!userInfo) {
      history.push('/login')
    } else {
      if (!user.name) {
        dispatch(getUserDetails('profile'))
        dispatch(listMyOrders())
      } else {
        setName(user.name)
        setEmail(user.email)
      }
    }
  }, [dispatch, history, userInfo, user])

  const submitHandler = (e) => {
    e.preventDefault()

    if (password !== confirmPassword) {
      setMessage('Password do not match')
    } else {
      dispatch(updateUserProfile({id: user._id, name, email, password}))
    }
  }
  return (
    <div>
      <div className='sign-up-log-in'>
        <h2 className='sign-up-log-in__title'>User Profile</h2>
        {message && <Alert>{message}</Alert>}
        {error && <Alert>{error}</Alert>}
        {success && <Alert>{success}</Alert>}
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
              Update
            </button>
          </div>
        </form>
      </div>
      <div>
        <h2>My Orders</h2>
        {loadingOrders ? (
          <Spinner />
        ) : errorOrders ? (
          <Alert>{errorOrders}</Alert>
        ) : (
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Date</th>
                <th>TOTAL</th>
                <th>PADI</th>
                <th>DELIVERED</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order._id}>
                  <td>{order._id}</td>
                  <td>{order.createdAt.substring(0, 10)}</td>
                  <td>{order.totalPrice}</td>
                  <td>
                    {order.isPaid ? (
                      order.paidAt.substring(0, 10)
                    ) : (
                      <i className='fas fa-times' style={{color: 'red'}}></i>
                    )}
                  </td>
                  <td>
                    {order.isDelivered ? (
                      order.deliveredAt.substring(0, 10)
                    ) : (
                      <i className='fas fa-times' style={{color: 'red'}}></i>
                    )}
                  </td>
                  <td>
                    <Link to={`/oreder/${order._id}`}>
                      <button>Details</button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  )
}

export default ProfileScreen
