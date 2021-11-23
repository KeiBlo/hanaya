import React from 'react'
import { Link } from 'react-router-dom'

const Pagination = ({
  pages,
  page,
  isAdmin = false,
  category,
  keyword = '',
}) => {
  return (
    pages > 1 && (
      <div className='pagination'>
        <ul className='pagination__list'>
          {[...Array(pages).keys()].map((x) => (
            <Link
              key={x + 1}
              to={
                !isAdmin
                  ? keyword
                    ? `/search/${keyword}/page/${x + 1}`
                    : `/category/${category}/page/${x + 1}`
                  : `/admin/productlist/${x + 1}`
              }>
              <li active={x + 1 === page} className='pagination__list--item'>
                {x + 1}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    )
  )
}

export default Pagination
