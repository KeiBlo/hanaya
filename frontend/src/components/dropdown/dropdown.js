import React from "react"
import { Link } from "react-router-dom"

const Dropdown = () => {
  return (
    <div className="dropdown">
      <div className="dropdown-nav-wrapper">
        <ul className="dropdown-nav">
          <li className="dropdown-nav__item">
            <Link to="/admin/userlist">Users</Link>
          </li>
          <li className="dropdown-nav__item">
            <Link to="/admin/products">Products</Link>
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
