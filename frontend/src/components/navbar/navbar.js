import React, { useState, Fragment } from "react"
import { Route } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { Link, NavLink } from "react-router-dom"
import { logout } from "../../redux/actions/userActions"
import SearchBox from "../search-box"
import Dropdown from "../dropdown"
import Sidebar from "../sidebar"

import { ReactComponent as BurgerMenu } from "../../assets/svg/menu.svg"
import { ReactComponent as CartIcon } from "../../assets/svg/cart.svg"
import { ReactComponent as UserIcon } from "../../assets/svg/user.svg"
import { ReactComponent as AdminIcon } from "../../assets/svg/game-controller.svg"

const Navbar = ({ hidden }) => {
  const [sidebar, setSidebar] = useState(false)
  const [adminMenu, setAdminMenu] = useState(false)

  const dispatch = useDispatch()
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const logoutHandler = () => {
    dispatch(logout())
  }

  const toggleAdminMenu = () => {
    setAdminMenu(!adminMenu)
  }

  const toggleSidebar = () => {
    setSidebar(!sidebar)
  }
  return (
    <Fragment>
      <Sidebar toggleSidebar={toggleSidebar} sidebar={sidebar} />

      <div className="navbar">
        <div className="navbar__search">
          <Route render={({ history }) => <SearchBox history={history} />} />
        </div>

        <div className="navbar__logo-box">
          <NavLink to="/" className="navbar__logo">
            <h2 className="navbar__logo--h2">HANAYA GARDEN</h2>
          </NavLink>
          <span className="navbar__logo-span">Tokyo</span>
        </div>
        <div className="navbar__user-account">
          <ul className="navbar__user-account-list">
            <li className="navbar__user-account-item">
              {userInfo ? (
                <ul className="navbar__loged-in">
                  {userInfo && userInfo.isAdmin && (
                    <Fragment>
                      <li className="navigation__item">
                        <div className="admin-menu" o>
                          <AdminIcon className="navbar__icon" />
                          <span onClick={toggleAdminMenu}> Admin</span>
                        </div>
                        {adminMenu ? <Dropdown /> : null}
                      </li>
                    </Fragment>
                  )}

                  <li className="navigation__item">
                    <NavLink activeClassName="is-active" to="/profile">
                      <UserIcon className="navbar__icon" /> Profile
                    </NavLink>
                  </li>

                  <li className="navigation__item">
                    <NavLink activeClassName="is-active" to="/cart">
                      <CartIcon className="navbar__icon" /> Cart
                    </NavLink>
                  </li>
                  <li className="navigation__item" onClick={logoutHandler}>
                    <NavLink activeClassName="is-active" to="/">
                      Logout
                    </NavLink>
                  </li>
                </ul>
              ) : (
                <NavLink
                  activeClassName="is-active"
                  className="navigation__item"
                  to="/login">
                  <UserIcon className="navbar__icon" /> Sign In
                </NavLink>
              )}
            </li>
          </ul>
        </div>
        <div className="navbar__navigation">
          <ul className="navigation__list">
            <li className="navigation__item">
              <NavLink to="/category/birthday" activeClassName="is-active">
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
              <NavLink
                to="/category/congradulations"
                activeClassName="is-active">
                Congradulations
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="burger-menu">
          {" "}
          <BurgerMenu
            className="burger-menu__icon"
            onClick={(e) => toggleSidebar(e)}
          />
        </div>
      </div>
    </Fragment>
  )
}

export default Navbar
