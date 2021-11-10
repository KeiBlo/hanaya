import React from 'react'
import { Link } from 'react-router-dom'
import paymentMethodsImg from '../../assets/img/paymentmethods-min.png'
import guaranteeImg from '../../assets/img/happiness-guarantee-new-min.png'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__links-box'>
        <div className='footer__social-media-box'>
          <img src={guaranteeImg} className='guarantee' alt='100% guarantee' />
          <ul className='footer__social-media-list'>
            <li className='footer__social-media-item'>
              <a href='!#' className='footer__social-media-link'>
                <i className='fab fa-facebook-square'></i>{' '}
              </a>
            </li>
            <li className='footer__social-media-item'>
              <a href='!#' className='footer__social-media-link'>
                <i className='fab fa-instagram-square'></i>
              </a>
            </li>
            <li className='footer__social-media-item'>
              <a href='!#' className='footer__social-media-link'>
                <i className='fab fa-twitter-square'></i>
              </a>
            </li>
          </ul>
        </div>

        <div className='footer__navigation'>
          <h2 className='footer__mavigation-title'>Info</h2>
          <ul className='footer__list'>
            <li className='footer__item'>
              <Link to='/aboutus' className='footer__link'>
                About Us
              </Link>
            </li>
            <li className='footer__item'>
              <Link to='/faq' className='footer__link'>
                Help & FAQ's
              </Link>
            </li>
          </ul>
        </div>
        <div className='footer__navigation'>
          <h2 className='footer__mavigation-title'>Need Help?</h2>
          <ul className='footer__list'>
            <li className='footer__item'>
              <Link to='./contact' className='footer__link'>
                Contact Us
              </Link>
            </li>
            <li className='footer__item'>
              <Link to='/delivery' className='footer__link'>
                Delivery Info
              </Link>
            </li>
          </ul>
        </div>
        <div className='footer__navigation'>
          <h2 className='footer__navigation-title'>Our Flowers</h2>
          <ul className='footer__list'>
            <li className='footer__item'>
              <a href='!#' className='footer__link'>
                100% Happiness Guarantee
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className='footer__info-box'>
        <div className='footer__payments'>
          <img
            src={paymentMethodsImg}
            className='payment-img'
            alt='payment-methods'
          />
        </div>
        <div className='footer__copyrights'>
          <span>
            All rights reserved. Designed by{' '}
            <span className='footer__designer'>
              <a href='https://github.com/KeiBlo'>Kei Blokhin</a>
            </span>
            <p>This website is operated by Hanaya.</p>
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
