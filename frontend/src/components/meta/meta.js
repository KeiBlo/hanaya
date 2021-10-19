import React from 'react'
import {Helmet} from 'react-helmet'

const Meta = ({title, description, keywords}) => {
  return (
    <div>
      {' '}
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />
    </div>
  )
}

Meta.defaultProps = {
  title: 'Welcome to Hanaya',
  description: 'We sell best flowers in Tokyo',
  keywords: 'flowers,boquettes ,birthday flowers',
}

export default Meta
