import React from 'react'

const DeliveryMethodsScreen = () => {
  return (
    <div className='delivery-methods'>
      <h1>Delivery</h1>

      <div className='delivery-methods__wrapper'>
        <div className='delivery-info'>
          <h2>How much are delivery cost?</h2>
          <p>
            Hanaya charges flat shipping rates per ship-to address. The flat
            rates correspond to delivery method. Rates (incl. GST) are as
            follows:
          </p>
          <table id='faq-tables' style={{ margin: 'auto', width: '70%' }}>
            <tbody>
              <tr>
                <td
                  style={{
                    border: '1px solid black',
                    textAlign: 'left',
                    verticalAlign: 'middle',
                    padding: '6px',
                  }}>
                  <strong>Delivery</strong>
                </td>
                <td
                  style={{
                    border: '1px solid black',
                    textAlign: 'left',
                    verticalAlign: 'middle',
                    padding: '6px',
                  }}>
                  <p className='para-normal'>¥11.00 </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='delivery-info'>
          <h2>How long delivery takes?</h2>
          <p>
            Hanaya charges flat shipping rates per ship-to address. The flat
            rates correspond to delivery method. Rates (incl. GST) are as
            follows:
          </p>
          <table id='faq-tables' style={{ margin: 'auto', width: '70%' }}>
            <tbody>
              <tr>
                <td
                  style={{
                    border: '1px solid black',
                    textAlign: 'left',
                    verticalAlign: 'middle',
                    padding: '6px',
                  }}>
                  <strong>Delivery</strong>
                </td>
                <td
                  style={{
                    border: '1px solid black',
                    textAlign: 'left',
                    verticalAlign: 'middle',
                    padding: '6px',
                  }}>
                  <p className='para-normal'> 15 - 20 business days</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='delivery-info'>
          <h2>Please note:</h2>
          <ol type='1'>
            <li>
              Our warehouse is closed on public holidays. For orders placed on,
              or the day before one of these dates, delivery time will be
              extended by 1 - 2 working days. During sale periods, orders may
              take longer to process.
            </li>
            <li>
              Due to logistical difficulties in making deliveries to certain
              remote areas, we reserve our right to cancel your order and/or
              make such order subject to additional terms and conditions
              (including without limitation to requiring such orders to be
              conditional upon a minimum value of products being ordered in a
              single transaction). Our Customer Service team will notify you of
              cancellation and/or such conditions as soon as reasonably
              practicable after you place your order.{' '}
            </li>
            <li>
              Please note, that there can be a delay in tracking updates of up
              to 10 business days from time of dispatch.
            </li>
          </ol>
        </div>
      </div>
    </div>
  )
}

export default DeliveryMethodsScreen
