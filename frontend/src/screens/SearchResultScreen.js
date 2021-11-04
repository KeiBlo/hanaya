import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Spinner from '../components/spinner'
import { searchProducts } from '../redux/actions/productActions'
import Alert from '../components/alert'
import Product from '../components/product'

const SearchResultScreen = ({ match }) => {
  const dispatch = useDispatch()
  const keyword = match.params.keyword

  const productSearch = useSelector((state) => state.productSearch)

  const { loading, error, searchResults } = productSearch

  useEffect(() => {
    dispatch(searchProducts(keyword))
  }, [dispatch, keyword])

  return (
    <div className='product-page--wrapper'>
      {loading && searchResults.length === 0 ? (
        <Spinner />
      ) : error ? (
        <Alert>{error}</Alert>
      ) : (
        searchResults.map((product) => {
          return <Product key={product._id} product={product} />
        })
      )}
    </div>
  )
}

export default SearchResultScreen
