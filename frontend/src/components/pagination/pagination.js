import React from 'react'
import {Link} from 'react-router-dom'

const Pagination = ({pages, page, isAdmin = false, keyword = ''}) => {
  return (
    pages > 1 && (
      <ul>
        {[...Array(pages).keys()].map((x) => (
          <Link
            key={x + 1}
            to={keyword ? `/search/${keyword}/page/${x + 1}` : `/page/${x + 1}`}
          >
            <li active={x + 1 === page}>{x + 1}</li>
          </Link>
        ))}
      </ul>
    )
  )
}

export default Pagination
