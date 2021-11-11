import React, { useState } from "react"
import CheckOutSteps from "../components/check-out-steps"
import { useDispatch, useSelector } from "react-redux"
import { savePaymentMethod } from "../redux/actions/cartActions"

const PaymentScreen = ({ history }) => {
  const cart = useSelector((state) => state.cart)
  const { shippingAddress } = cart

  if (!shippingAddress) {
    history.push("/shipping")
  }

  const [paymentMethod, setPaymentMethod] = useState("PayPal")

  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(savePaymentMethod(paymentMethod), history.push("/placeorder"))
  }

  return (
    <div className="payment-screen">
      <CheckOutSteps step1 step2 step3 />
      <h1 className="payment-screen__title">Payment Method</h1>

      <form className="payment-form" onSubmit={submitHandler}>
        <div className="payment-form__wrapper">
          <label for="PayPal">PayPal or Credit Card</label>
          <input
            type="radio"
            name="paymentMethod"
            id="PayPal"
            value="PayPal"
            checked
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
        </div>
        <button type="submit" className="custom-btn">
          Continue
        </button>
      </form>
    </div>
  )
}

export default PaymentScreen
