import React, { useState, useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'

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
      className='dropdown'
      ref={(el) => {
        menuRef.current = el
        setRefVisible(!!el)
      }}>
      <div className='dropdown-nav-wrapper'>
        <ul className='dropdown-nav'>
          <li className='dropdown-nav__item'>
            <NavLink to='/admin/userlist'>Users</NavLink>
          </li>
          <li className='dropdown-nav__item'>
            <NavLink to='/admin/productlist'>Products</NavLink>
          </li>
          <li className='dropdown-nav__item'>
            <NavLink to='/admin/orderList'>Orders</NavLink>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Dropdown
