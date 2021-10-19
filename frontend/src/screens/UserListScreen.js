import React, {Fragment, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import Alert from '../components/alert'
import Spinner from '../components/spinner'
import {listUsers, deleteUser} from '../redux/actions/userActions'

const UserListScreen = ({history}) => {
  const dispatch = useDispatch()

  const userList = useSelector((state) => state.userList)
  const {loaidng, error, users} = userList

  const userLogin = useSelector((state) => state.userLogin)
  const {userInfo} = userLogin

  const userDelete = useSelector((state) => state.userDelete)
  const {success: successDelete} = userDelete

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listUsers())
    } else {
      history.push('/login')
    }
    dispatch(listUsers())
  }, [dispatch, history, successDelete, userInfo])

  const deleteHandler = (id) => {
    if (window.confirm('Are you  sure')) {
      dispatch(deleteUser(id))
    }
  }
  return (
    <Fragment>
      <h1>Users</h1>
      {loaidng ? (
        <Spinner />
      ) : error ? (
        <Alert>{error}</Alert>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>ADMIN</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user._id}</td>
                <td>{user.name}</td>
                <td>
                  <a href={`mailto: ${user.email}`}>{user.email}</a>
                </td>
                <td>
                  {user.isAdmin ? (
                    <i className='fas fa-check' style={{color: 'green'}}></i>
                  ) : (
                    <i className='fas fa-times' style={{color: 'red'}}></i>
                  )}
                </td>
                <Link to={`/admin/user/${user._id}/edit`}>
                  <button>
                    <i className='fas fa-edit'></i>
                  </button>
                </Link>
                <button onClick={() => deleteHandler(user._id)}>
                  <i className='fas fa-trash'></i>
                </button>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </Fragment>
  )
}

export default UserListScreen
