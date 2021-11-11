import React, { useState, Fragment } from "react"
import { ReactComponent as FiPlus } from "../assets/svg/plus.svg"
import { ReactComponent as FiMinus } from "../assets/svg/minus.svg"

const FaqScreen = () => {
  const [clicked, setClicked] = useState(false)

  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null)
    }

    setClicked(index)
  }
  return (
    <div className="faq">
      <h1>Frequently Asked Questions</h1>
      <div className="faq-accordion">
        <div className="faq-accordion__container">
          <Fragment>
            <div className="faq-accordion__wrap" onClick={() => toggle(1)}>
              <h2>Can you deliver at a specific time?</h2>
              <span>
                {clicked === 1 ? (
                  <FiMinus className="faq-accordion__icon" />
                ) : (
                  <FiPlus className="faq-accordion__icon" />
                )}
              </span>
            </div>
            {clicked === 1 ? (
              <div className="faq-accordion__dropdown">
                <p>
                  Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus
                  in massa egestas mollis varius; dignissim elementum.
                </p>
              </div>
            ) : null}
          </Fragment>
          <Fragment>
            <div className="faq-accordion__wrap" onClick={() => toggle(2)}>
              <h2>Will my order be delivered today?</h2>
              <span>
                {clicked === 2 ? (
                  <FiMinus className="faq-accordion__icon" />
                ) : (
                  <FiPlus className="faq-accordion__icon" />
                )}
              </span>
            </div>
            {clicked === 2 ? (
              <div className="faq-accordion__dropdown">
                <p>
                  Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus
                  in massa egestas mollis varius; dignissim elementum.
                </p>
              </div>
            ) : null}
          </Fragment>
          <Fragment>
            <div className="faq-accordion__wrap" onClick={() => toggle(3)}>
              <h2>What if my recipient isn't home when delivery is made?</h2>
              <span>
                {clicked === 3 ? (
                  <FiMinus className="faq-accordion__icon" />
                ) : (
                  <FiPlus className="faq-accordion__icon" />
                )}
              </span>
            </div>
            {clicked === 3 ? (
              <div className="faq-accordion__dropdown">
                <p>
                  Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus
                  in massa egestas mollis varius; dignissim elementum.
                </p>
              </div>
            ) : null}
          </Fragment>
          <Fragment>
            <div className="faq-accordion__wrap" onClick={() => toggle(4)}>
              <h2>Can you deliver to a gated community?</h2>
              <span>
                {clicked === 4 ? (
                  <FiMinus className="faq-accordion__icon" />
                ) : (
                  <FiPlus className="faq-accordion__icon" />
                )}
              </span>
            </div>
            {clicked === 4 ? (
              <div className="faq-accordion__dropdown">
                <p>
                  Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus
                  in massa egestas mollis varius; dignissim elementum.
                </p>
              </div>
            ) : null}
          </Fragment>
          <Fragment>
            <div className="faq-accordion__wrap" onClick={() => toggle(5)}>
              <h2>How will I know once my order has been delivered?</h2>
              <span>
                {clicked === 5 ? (
                  <FiMinus className="faq-accordion__icon" />
                ) : (
                  <FiPlus className="faq-accordion__icon" />
                )}
              </span>
            </div>
            {clicked === 5 ? (
              <div className="faq-accordion__dropdown">
                <p>
                  Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus
                  in massa egestas mollis varius; dignissim elementum. Lorem
                  ipsum odor amet, consectetuer adipiscing elit. Ac purus in
                  massa egestas mollis varius; dignissim elementum. Lorem ipsum
                  odor amet, consectetuer adipiscing elit. Ac purus in massa
                  egestas mollis varius; dignissim elementum.
                </p>
              </div>
            ) : null}
          </Fragment>
        </div>
      </div>
    </div>
  )
}

export default FaqScreen
