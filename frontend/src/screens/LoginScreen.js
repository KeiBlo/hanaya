import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import Alert from "../components/alert"
import Spinner from "../components/spinner"
import { login } from "../redux/actions/userActions"

const LogingScreen = ({ location, history }) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { loading, error, userInfo } = userLogin

  const redirect = location.search ? location.search.split("=")[1] : "/"

  useEffect(() => {
    if (userInfo) {
      history.push(redirect)
    }
  }, [history, userInfo, redirect])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(login(email, password))
  }
  return (
    <div className="form__wrapper">
      <h2 className="form__wrapper__title">Log In</h2>
      {error && <Alert>{error}</Alert>}
      {loading && <Spinner />}
      <span>
        <p> Log in with your email and password</p>
      </span>
      <form className="form" onSubmit={submitHandler}>
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}></input>

        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}></input>

        <button className="submit-btn" type="submit">
          Sing In
        </button>
      </form>
      <div>
        <p style={{ "padding-top": "0.5rem" }}>
          New Customer ?{" "}
          <Link
            style={{ color: "blue" }}
            to={redirect ? `/register?redirect=${redirect}` : "/register"}>
            Register
          </Link>
        </p>
      </div>
    </div>
  )
}

export default LogingScreen
