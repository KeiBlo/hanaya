import React from "react"
import { Route } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { Link, NavLink } from "react-router-dom"
import { logout } from "../../redux/actions/userActions"
import { ReactComponent as CloseIcon } from "../../assets/svg/cross.svg"

const Sidebar = () => {
  const dispatch = useDispatch()
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const logoutHandler = () => {
    dispatch(logout())
  }

  return (
    <div className="mobile-nav">
      <CloseIcon />
      <ul className="mobile-nav__list">
        <li className="mobile-nav__list__item">
          <Link
            className="mobile-nav__list__item--link"
            to="/category/birthday">
            Birthday
          </Link>
        </li>
        <li className="mobile-nav__list__item">
          <Link to="/category/newbaby" className="mobile-nav__list__item--link">
            New Baby
          </Link>
        </li>
        <li className="mobile-nav__list__item">
          <Link to="/category/romance" className="mobile-nav__list__item--link">
            Romance
          </Link>
        </li>
        <li className="mobile-nav__list__item">
          <Link
            to="/category/anniversary"
            className="mobile-nav__list__item--link">
            Anniversary
          </Link>
        </li>
        <li className="mobile-nav__list__item">
          <Link
            to="/category/congradulations"
            className="mobile-nav__list__item--link">
            Congradulations
          </Link>
        </li>
        <li className="mobile-nav__list__item">
          <Link to="/profile" className="mobile-nav__list__item--link">
            Profile
          </Link>
        </li>

        <li className="mobile-nav__list__item">
          <Link to="/cart" className="mobile-nav__list__item--link">
            Cart
          </Link>
        </li>
        <li onClick={logoutHandler} className="mobile-nav__list__item">
          <Link to="/" className="mobile-nav__list__item--link">
            Logout
          </Link>
        </li>
        <li className="mobile-nav__list__item">
          <Link to="/login" className="mobile-nav__list__item--link">
            Sign In
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
