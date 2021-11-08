import React from 'react'
import { Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import { logout } from '../../redux/actions/userActions'
import SearchBox from '../search-box'

const Navbar = ({ toggleDropDown, hidden }) => {
  const dispatch = useDispatch()
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const logoutHandler = () => {
    dispatch(logout())
  }
  return (
    <div className='navbar'>
      <div className='navbar__search'>
        <Route render={({ history }) => <SearchBox history={history} />} />
      </div>

      <div className='navbar__logo-box'>
        <Link to='/' className='navbar__logo'>
          <h2 className='navbar__logo--h2'>HANAYA GARDEN</h2>
        </Link>
        <span className='navbar__logo-span'>Tokyo</span>
      </div>
      <div className='navbar__user-account'>
        <ul className='navbar__user-account-list'>
          <li className='navbar__user-account-item'>
            {userInfo ? (
              <ul>
                <span className='navbar__user-account-link'>
                  {userInfo.name}
                </span>
                <li className='navigation__item'>
                  <Link to='/profile'>Profile</Link>
                </li>
                <li className='navigation__item' onClick={logoutHandler}>
                  Logout
                </li>
              </ul>
            ) : (
              <Link className='navigation__item' to='/login'>
                <i className='far fa-user'></i>
                <span className='navbar__user-account-link'>SING IN</span>
              </Link>
            )}

            {userInfo && userInfo.isAdmin && (
              <ul>
                <span className='navbar__user-account-link' id='adminmenu'>
                  Admin
                </span>
                <li className='navigation__item'>
                  <Link to='/admin/userlist'>Users</Link>
                </li>
                <li className='navigation__item'>
                  <Link to='/admin/products'>Products</Link>
                </li>
                <li className='navigation__item'>
                  <Link to='/admin/orderList'>Orders</Link>
                </li>
              </ul>
            )}
          </li>

          <li className='navigation__item' onClick={toggleDropDown}>
            <i className='fas fa-shopping-bag'></i>
            <span className='navbar__user-account-link'>CART</span>
          </li>
        </ul>
      </div>
      <div className='navbar__navigation'>
        <ul className='navigation__list'>
          <li className='navigation__item'>
            <NavLink
              to='/category/birthday'
              activeClassName='is-active'
              exact={true}>
              {' '}
              Birthday
            </NavLink>
          </li>
          <li className='navigation__item'>
            <NavLink to='/category/newbaby' activeClassName='is-active'>
              {' '}
              New Baby
            </NavLink>
          </li>
          <li className='navigation__item'>
            <NavLink to='/category/romance' activeClassName='is-active'>
              Romance
            </NavLink>
          </li>
          <li className='navigation__item'>
            <NavLink to='/category/anniversary' activeClassName='is-active'>
              Anniversary
            </NavLink>
          </li>
          <li className='navigation__item'>
            <NavLink to='/category/congradulations' activeClassName='is-active'>
              Congradulations
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
