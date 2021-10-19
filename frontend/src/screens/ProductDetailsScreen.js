import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import ImgGallery from '../components/img-gallery'
import {Link} from 'react-router-dom'
import Alert from '../components/alert'
import Rating from '../components/rating'
import Meta from '../components/meta'
import {
  listProductDetails,
  createProductReview,
} from '../redux/actions/productActions'
import {PRODUCT_CREATE_REVIEW_RESET} from '../redux/constants/productConstants'
import {createProduct} from '../redux/actions/productActions'

const ProductDetailsScreen = ({match}) => {
  const [qty, setQty] = useState(1)
  const [rating, setRating] = useState(0)
  const [comment, setComment] = useState('')
  const [boxNumber, setBoxNumber] = useState(1)

  const dispatch = useDispatch()

  const productDetails = useSelector((state) => state.productDetails)
  const {loading, error, product} = productDetails

  const userLogin = useSelector((state) => state.userLogin)
  const {userInfo} = userLogin

  const productReviewCreate = useSelector((state) => state.productReviewCreate)

  const {success: successProductReview, error: errorProductReview} =
    productReviewCreate

  useEffect(() => {
    if (successProductReview) {
      alert('Review Submitted!')
      setRating(0)
      setComment('')
      dispatch({type: PRODUCT_CREATE_REVIEW_RESET})
    }
    dispatch(listProductDetails(match.params.id))
  }, [dispatch, match, successProductReview])

  const handleClick = (e, number) => {
    e.preventDefault()
    setBoxNumber(number)
  }
  let boxToShow = null
  if (boxNumber === 1) {
    boxToShow = (
      <div className='details__content-box'>
        <p className='details__description'>{product.description}</p>
      </div>
    )
  } else if (boxNumber === 2) {
    boxToShow = (
      <div className='details__content-box'>
        <p className='details__description'>
          Lux: 5x Esperance Rose, 5x Avalanche Rose, 10x Ornithogalum, 5x White
          freesia, 5x White Calla Lily, 5x Hard Ruscus, 5x Asparagus
        </p>
        <p className='details__description'>
          Grande: 9x Esperance Rose, 9x Avalanche Rose, 23x Ornithogalum, 10x
          White freesia, 9x White Calla Lily, 10x Hard Ruscus, 10x Asparagus
        </p>
      </div>
    )
  } else {
    boxToShow = (
      <div className='details__content-box'>
        <p className='details__description'>
          Standard Tracked Delivery (Kuroneko): Order by 8pm for next day
          delivery. Sunday delivery not currently available.
        </p>
        <p className='details__description'>
          Standard Tracked Delivery Plus (Kuroneko) Order by 8pm for next day
          delivery and receive a two hour delivery window, with in-flight
          options available. Sunday delivery not currently available.
        </p>
        <p className='details__description'>
          Express Tokyo (7am - 12pm): Order by 8pm the day before, with
          deliveries made between 7am - 12pm on the same day.
        </p>
      </div>
    )
  }

  const submitHandler = (e) => {
    e.preventDefault()

    dispatch(createProductReview(match.params.id, {rating, comment}))
  }

  return (
    <div className='product-detail'>
      <div className='details'>
        <div className='product-detail__container'>
          <div className='product-details__left'>
            <ImgGallery
              id={product.id}
              imageLink={product.image}
              additionalImg={product.additionalImg}
              name={product.name}
            />
          </div>

          <div className='product-detail__right'>
            <nav className='details__nav'>
              <ul className='details__nav-list'>
                <li
                  className='details__nav-item'
                  onClick={(e) => handleClick(e, 1)}
                >
                  <Link className='details__nav-link'>Details</Link>
                </li>
                <li
                  className='details__nav-item'
                  onClick={(e) => handleClick(e, 2)}
                >
                  <Link className='details__nav-link'>More </Link>
                </li>
                <li
                  className='details__nav-item'
                  onClick={(e) => handleClick(e, 3)}
                >
                  <Link className='details__nav-link'>Delivery</Link>
                </li>
              </ul>
            </nav>
            <ul className='details-list'>
              <li className='details-list__item'>
                <h2>{product.name}</h2>
              </li>
              <li className='details-list__item'>Price: ${product.price}</li>
              <li className='details-list__item'>
                Status: {product.countInStock > 0 ? 'In stock' : 'Out Of Stock'}
              </li>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
              />
              {product.countInStock > 0 && (
                <li className='details-list__item'>
                  <form
                    type='select'
                    value='qty'
                    onChange={(e) => setQty(e.target.value)}
                  >
                    <label>Qauntity: </label>
                    <select>
                      {' '}
                      {[...Array(product.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </select>
                  </form>
                </li>
              )}
            </ul>

            {boxToShow}

            <button
              className='custom-btn'
              type='submit'
              disabled={product.countInStock === 0}
            >
              Add to Cart{' '}
            </button>
          </div>
        </div>
      </div>

      <div>
        <h2>Reviews</h2>
        {product.reviews.length === 0 && <Alert>No Reviews</Alert>}
        <ul>
          {product.reviews.map((review) => (
            <li key={review._id}>
              <strong>{review.name}</strong>
              <Rating value={review.rating} />
              <p>{review.createdAt.substring(0, 10)}</p>
              <p>{review.comment}</p>
            </li>
          ))}
          <li>
            <h2>Write a Customer Review</h2>
            {errorProductReview && <Alert>{errorProductReview}</Alert>}
            {userInfo ? (
              <form onSubmit={submitHandler} controlId='rating'>
                <label>Rating</label>
                <select
                  value={rating}
                  onChange={(e) => setRating(e.target.value)}
                >
                  <option value=''>Select ...</option>
                  <option value='1'>1 - Poort</option>
                  <option value='2'>2 - Fair</option>
                  <option value='3'>3 - Good</option>
                  <option value='4'>4 - Very Good</option>
                  <option value='5'>5 - Excellent</option>
                </select>
                <label>Comment</label>
                <input
                  type='textarea'
                  controlId='comment'
                  row='3'
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                ></input>
                <button type='submit'>Submit</button>
              </form>
            ) : (
              <Alert>
                {' '}
                Please <Link to='/login'>sign in</Link> to write a review
              </Alert>
            )}
          </li>
        </ul>
      </div>
    </div>
  )
}

export default ProductDetailsScreen
