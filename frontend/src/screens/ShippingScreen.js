import React, { useState } from "react"
import CheckOutSteps from "../components/check-out-steps"
import { useDispatch, useSelector } from "react-redux"
import { saveShippingAddress } from "../redux/actions/cartActions"

const ShippingScreen = ({ history }) => {
  const cart = useSelector((state) => state.cart)
  const { shippingAddress } = cart

  const [address, setAddress] = useState(shippingAddress.address)
  const [recipentName, setRecipentName] = useState(shippingAddress.recipentName)
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode)
  const [personalMessage, setPersonalMessage] = useState("")
  const [phoneNumber, setPhoneNumber] = useState(shippingAddress.phoneNumber)

  const dispatch = useDispatch()
  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(
      saveShippingAddress({ address, recipentName, postalCode, phoneNumber }),
      history.push("/payment")
    )
  }
  return (
    <div className="form__wrapper">
      <CheckOutSteps step1 step2 />
      <h1 className="form__wrapper__title">Shipping</h1>

      <form className="form" onSubmit={submitHandler}>
        <label>
          Enter recipient name<span style={{ color: "red" }}>*</span>
        </label>
        <input
          type="text"
          name="recipentName"
          value={recipentName}
          onChange={(e) => setRecipentName(e.target.value)}
          required
        />

        <label>
          Postal Code<span style={{ color: "red" }}>*</span>
        </label>
        <div className="zip-code-box">
          <input
            type="text"
            name="postalCode"
            maxLength="8"
            size="8"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
            required
          />
        </div>
        <label>
          Choose region<span style={{ color: "red" }}>*</span>
        </label>
        <select className="chooseOptionFromField">
          <option value="">--</option>{" "}
          <option value="Hokkaido">Hokkaido</option>
          <option value="Aomori-ken">Aomori-ken</option>
          <option value="Iwate-ken">Iwate-ken</option>
          <option value="Miyagi-ken">Miyagi-ken</option>
          <option value="Akita-ken">Akita-ken</option>
          <option value="Yamagata-ken">Yamagata-ken</option>
          <option value="Fukushima-ken">Fukushima-ken</option>
          <option value="Ibaraki-ken">Ibaraki-ken</option>
          <option value="Tochigi-ken">Tochigi-ken</option>
          <option value="Gunma-ken">Gunma-ken</option>
          <option value="Saitama-ken">Saitama-ken</option>
          <option value="Chiba-ken">Chiba-ken</option>
          <option value="Tokyo-to">Tokyo-to</option>
          <option value="Kanagawa-ken">Kanagawa-ken</option>
          <option value="Niigata-ken">Niigata-ken</option>
          <option value="Toyama-ken">Toyama-ken</option>
          <option value="Ishikawa-ken">Ishikawa-ken</option>
          <option value="Fukui-ken">Fukui-ken</option>
          <option value="Yamanashi-ken">Yamanashi-ken</option>
          <option value="Nagano-ken">Nagano-ken</option>
          <option value="Gifu-ken">Gifu-ken</option>
          <option value="Shizuoka-ken">Shizuoka-ken</option>
          <option value="Aichi-ken">Aichi-ken</option>
          <option value="Mie-ken">Mie-ken</option>
          <option value="Shiga-ken">Shiga-ken</option>
          <option value="Kyoto-fu">Kyoto-fu</option>
          <option value="Osaka-fu">Osaka-fu</option>
          <option value="Hyogo-ken">Hyogo-ken</option>
          <option value="Nara-ken">Nara-ken</option>
          <option value="Wakayama-ken">Wakayama-ken</option>
          <option value="Tottori-ken">Tottori-ken</option>
          <option value="Shimane-ken">Shimane-ken</option>
          <option value="Okayama-ken">Okayama-ken</option>
          <option value="Hiroshima-ken">Hiroshima-ken</option>
          <option value="Yamaguchi-ken">Yamaguchi-ken</option>
          <option value="Tokushima-ken">Tokushima-ken</option>
          <option value="Kagawa-ken">Kagawa-ken</option>
          <option value="Ehime-ken">Ehime-ken</option>
          <option value="Kochi-ken">Kochi-ken</option>
          <option value="Fukuoka-ken">Fukuoka-ken</option>
          <option value="Saga-ken">Saga-ken</option>
          <option value="Nagasaki-ken">Nagasaki-ken</option>
          <option value="Kumamoto-ken">Kumamoto-ken</option>
          <option value="Oita-ken">Oita-ken</option>
          <option value="Miyazaki-ken">Miyazaki-ken</option>
          <option value="Kagoshima-ken">Kagoshima-ken</option>
          <option value="Okinawa-ken">Okinawa-ken</option>
        </select>
        <label>Add personal message</label>
        <input
          type="text"
          name="personalMessage"
          maxLength="100"
          value={personalMessage}
          onChange={(e) => setPersonalMessage(e.target.value)}
        />

        <label className="label">
          Enter recipient address<span style={{ color: "red" }}>*</span>
        </label>
        <input
          type="text"
          name="recipentAddress"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />

        <label>
          Mobile phone number<span style={{ color: "red" }}>*</span>
        </label>
        <input
          type="tel"
          name="phoneNumber"
          value={phoneNumber}
          maxLength="13"
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />

        <button type="submit" className="submit-btn">
          Continue
        </button>
      </form>
    </div>
  )
}

export default ShippingScreen
