import React, {Fragment, useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import Alert from '../components/alert'
import Spinner from '../components/spinner'
import {getUserDetails, updateUser} from '../redux/actions/userActions'
import {
  USER_UPDATE_PROFILE_RESET,
  USER_UPDATE_RESET,
} from '../redux/constants/userContstants'

const UserEditScreen = ({match, history}) => {
  const userId = match.params.id

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [isAdmin, setIsAdmin] = useState(false)

  const dispatch = useDispatch()

  const userDetails = useSelector((state) => state.userDetails)
  const {loading, error, user} = userDetails

  const userUpdate = useSelector((state) => state.userUpdate)
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = userUpdate

  useEffect(() => {
    if (successUpdate) {
      dispatch({type: USER_UPDATE_PROFILE_RESET})
      history.push('/admin/userlist')
    } else {
      if (!user.name || user._id !== userId) {
        dispatch(getUserDetails(userId))
      } else {
        setName(user.name)
        setEmail(user.email)
        setIsAdmin(user.isAdmin)
      }
    }
  }, [dispatch, history, userId, user, successUpdate])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(updateUser({_id: userId, name, email, isAdmin}))
  }

  return (
    <Fragment>
      <Link to='/admin/userlist'>Go Back</Link>
      <div className='log-in-and-sign-up'>
        <div className='sign-up-log-in'>
          <h1 className='sign-up-log-in__title'>Edit User</h1>

          {loadingUpdate && <Spinner />}
          {errorUpdate && <Alert>{errorUpdate}</Alert>}
          {loading ? (
            <Spinner />
          ) : error ? (
            <Alert>{error}</Alert>
          ) : (
            <form className='sign-up-log-in__form' onSubmit={submitHandler}>
              <label>Name</label>
              <input
                type='name'
                className='sign-up-log-in__input'
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></input>
              <label>Email</label>
              <input
                type='email'
                className='sign-up-log-in__input'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
              <label>Is Admin</label>
              <input
                type='checkbox'
                value={isAdmin}
                checked={isAdmin}
                onChange={(e) => setIsAdmin(e.target.checked)}
              ></input>
              <div className='buttons'>
                <button className='custom-btn' type='submit'>
                  Update
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </Fragment>
  )
}

export default UserEditScreen
