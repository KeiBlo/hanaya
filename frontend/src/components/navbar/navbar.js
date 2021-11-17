import React, { useState } from "react"
import { Route } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { Link, NavLink } from "react-router-dom"
import { logout } from "../../redux/actions/userActions"
import SearchBox from "../search-box"
import Dropdown from "../dropdown"

import { ReactComponent as CartIcon } from "../../assets/svg/cart.svg"
import { ReactComponent as UserIcon } from "../../assets/svg/user.svg"
import { ReactComponent as AdminIcon } from "../../assets/svg/game-controller.svg"

const Navbar = ({ hidden }) => {
  const dispatch = useDispatch()
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const [showDropDown, setShowDropDown] = useState(false)

  const logoutHandler = () => {
    dispatch(logout())
  }

  const toggleDropDown = () => {
    setShowDropDown(!showDropDown)
    console.log("Toggle is working")
    console.log(showDropDown)
  }
  return (
    <div className="navbar">
      <div className="navbar__search">
        <Route render={({ history }) => <SearchBox history={history} />} />
      </div>

      <div className="navbar__logo-box">
        <Link to="/" className="navbar__logo">
          <h2 className="navbar__logo--h2">HANAYA GARDEN</h2>
        </Link>
        <span className="navbar__logo-span">Tokyo</span>
      </div>
      <div className="navbar__user-account">
        <ul className="navbar__user-account-list">
          <li className="navbar__user-account-item">
            {userInfo ? (
              <ul className="navbar__loged-in">
                {userInfo && userInfo.isAdmin && (
                  <li className="navigation__item" onClick={toggleDropDown}>
                    <AdminIcon className="navbar__icon" /> Admin
                  </li>
                )}
                <li>{showDropDown ? <Dropdown /> : null}</li>
                <li className="navigation__item">
                  <Link to="/profile">
                    <UserIcon className="navbar__icon" /> Profile
                  </Link>
                </li>

                <li className="navigation__item">
                  <Link to="/cart">
                    <CartIcon className="navbar__icon" /> Cart
                  </Link>
                </li>
                <li className="navigation__item" onClick={logoutHandler}>
                  <Link to="/">Logout</Link>
                </li>
              </ul>
            ) : (
              <Link className="navigation__item" to="/login">
                <UserIcon className="navbar__icon" /> SING IN
              </Link>
            )}
          </li>
        </ul>
      </div>
      <div className="navbar__navigation">
        <ul className="navigation__list">
          <li className="navigation__item">
            <NavLink
              to="/category/birthday"
              activeClassName="is-active"
              exact={true}>
              {" "}
              Birthday
            </NavLink>
          </li>
          <li className="navigation__item">
            <NavLink to="/category/newbaby" activeClassName="is-active">
              {" "}
              New Baby
            </NavLink>
          </li>
          <li className="navigation__item">
            <NavLink to="/category/romance" activeClassName="is-active">
              Romance
            </NavLink>
          </li>
          <li className="navigation__item">
            <NavLink to="/category/anniversary" activeClassName="is-active">
              Anniversary
            </NavLink>
          </li>
          <li className="navigation__item">
            <NavLink to="/category/congradulations" activeClassName="is-active">
              Congradulations
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
