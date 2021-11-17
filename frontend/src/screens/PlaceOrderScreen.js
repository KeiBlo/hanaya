import React, { Fragment, useEffect } from "react"
import { Link } from "react-router-dom"
import Alert from "../components/alert"
import CheckOutSteps from "../components/check-out-steps"
import { useDispatch, useSelector } from "react-redux"
import { createOrder } from "../redux/actions/orderActions"

const PlaceOrderScreen = ({ history }) => {
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart)

  //Calculate prices
  const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2)
  }

  cart.itemsPrice = addDecimals(
    cart.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
  )

  cart.shippingPrice = addDecimals(cart.itemsPrice > 100 ? 0 : 100)

  cart.taxPrice = addDecimals(Number((0.15 * cart.itemsPrice).toFixed(2)))
  cart.totalPrice = (
    Number(cart.itemsPrice) +
    Number(cart.shippingPrice) +
    Number(cart.taxPrice)
  ).toFixed(2)

  const orderCreate = useSelector((state) => state.orderCreate)
  const { order, success, error } = orderCreate

  useEffect(() => {
    if (success) {
      history.pushState(`/order/${order._id}`)
    }
    //eslint-disable-next-line
  }, [history, success])

  const placeOrderHandler = () => {
    dispatch(
      createOrder({
        orderItems: cart.cartItems,
        shippingAddress: cart.shippingAddress,
        paymentMethod: cart.paymentMethod,
        itemsPrice: cart.itemsPrice,
        shippingPrice: cart.shippingPrice,
        taxPrice: cart.taxPrice,
        totalPrice: cart.totalPrice,
      })
    )
  }

  return (
    <div className="place-order-screen">
      <CheckOutSteps step1 step2 step3 step4 />
      <div className="place-order-screen__wrapper">
        <div className="shipping-summary">
          <h2 className="shipping-summary__title">Shipping</h2>
          <ul>
            <li>
              <h3>Address:</h3>
              <p>
                {cart.shippingAddress.address},{cart.shippingAddress.postalCode}
                ,{cart.shippingAddress.phoneNumber}
              </p>
            </li>

            <li>
              <h3>Payment Method:</h3>
              <p>{cart.paymentMethod}</p>
            </li>

            <li>
              <h3>Order Items</h3>
              <div className="order-items">
                {cart.cartItems.length === 0 ? (
                  <Alert alertType="primary"> Your cart is empty</Alert>
                ) : (
                  <ul>
                    {cart.cartItems.map((item, index) => (
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
              </div>
            </li>
          </ul>
        </div>

        <div className="order-summary">
          <h2 className="order-summary__title">Order Summary</h2>
          <ul>
            <li>
              <h3>Items</h3>
              <p>¥{cart.itemsPrice}</p>
            </li>
            <li>
              <h3>Shipping</h3>
              <p>¥{cart.shippingPrice}</p>
            </li>
            <li>
              <h3>Tax</h3>
              <p>¥{cart.taxPrice}</p>
            </li>
            <li>
              <h3>Total</h3>
              <p>¥{cart.totalPrice}</p>
            </li>
            <li>{error && <Alert alertType="danger">{error}</Alert>}</li>
          </ul>
        </div>
      </div>
      <button
        className="custom-btn"
        disabled={cart.cartItems === 0}
        onClick={placeOrderHandler}>
        Place Order
      </button>
    </div>
  )
}

export default PlaceOrderScreen
