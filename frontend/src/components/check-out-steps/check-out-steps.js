import React from "react"
import { Link } from "react-router-dom"

const CheckOutSteps = ({ step1, step2, step3, step4 }) => {
  return (
    <ul className="checkoutSteps">
      <li>
        {step1 ? (
          <Link to="/login">
            <span style={{ color: "black" }}>Sign In</span>
          </Link>
        ) : (
          <span>Sing In</span>
        )}
      </li>
      <li>
        {step2 ? (
          <Link to="/shipping">
            <span style={{ color: "black" }}>Shipping</span>
          </Link>
        ) : (
          <span>Shipping</span>
        )}
      </li>{" "}
      <li>
        {step3 ? (
          <Link to="/payment">
            <span style={{ color: "black" }}>Payment</span>
          </Link>
        ) : (
          <span>Payment</span>
        )}
      </li>{" "}
      <li>
        {step4 ? (
          <Link to="/placeorder">
            <span style={{ color: "black" }}>Place Order</span>
          </Link>
        ) : (
          <span> Place Order</span>
        )}
      </li>
    </ul>
  )
}

export default CheckOutSteps
