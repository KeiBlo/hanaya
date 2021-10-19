import React from 'react'

import {withRouter} from 'react-router-dom'
import useForm from '../../hooks/useForm'

const OrderForm = ({history, price, name, getOrderDetails, countInStock}) => {
  // Define your state schema
  const stateSchema = {
    recipentName: {value: '', error: ''},
    recipentAddress: {value: '', error: ''},
    zipCode: {value: '', error: ''},
    personalMessage: {value: '', error: ''},
    phoneNumber: {value: '', error: ''},
    deliveryPrice: {value: '5.99', error: ''},
  }

  // Create your own validationStateSchema
  // stateSchema property should be the same in validationStateSchema
  // in-order a validation to works in your input.
  // func: (value) => /^[a-z ,.'-]+$/i.test(value),
  const stateValidatorSchema = {
    recipentName: {
      required: true,
      validator: {
        func: (value) => /^[A-Za-z ]+$/.test(value),
        error: 'Invalid first and last name format.',
      },
    },
    recipentAddress: {
      required: true,
      validator: {
        func: (value) => /[^0-9_ ]/g.test(value),
        error: 'The recipent  address',
      },
    },
    zipCode: {
      required: true,
      validator: {
        func: (value) => /\b\d{3}[-]\d{4}\b/g.test(value),
        error: 'Valid format  NNN-NNNN, where N is a digit.',
      },
    },
    personalMessage: {
      required: true,
      validator: {
        func: (value) => /^[a-zA-Z0-9?$@#()'!,+\-=_:.&€£*%\s]+$/.test(value),
        error: 'Invalid text format.',
      },
    },
    phoneNumber: {
      required: true,
      validator: {
        func: (value) =>
          /^(?:\d{10}|\d{3}-\d{3}-\d{4}|\d{2}-\d{4}-\d{4}|\d{3}-\d{4}-\d{4})$/.test(
            value
          ),
        error: 'Example: the cell phone number is 080-1234-5678',
      },
    },
    deliveryPrice: {
      validator: {
        func: () => null,
        error: '',
      },
    },
  }

  const onSubmitForm = (state) => {
    getOrderDetails({
      recipentName,
      zipCode,
      personalMessage,
      recipentAddress,
      phoneNumber,
      deliveryPrice,
    })
    history.push('/checkout')
  }

  const {values, errors, dirty, handleOnChange} = useForm(
    stateSchema,
    stateValidatorSchema,
    onSubmitForm
  )

  const {
    recipentName,
    zipCode,
    personalMessage,
    recipentAddress,
    phoneNumber,
    deliveryPrice,
  } = values

  return (
    <div
      className='order-from__wraper
    '
    >
      <form className='order-form' onSubmit={onSubmitForm}>
        <label className='label'>Enter recipient name</label>
        <input
          className='input'
          type='text'
          name='recipentName'
          value={recipentName}
          onChange={handleOnChange}
          required
        />
        {errors.recipentName && dirty.recipentName && (
          <p className='error'>{errors.recipentName}</p>
        )}
        <label className='label'>ZIP Code</label>
        <div className='zip-code-box'>
          <input
            type='text'
            className='input'
            name='zipCode'
            maxLength='8'
            size='8'
            value={zipCode}
            onChange={handleOnChange}
            required
          />
          {errors.zipCode && dirty.zipCode && (
            <p className='error'>{errors.zipCode}</p>
          )}
        </div>
        <select className='enterAddressFormField'>
          <option value=''>--</option>{' '}
          <option value='Hokkaido'>Hokkaido</option>
          <option value='Aomori-ken'>Aomori-ken</option>
          <option value='Iwate-ken'>Iwate-ken</option>
          <option value='Miyagi-ken'>Miyagi-ken</option>
          <option value='Akita-ken'>Akita-ken</option>
          <option value='Yamagata-ken'>Yamagata-ken</option>
          <option value='Fukushima-ken'>Fukushima-ken</option>
          <option value='Ibaraki-ken'>Ibaraki-ken</option>
          <option value='Tochigi-ken'>Tochigi-ken</option>
          <option value='Gunma-ken'>Gunma-ken</option>
          <option value='Saitama-ken'>Saitama-ken</option>
          <option value='Chiba-ken'>Chiba-ken</option>
          <option value='Tokyo-to'>Tokyo-to</option>
          <option value='Kanagawa-ken'>Kanagawa-ken</option>
          <option value='Niigata-ken'>Niigata-ken</option>
          <option value='Toyama-ken'>Toyama-ken</option>
          <option value='Ishikawa-ken'>Ishikawa-ken</option>
          <option value='Fukui-ken'>Fukui-ken</option>
          <option value='Yamanashi-ken'>Yamanashi-ken</option>
          <option value='Nagano-ken'>Nagano-ken</option>
          <option value='Gifu-ken'>Gifu-ken</option>
          <option value='Shizuoka-ken'>Shizuoka-ken</option>
          <option value='Aichi-ken'>Aichi-ken</option>
          <option value='Mie-ken'>Mie-ken</option>
          <option value='Shiga-ken'>Shiga-ken</option>
          <option value='Kyoto-fu'>Kyoto-fu</option>
          <option value='Osaka-fu'>Osaka-fu</option>
          <option value='Hyogo-ken'>Hyogo-ken</option>
          <option value='Nara-ken'>Nara-ken</option>
          <option value='Wakayama-ken'>Wakayama-ken</option>
          <option value='Tottori-ken'>Tottori-ken</option>
          <option value='Shimane-ken'>Shimane-ken</option>
          <option value='Okayama-ken'>Okayama-ken</option>
          <option value='Hiroshima-ken'>Hiroshima-ken</option>
          <option value='Yamaguchi-ken'>Yamaguchi-ken</option>
          <option value='Tokushima-ken'>Tokushima-ken</option>
          <option value='Kagawa-ken'>Kagawa-ken</option>
          <option value='Ehime-ken'>Ehime-ken</option>
          <option value='Kochi-ken'>Kochi-ken</option>
          <option value='Fukuoka-ken'>Fukuoka-ken</option>
          <option value='Saga-ken'>Saga-ken</option>
          <option value='Nagasaki-ken'>Nagasaki-ken</option>
          <option value='Kumamoto-ken'>Kumamoto-ken</option>
          <option value='Oita-ken'>Oita-ken</option>
          <option value='Miyazaki-ken'>Miyazaki-ken</option>
          <option value='Kagoshima-ken'>Kagoshima-ken</option>
          <option value='Okinawa-ken'>Okinawa-ken</option>
        </select>
        <label className='label'>add a personale message</label>
        <input
          type='text'
          name='personalMessage'
          className='input'
          maxLength='100'
          value={personalMessage}
          onChange={handleOnChange}
        />
        {errors.personalMessage && dirty.personalMessage && (
          <p className='error'>{errors.personalMessage}</p>
        )}
        <label className='label'>enter recipient address</label>
        <input
          type='text'
          name='recipentAddress'
          className='input'
          value={recipentAddress}
          onChange={handleOnChange}
          required
        />
        {errors.recipentAddress && dirty.recipentAdress && (
          <p className='error'>{errors.recipentAdress}</p>
        )}

        <label className='label'>mobile phone number</label>
        <input
          type='tel'
          className='input'
          name='phoneNumber'
          value={phoneNumber}
          maxLength='13'
          onChange={handleOnChange}
          required
        />
        {errors.phoneNumber && dirty.phoneNumber && (
          <p className='error'>{errors.phoneNumber}</p>
        )}

        <div className='delivery-method__box' onChange={handleOnChange}>
          <label className='label'>delivery method</label>
          <span className='radio--label'>
            <input
              type='radio'
              value='5.99'
              name='deliveryPrice'
              checked={deliveryPrice === '5.99'}
            />
            <span> </span>
            Standart Delivery +$5.99
          </span>
          <span className='radio--label'>
            <input
              type='radio'
              value='7.99'
              name='deliveryPrice'
              checked={deliveryPrice === '7.99'}
            />
            <span> </span>
            Express Delivery +$7.99
          </span>
        </div>

        <div className='total-price'>
          Price incl. delivery
          <span className='price'>
            ${(parseFloat(deliveryPrice) + parseFloat(price)).toFixed(2)}
          </span>
        </div>
      </form>
    </div>
  )
}

export default withRouter(OrderForm)

// <OrderForm
//               getOrderDetails={product.getOrderDetails}
//               price={product.price}
//               title={product.name}
//               countInStock={product.countInStock}
//             />
