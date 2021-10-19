import React, {useState} from 'react'

const SearchBox = ({history}) => {
  const [keyword, setKeyword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    if (keyword.trimEnd()) {
      history.push(`/search/${keyword}`)
    } else {
      history.push('/')
    }
  }
  return (
    <form onSubmit={submitHandler}>
      <input
        type='text'
        onChange={(e) => setKeyword(e.target.value)}
        placeholder='Search Products...'
      />
      <button type='submit'>Search</button>
    </form>
  )
}

export default SearchBox
