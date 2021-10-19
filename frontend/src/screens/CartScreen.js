import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Alert from '../components/alert'
import {Link} from 'react-router-dom'
import {addToCart, removeFromCart} from '../redux/actions/cartActions'
import {Fragment} from 'react'

const CartScreen = ({match, location, history}) => {
  const productId = match.params.id
  const qty = location.search ? Number(location.search.split('=')[1]) : 1

  const dispatch = useDispatch()

  const cart = useSelector((state) => state.cart)
  const {cartItems} = cart

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty))
    }
  }, [dispatch, productId, qty])

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id))
  }

  const checkoutHandler = () => {
    history.push('/login?redirect=shipping')
  }

  return (
    <Fragment>
      <h1>Shopping cart</h1>
      {cartItems.length === 0 ? (
        <Alert>
          Your cart is empty <Link to='/'>Go Back</Link>
        </Alert>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <Fragment>
              <li key={item.product}>
                <img src={item.image} alt={item.name} />
              </li>
              <li>
                <Link to={`/product/${item.product}`}>{item.name}</Link>
              </li>
              <li>{item.price}</li>

              <li className='details-list__item'>
                <form
                  type='select'
                  value={item.qty}
                  onChange={(e) =>
                    dispatch(addToCart(item.product, Number(e.target.value)))
                  }
                >
                  <label>Qauntity: </label>
                  <select>
                    {' '}
                    {[...Array(item.countInStock).keys()].map((x) => (
                      <option key={x + 1} value={x + 1}>
                        {x + 1}
                      </option>
                    ))}
                  </select>
                </form>
              </li>
              <li>
                <button onClick={() => removeFromCartHandler(item.product)}>
                  <i className='fas fa-trash'></i>
                </button>
              </li>
            </Fragment>
          ))}
        </ul>
      )}

      <ul>
        <li>
          <h2>
            Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)})
            items
          </h2>
          $
          {cartItems
            .reduce((acc, item) => acc + item.qty * item.price, 0)
            .toFixed(2)}
        </li>

        <li>
          <button disabled={cartItems.length === 0} onClicl={checkoutHandler}>
            Proceed to Checkout
          </button>
        </li>
      </ul>
    </Fragment>
  )
}

export default CartScreen
