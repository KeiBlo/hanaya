import React, { Fragment, useState, useEffect } from "react"
import axios from "axios"
import { PayPalButton } from "react-paypal-button-v2"
import { Link } from "react-router-dom"
import Alert from "../components/alert"
import Spinner from "../components/spinner"
import { useDispatch, useSelector } from "react-redux"
import {
  getOrderDetails,
  payOrder,
  deliverOrder,
} from "../redux/actions/orderActions"
import {
  ORDER_DELIVER_RESET,
  ORDER_PAY_RESET,
} from "../redux/constants/orderConstants"

const OrderScreen = ({ match, history }) => {
  const orderId = match.params.id

  const [sdkReady, setSdkReady] = useState(false)
  const dispatch = useDispatch()

  const orderDetails = useSelector((state) => state.orderDetails)
  const { order, loading, error } = orderDetails

  const orderPay = useSelector((state) => state.orderPay)
  const { loading: loadingPay, success: successPay } = orderPay

  const orderDeliver = useSelector((state) => state.orderDeliver)
  const { loading: loadingDeliver, success: successDeliver } = orderDeliver

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  if (!loading) {
    //Calculate prices
    const addDecimals = (num) => {
      return (Math.round(num * 100) / 100).toFixed(2)
    }

    order.itemsPrice = addDecimals(
      order.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
    )
  }

  useEffect(() => {
    if (!userInfo) {
      history.push("/login")
    }
    const addPayaPalScript = async () => {
      const { data: clientId } = await axios.get("/api/config/paypal")
      const script = document.createElement("script")
      script.type = "text/javascript"
      script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`
      script.async = true
      script.onload = () => {
        setSdkReady(true)
      }
      document.body.appendChild(script)
    }

    if (!order || successPay || successDeliver) {
      dispatch({ type: ORDER_PAY_RESET })
      dispatch({ type: ORDER_DELIVER_RESET })

      dispatch(getOrderDetails(orderId))
    } else if (!order.isPaid) {
      if (!window.paypal) {
        addPayaPalScript()
      } else {
        setSdkReady(true)
      }
    }
  }, [dispatch, orderId, successPay, successDeliver, order])

  const successPaymentHandler = (paymentResult) => {
    dispatch(payOrder(orderId, paymentResult))
  }

  const deliverHandler = () => {
    dispatch(deliverOrder(order))
  }

  return loading ? (
    <Spinner />
  ) : error ? (
    <Alert>{error}</Alert>
  ) : (
    <Fragment>
      <h1>Order {order.id}</h1>
      <div>
        <ul>
          <li>
            <h2>Shipping</h2>
            <p>
              <strong>Name:</strong> {order.user.name}
            </p>
            <p>
              <strong>Email:</strong>
              <a href={`mailto:${order.user.email}`}>{order.user.email}</a>
            </p>
            <p>
              <strong>Address:</strong>
              {order.shippingAddress.address},{" "}
              {order.shippingAddress.postalCode},{" "}
              {order.shippingAddress.phoneNumber}
            </p>
            {order.isDelivered ? (
              <Alert>Delivered on {order.deliveredAt}</Alert>
            ) : (
              <Alert>Not Delivered</Alert>
            )}
          </li>

          <li>
            <h2>Payment Method</h2>

            <p>
              <strong>Method:</strong>
              {order.paymentMethod}
            </p>
            {order.isPaid ? (
              <Alert>Paid on {order.paidAt}</Alert>
            ) : (
              <Alert>Not Paid</Alert>
            )}
          </li>

          <li>
            <h2>Order Items</h2>
            {order.orderItems.length === 0 ? (
              <p>Your order is empty</p>
            ) : (
              <ul>
                {order.orderItems.map((item, index) => (
                  <li key={index}>
                    <image src={item.image} alt={item.name} />
                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                    <p>
                      {item.qty}*{item.price} = ¥{item.qty * item.price}
                    </p>
                  </li>
                ))}
              </ul>
            )}
          </li>
        </ul>
      </div>

      <div>
        <ul>
          <li>
            <h2>Order Summary</h2>
          </li>
          <li>
            <h2>Items</h2>
            <p>¥{order.itemsPrice}</p>
          </li>
          <li>
            <h2>Shipping</h2>
            <p>¥{order.shippingPrice}</p>
          </li>
          <li>
            <h2>Tax</h2>
            <p>¥{order.taxPrice}</p>
          </li>
          <li>
            <h2>Total</h2>
            <p>¥{order.totalPrice}</p>
          </li>
          {!order.isPaid && <li>{loadingPay && <Spinner />}</li>}
          {!sdkReady ? (
            <Spinner />
          ) : (
            <PayPalButton
              amount={order.totalPrice}
              onSuccess={successPaymentHandler}
            />
          )}
          {loadingDeliver && <Spinner />}
          {userInfo && userInfo.isAdmin && order.isPaid && !order.isDelivered && (
            <li>
              <button
                type="button"
                className="custom-btn"
                onClick={deliverHandler}>
                Mark as Delivered
              </button>
            </li>
          )}
        </ul>
      </div>
    </Fragment>
  )
}

export default OrderScreen
