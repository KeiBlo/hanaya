import React, { Fragment } from "react"
import { Route } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { Link, NavLink } from "react-router-dom"
import { logout } from "../../redux/actions/userActions"
import { ReactComponent as CloseIcon } from "../../assets/svg/cross.svg"

const Sidebar = ({ toggleSidebar, sidebar }) => {
  const dispatch = useDispatch()
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const logoutHandler = () => {
    dispatch(logout())
  }

  return (
    <div className={sidebar ? "sidebar-nav active" : "sidebar-nav"}>
      <div className="close-btn-wrapper">
        <CloseIcon
          className="close-btn-wrapper__icon"
          onClick={toggleSidebar}
        />
      </div>
      <ul className="sidebar-nav__list">
        <li className="sidebar-nav__list__item">
          <Link
            className="sidebar-nav__list__item--link"
            to="/category/birthday">
            Birthday
          </Link>
        </li>
        <li className="sidebar-nav__list__item">
          <Link
            to="/category/newbaby"
            className="sidebar-nav__list__item--link">
            New Baby
          </Link>
        </li>
        <li className="sidebar-nav__list__item">
          <Link
            to="/category/romance"
            className="sidebar-nav__list__item--link">
            Romance
          </Link>
        </li>
        <li className="sidebar-nav__list__item">
          <Link
            to="/category/anniversary"
            className="sidebar-nav__list__item--link">
            Anniversary
          </Link>
        </li>
        <li className="sidebar-nav__list__item">
          <Link
            to="/category/congradulations"
            className="sidebar-nav__list__item--link">
            Congradulations
          </Link>
        </li>
        {userInfo ? (
          <Fragment>
            {userInfo && userInfo.isAdmin && (
              <Fragment>
                <li className="sidebar-nav__list__item">
                  <Link
                    className="sidebar-nav__list__item--link"
                    to="/admin/userlist">
                    Users
                  </Link>
                </li>
                <li className="sidebar-nav__list__item">
                  <Link
                    className="sidebar-nav__list__item--link"
                    to="/admin/productlist">
                    Products
                  </Link>
                </li>
                <li className="sidebar-nav__list__item">
                  <Link
                    className="sidebar-nav__list__item--link"
                    to="/admin/orderList">
                    Orders
                  </Link>
                </li>
              </Fragment>
            )}
            <li className="sidebar-nav__list__item">
              <Link to="/profile" className="sidebar-nav__list__item--link">
                Profile
              </Link>
            </li>

            <li className="sidebar-nav__list__item">
              <Link to="/cart" className="sidebar-nav__list__item--link">
                Cart
              </Link>
            </li>
            <li onClick={logoutHandler} className="sidebar-nav__list__item">
              <Link to="/" className="sidebar-nav__list__item--link">
                Logout
              </Link>
            </li>
          </Fragment>
        ) : (
          <NavLink
            activeClassName="is-active"
            className="mobile-nav__list__item--link"
            to="/login">
            Sign In
          </NavLink>
        )}
      </ul>
    </div>
  )
}

export default Sidebar
