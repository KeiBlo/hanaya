import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import Spinner from '../components/spinner'
import {searchProducts} from '../redux/actions/productActions'

const SearchResultScreen = ({match}) => {
  const dispatch = useDispatch()
  const keyword = match.params.keyword

  useEffect(() => {
    dispatch(searchProducts(keyword))
  }, [dispatch, keyword])

  return <div></div>
}

export default SearchResultScreen
