import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import ImgGallery from "../components/img-gallery"
import { Link } from "react-router-dom"
import Alert from "../components/alert"
import Rating from "../components/rating"
import Meta from "../components/meta"

import {
  listProductDetails,
  createProductReview,
} from "../redux/actions/productActions"
import { PRODUCT_CREATE_REVIEW_RESET } from "../redux/constants/productConstants"
import { createProduct } from "../redux/actions/productActions"

const ProductDetailsScreen = ({ match }) => {
  const [qty, setQty] = useState(1)
  const [rating, setRating] = useState(0)
  const [comment, setComment] = useState("")
  const [boxNumber, setBoxNumber] = useState(1)

  const dispatch = useDispatch()

  const productDetails = useSelector((state) => state.productDetails)
  const { loading, error, product } = productDetails

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const productReviewCreate = useSelector((state) => state.productReviewCreate)

  const { success: successProductReview, error: errorProductReview } =
    productReviewCreate

  useEffect(() => {
    if (successProductReview) {
      alert("Review Submitted!")
      setRating(0)
      setComment("")
      dispatch({ type: PRODUCT_CREATE_REVIEW_RESET })
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
      <div className="details__content-box">
        <p className="details__description">{product.description}</p>
      </div>
    )
  } else if (boxNumber === 2) {
    boxToShow = (
      <div className="details__content-box">
        <p className="details__description">
          Lux: 5x Esperance Rose, 5x Avalanche Rose, 10x Ornithogalum, 5x White
          freesia, 5x White Calla Lily, 5x Hard Ruscus, 5x Asparagus
        </p>
        <p className="details__description">
          Grande: 9x Esperance Rose, 9x Avalanche Rose, 23x Ornithogalum, 10x
          White freesia, 9x White Calla Lily, 10x Hard Ruscus, 10x Asparagus
        </p>
      </div>
    )
  } else {
    boxToShow = (
      <div className="details__content-box">
        <p className="details__description">
          Standard Tracked Delivery (Kuroneko): Order by 8pm for next day
          delivery. Sunday delivery not currently available.
        </p>
        <p className="details__description">
          Standard Tracked Delivery Plus (Kuroneko) Order by 8pm for next day
          delivery and receive a two hour delivery window, with in-flight
          options available. Sunday delivery not currently available.
        </p>
        <p className="details__description">
          Express Tokyo (7am - 12pm): Order by 8pm the day before, with
          deliveries made between 7am - 12pm on the same day.
        </p>
      </div>
    )
  }

  const submitHandler = (e) => {
    e.preventDefault()

    dispatch(createProductReview(match.params.id, { rating, comment }))
  }

  return (
    <div className="product-details">
      <div className="product-details__left">
        <ImgGallery product={product} />
      </div>
      <div className="product-details__right">
        <div>
          <nav className="details__nav">
            <ul className="details__nav-list">
              <li
                className="details__nav-item"
                onClick={(e) => handleClick(e, 1)}>
                <h2
                  className={
                    boxNumber === 1
                      ? "is-active details__nav-link"
                      : "details__nav-link"
                  }>
                  Details
                </h2>
              </li>
              <li
                className="details__nav-item"
                onClick={(e) => handleClick(e, 2)}>
                <h2
                  className={
                    boxNumber === 2
                      ? "is-active details__nav-link"
                      : "details__nav-link"
                  }>
                  More{" "}
                </h2>
              </li>
              <li
                className="details__nav-item"
                onClick={(e) => handleClick(e, 3)}>
                <h2
                  className={
                    boxNumber === 3
                      ? "is-active details__nav-link"
                      : "details__nav-link"
                  }>
                  Delivery
                </h2>
              </li>
            </ul>
          </nav>
          <ul className="details-list">
            <li className="details-list__item">
              <h2 className="details-list__item--name">{product.name}</h2>
            </li>
            <li className="details-list__item">
              Price:{" "}
              <span className="details-list__item--info">¥{product.price}</span>
            </li>
            <li className="details-list__item">
              Status:{" "}
              <span className="details-list__item--info">
                {product.countInStock > 0 ? "In stock" : "Out Of Stock"}{" "}
              </span>
            </li>
            <li className="details-list__item">
              {" "}
              Reviews:{" "}
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
              />
            </li>

            {product.countInStock > 0 && (
              <li className="details-list__item">
                <form
                  type="select"
                  value="qty"
                  onChange={(e) => setQty(e.target.value)}>
                  <label>Qauntity: </label>
                  <select>
                    {" "}
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
            className="custom-btn"
            type="submit"
            disabled={product.countInStock === 0}>
            Add to Cart{" "}
          </button>
        </div>

        <div>
          <div style={{ margin: "3rem 0" }}>
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
            </ul>
          </div>
          <div style={{ margin: "2rem 0" }}>
            <h2>Write a Customer Review</h2>
            {errorProductReview && <Alert>{errorProductReview}</Alert>}
            {userInfo ? (
              <div className="review__wrapper">
                <form
                  onSubmit={submitHandler}
                  controlId="rating"
                  className="review-form">
                  <div className="review-form__item">
                    <label>Rating</label>
                    <select
                      value={rating}
                      onChange={(e) => setRating(e.target.value)}>
                      <option value="">Select ...</option>
                      <option value="1">1 - Poor</option>
                      <option value="2">2 - Fair</option>
                      <option value="3">3 - Good</option>
                      <option value="4">4 - Very Good</option>
                      <option value="5">5 - Excellent</option>
                    </select>
                  </div>
                  <div className="review-form__item">
                    <label>Comment</label>
                    <input
                      type="textarea"
                      controlid="comment"
                      row="3"
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}></input>
                  </div>
                  <button type="submit" className="custom-btn">
                    Submit
                  </button>
                </form>
              </div>
            ) : (
              <Alert>
                {" "}
                Please{" "}
                <Link to="/login" style={{ color: "blue" }}>
                  sign in
                </Link>{" "}
                to write a review
              </Alert>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetailsScreen
