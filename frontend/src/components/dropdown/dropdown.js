import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

const Dropdown = ({ setAdminMenu }) => {
  const [refVisible, setRefVisible] = useState(false)

  const menuRef = useRef()

  useEffect(() => {
    if (!refVisible) {
      return
    }
    let handler = (event) => {
      if (!menuRef.current.contains(event.target)) {
        setAdminMenu(false)
      }
    }
    document.addEventListener('mousedown', handler)

    return () => {
      document.removeEventListener('mousedown', handler)
    }
  })

  return (
    <div
      className="dropdown"
      ref={(el) => {
        menuRef.current = el
        setRefVisible(!!el)
      }}>
      <div className="dropdown-nav-wrapper">
        <ul className="dropdown-nav">
          <li className="dropdown-nav__item">
            <Link to="/admin/userlist">Users</Link>
          </li>
          <li className="dropdown-nav__item">
            <Link to="/admin/productlist">Products</Link>
          </li>
          <li className="dropdown-nav__item">
            <Link to="/admin/orderList">Orders</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Dropdown
