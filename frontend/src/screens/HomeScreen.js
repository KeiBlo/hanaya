import React, {Fragment, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import Spinner from '../components/spinner'
import Product from '../components/product'
import Meta from '../components/meta'
import Alert from '../components/alert'
import peonyImg from '../assets/img/peony.jpg'
import flowerCollectionImg from '../assets/img/japanese-collection.jpg'
import weddingCollectionImg from '../assets/img/wedding-collection.jpg'
import ramperCollectionImg from '../assets/img/hamper.jpg'
import plantCollectionImg from '../assets/img/new-plants-lower-block.jpg'
import {listTopProducts} from '../redux/actions/productActions'

const HomeScreen = () => {
  const dispatch = useDispatch()

  const topProductsList = useSelector((state) => state.topProductsList)
  const {loading, error, topProducts} = topProductsList

  useEffect(() => {
    dispatch(listTopProducts())
  }, [dispatch])

  return (
    <Fragment>
      <Meta />
      <div className='home-page'>
        <header className='home-page__header'>
          <h1 className='heading-primary'>
            <span className='heading-primary--sub'>
              flowers for special moments
            </span>
            <span className='heading-primary--main'>This summer Edit</span>
          </h1>
          <div className='btn-box'>
            <Link className='btn-box__btn btn-1' to='/birthday'>
              the summer edit
            </Link>
            <Link className='btn-box__btn btn-1' to='/romance'>
              romance flowers
            </Link>
            <Link className='btn-box__btn btn-1' to='/birthday'>
              birthday flowers
            </Link>
          </div>
        </header>
        <div className='collection-sm'>
          <div className='card'>
            <img src={peonyImg} alt='' className='card__img' />
            <h2 className='card__title'>
              The peony <br />
              edit
            </h2>
            <p className='card__content'>
              Roses flower needs that long to form and mature.
            </p>
            <Link to='/birthday' className='card__btn'>
              Explore
            </Link>
          </div>
          <div className='card'>
            <img src={flowerCollectionImg} alt='' className='card__img' />
            <h2 className='card__title'>
              Japanese flowers
              <br /> collection{' '}
            </h2>
            <p className='card__content'>
              Send an elegant plant to brighten up their home
            </p>
            <Link to='/romance' className='card__btn'>
              Explore
            </Link>
          </div>
          <div className='card'>
            <img src={weddingCollectionImg} alt='' className='card__img' />
            <h2 className='card__title'>
              Wedding <br /> collection
            </h2>
            <p className='card__content'>
              Bluebelle season is in full bloom - but not for long
            </p>
            <Link to='/birthday' className='card__btn'>
              Explore
            </Link>
          </div>
        </div>
        <div className='collection-lg'>
          <div className='card'>
            <img src={ramperCollectionImg} alt='' className='card__img' />
            <h2 className='card__title'>
              the ramper
              <br />
              collection
            </h2>
            <p className='card__content'>
              Delight them with a luxury hamper full of delicious
            </p>
            <Link to='/romance' className='card__btn'>
              Explore
            </Link>
          </div>
          <div className='card'>
            <img src={plantCollectionImg} alt='' className='card__img' />
            <h2 className='card__title'>
              The plant <br />
              collection
            </h2>
            <p className='card__content'>
              Send an elegant plant to brighten up their home
            </p>
            <Link to='/birthday' className='card__btn'>
              Explore
            </Link>
          </div>
        </div>
        <div className='bouquetes'>
          <h2 className='line'>OUR TOP BOUQUETS</h2>
          <p className='bouquetes__info'>
            All of the bouquets below are our best sellers
          </p>
          <div className='bouquetes__box'>
            {loading && topProducts.length === 0 ? (
              <Spinner />
            ) : error ? (
              <Alert>{error}</Alert>
            ) : (
              topProducts.map((product) => {
                return <Product key={product._id} product={product} />
              })
            )}
          </div>
        </div>

        <div className='delivery-info'>
          <h2 className='line'>FLOWER DELIVERY JAPAN</h2>
          <p className='delivery-info__content'>
            As a boutique Tokyo florist, Hanaya specialises in having
            professionally arranged flowers delivered, taking extra special care
            when sending beautiful, fresh flowers online.
          </p>
          <p className='delivery-info__content'>
            Send hand delivered fresh flower bouquets, perfect for any occasion
            and available anywhere in the Japan. Our next day flower delivery
            service is available throughout the Japan including all major cities
            such as Tokyo, Kobe, Nagoya, Osaka and more. Need flowers delivered
            today? Use our same day flower delivery service, available in
            selected Tokyo postcodes and have flowers delivered the very same
            day.
          </p>
          <a href='!#' className='card__btn'>
            Read More
          </a>
        </div>
      </div>
    </Fragment>
  )
}

export default HomeScreen
