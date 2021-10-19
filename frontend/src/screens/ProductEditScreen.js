import axios from 'axios'
import React, {Fragment, useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import Alert from '../components/alert'
import Spinner from '../components/spinner'
import {
  listProductDetails,
  updateProduct,
} from '../redux/actions/productActions'
import {PRODUCT_UPDATE_RESET} from '../redux/constants/productConstants'

const ProductEditScreen = ({match, history}) => {
  const productId = match.params.id

  const [name, setName] = useState('')
  const [price, setPrice] = useState(0)
  const [image, setImage] = useState('')
  const [brand, setBrand] = useState('')
  const [category, setCategory] = useState('')
  const [countInStock, setCountInStock] = useState(0)
  const [description, setDescription] = useState('')
  const [uploading, setUploading] = useState(false)

  const dispatch = useDispatch()

  const productDetails = useSelector((state) => state.productDetails)
  const {loading, error, product} = productDetails

  const productUpdate = useSelector((state) => state.productUpdate)
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = productUpdate

  useEffect(() => {
    if (successUpdate) {
      dispatch({type: PRODUCT_UPDATE_RESET})
      history.push('/admin/productlist')
    } else {
      if (!product.name || product._id !== productId) {
        dispatch(listProductDetails(productId))
      } else {
        setName(product.name)
        setPrice(product.price)
        setImage(product.image)
        setBrand(product.brand)
        setCategory(product.category)
        setCountInStock(product.countInStock)
        setDescription(product.description)
      }
    }
  }, [dispatch, history, productId, product, successUpdate])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(
      updateProduct({
        _id: productId,
        name,
        price,
        image,
        brand,
        category,
        description,
        countInStock,
      })
    )
  }

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0]
    const formData = new FormData()
    formData.append('image', file)
    setUploading(true)

    try {
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }

      const {data} = await axios.post('/api/upload', formData, config)

      setImage(data)
      setUploading(false)
    } catch (error) {
      console.log(error)
      setUploading(false)
    }
  }

  return (
    <Fragment>
      <Link to='/admin/productlist'>Go Back</Link>
      <div className='log-in-and-sign-up'>
        <div className='sign-up-log-in'>
          <h1 className='sign-up-log-in__title'>Edit Product</h1>
          {loadingUpdate && <Spinner />}
          {errorUpdate && <Alert>{errorUpdate}</Alert>}
          {loading ? (
            <Spinner />
          ) : error ? (
            <Alert>{error}</Alert>
          ) : (
            <form className='sign-up-log-in__form' onSubmit={submitHandler}>
              <label>Name</label>
              <input
                type='name'
                className='sign-up-log-in__input'
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></input>
              <label>Price</label>
              <input
                type='number'
                className='sign-up-log-in__input'
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              ></input>
              <label>Image</label>
              <input
                type='text'
                value={image}
                onChange={(e) => setImage(e.target.value)}
              ></input>
              <lable>Choose file</lable>
              <input
                type='file'
                id='image-file'
                onChange={uploadFileHandler}
              ></input>
              {uploading && <Spinner />}
              <label>Brand</label>
              <input
                type='text'
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
              ></input>
              <label>Count In Stock</label>
              <input
                type='number'
                value={countInStock}
                onChange={(e) => setCountInStock(e.target.value)}
              ></input>

              <label>Category</label>
              <input
                type='number'
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              ></input>
              <label>Description</label>
              <input
                type='text'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></input>
              <div className='buttons'>
                <button className='custom-btn' type='submit'>
                  Update
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </Fragment>
  )
}

export default ProductEditScreen
