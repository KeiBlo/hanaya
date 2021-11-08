import React from 'react'
import teamOneImg from '../assets/img/team-1.jpg'
import teamTwoImg from '../assets/img/team-2.jpg'
import teamThreeImg from '../assets/img/team-3.jpg'

const AboutUsScreen = () => {
  return (
    <div className='about-us'>
      <h2 className='about-us__title'>
        <span className='underline'>We Love Flowers</span>
      </h2>

      <p className='about-us__description'>
        And we want you to love them too, so we do our best to give you the best
        possible flower delivery service. From farm-fresh flowers, beautiful
        floral design and prompt delivery we are the best option for flower
        arrangements. Best service at reasonable price, always fresh flowers.
      </p>

      <div className='services__wrapper'>
        <div className='service'>
          <h2 className='service__title'>Flower Importer</h2>
          <p className='service__text'>
            We are a direct from farm flower importer. Our imported shipments
            come in twice a week. Our flowers from local growers come in daily
            as needed. Florists may purchase from us directly
          </p>
        </div>
        <div className='service'>
          <h2 className='service__title'>Flower Design</h2>
          <p className='service__text'>
            Our own professional florist arranges and overlooks every order. We
            offer a 100% satisfaction guarantee on all flower design and flower
            quality.
          </p>
        </div>
        <div className='service'>
          <h2 className='service__title'>Flower Delivery</h2>
          <p className='service__text'>
            We promise to hand deliver every arrangement ourselves. If not we
            will hire your own professional courier to deliver your order for
            you.
          </p>
        </div>
      </div>

      <div className='section-team'>
        {' '}
        <h2 className='section-team__title'>Our Team</h2>
        <div className='team'>
          <div className='team-container'>
            <div className='box'>
              <div className='imgBx'>
                <img src={teamOneImg} />
              </div>

              <div className='content'>
                <div>
                  <h2>Micheal Fox</h2>
                  <p>CEO</p>
                </div>
              </div>
            </div>
            <div className='box'>
              <div className='imgBx'>
                <img src={teamTwoImg} />
              </div>

              <div className='content'>
                <div>
                  <h2>Jane Dudly</h2>
                  <p>Florist manager</p>
                </div>
              </div>
            </div>
            <div className='box'>
              <div className='imgBx'>
                <img src={teamThreeImg} />
              </div>

              <div className='content'>
                <div>
                  <h2>Angela Brown</h2>
                  <p>Designer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className='section-team__description'>
          And we want you to love them too, so we do our best to give you the
          best possible flower delivery service. From farm-fresh flowers,
          beautiful floral design and prompt delivery we are the best option for
          flower arrangements. Best service at reasonable price, always fresh
          flowers.
        </p>
      </div>
    </div>
  )
}

export default AboutUsScreen
