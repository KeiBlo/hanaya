import React from 'react'
import {Route} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../../redux/actions/userActions'
import SearchBox from '../search-box'

const Navbar = ({toggleDropDown, hidden}) => {
  const dispatch = useDispatch()
  const userLogin = useSelector((state) => state.userLogin)
  const {userInfo} = userLogin

  const logoutHandler = () => {
    dispatch(logout())
  }
  return (
    <div className='navbar'>
      <div className='navbar__search'>
        <Route render={({history}) => <SearchBox history={history} />} />
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
                <li>
                  <Link to='/profile'>Profile</Link>
                </li>
                <li onClick={logoutHandler}>Logout</li>
              </ul>
            ) : (
              <Link to='/login'>
                <i className='far fa-user'></i>
                <span className='navbar__user-account-link'>SING IN</span>
              </Link>
            )}

            {userInfo && userInfo.isAdmin && (
              <ul>
                <span className='navbar__user-account-link' id='adminmenu'>
                  Admin
                </span>
                <li>
                  <Link to='/admin/userlist'>Users</Link>
                </li>
                <li>
                  <Link to='/admin/products'>Products</Link>
                </li>
                <li>
                  <Link to='/admin/orderList'>Orders</Link>
                </li>
              </ul>
            )}
          </li>

          <li className='navbar__user-account-item' onClick={toggleDropDown}>
            <i className='fas fa-shopping-bag'></i>
            <span className='navbar__user-account-link'>CART</span>
          </li>
        </ul>
      </div>
      <div className='navbar__navigation'>
        <ul className='navigation__list'>
          <li className='navigation__item'>
            <Link to='/birthday' className='navigation__link'>
              Birthday
            </Link>
          </li>
          <li className='navigation__item'>
            <Link to='/romance' className='navigation__link'>
              New Baby
            </Link>
          </li>
          <li className='navigation__item'>
            <Link to='/romance' className='navigation__link'>
              Romance
            </Link>
          </li>
          <li className='navigation__item'>
            <Link to='/birthday' className='navigation__link'>
              Anniversary
            </Link>
          </li>
          <li className='navigation__item'>
            <Link to='/romance' className='navigation__link'>
              Congradulations
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
