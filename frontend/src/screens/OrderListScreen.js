import React, { Fragment, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Alert from '../components/alert'
import Spinner from '../components/spinner'
import { listOrders } from '../redux/actions/orderActions'

const OrderListScreen = ({ history }) => {
  const dispatch = useDispatch()

  const orderList = useSelector((state) => state.orderList)
  const { loading, error, orders } = orderList

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listOrders())
    } else {
      history.push('/login')
    }
  }, [dispatch, history, userInfo])

  return (
    <div className='page-wrapper'>
      <h1 className='page-wrapper__title'>Orders</h1>

      {loading ? (
        <Spinner />
      ) : error ? (
        <Alert>{error}</Alert>
      ) : orders.length === 0 ? (
        <p>The it no orders</p>
      ) : (
        <Fragment>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>USER</th>
                <th>DATE</th>
                <th>TOTAL</th>
                <th>PAID</th>
                <th>DELIVERED</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order._id}>
                  <td>{order._id}</td>
                  <td>{order.user && order.user.name}</td>
                  <td>{order.createdAt.substring(0, 10)}</td>
                  <td>¥{order.totalPrice}</td>
                  <td>
                    {order.isPaid ? (
                      order.paidAt.substring(0, 10)
                    ) : (
                      <i className='fas fa-times' style={{ color: 'red' }}></i>
                    )}
                  </td>
                  <td>
                    {order.isDelivered ? (
                      order.deliveredAt.substring(0, 10)
                    ) : (
                      <i className='fas fa-times' style={{ color: 'red' }}></i>
                    )}
                  </td>
                  <td>
                    <Link to={`/admin/order/${order._id}`}>
                      <button type='button' className='custom-btn'>
                        {' '}
                        Details
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Fragment>
      )}
    </div>
  )
}

export default OrderListScreen
