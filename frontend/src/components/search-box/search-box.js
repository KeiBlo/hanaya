import React, { useState } from 'react'
import { ReactComponent as MagnifyingGlass } from '../../assets/svg/search.svg'
const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    if (keyword.trim()) {
      history.push(`/search/${keyword}`)
      setKeyword('')
    } else {
      history.push('/')
    }
  }
  return (
    <form onSubmit={submitHandler} className='search'>
      <input
        className='search__input'
        type='text'
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder='Search Products'
      />
      <button className='search__btn' type='submit'>
        <svg className='search__icon'>
          <MagnifyingGlass />
        </svg>
      </button>
    </form>
  )
}

export default SearchBox
