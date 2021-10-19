import React, {useState} from 'react'
import CheckOutSteps from '../components/check-out-steps'
import {useDispatch, useSelector} from 'react-redux'
import {savePaymentMethod} from '../redux/actions/cartActions'

const PaymentScreen = ({history}) => {
  const cart = useSelector((state) => state.cart)
  const {shippingAddress} = cart

  if (!shippingAddress) {
    history.push('/shipping')
  }

  const [paymentMethod, setPaymentMethod] = useState('PayPal')

  const dispatch = useDispatch()
  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(savePaymentMethod(paymentMethod), history.push('/placeorder'))
  }

  return (
    <div>
      <CheckOutSteps step1 step2 step3 />
      <h1>Payment Method</h1>

      <form className='order-form' onSubmit={submitHandler}>
        <input
          type='checkbox'
          id='PayPal'
          value='PayPal'
          checked
          onChange={(e) => setPaymentMethod(e.target.value)}
        />
        <label for='PayPal'> PayPal</label>
        <button type='submit'>Continue</button>
      </form>
    </div>
  )
}

export default PaymentScreen
