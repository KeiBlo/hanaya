import React, { useState } from 'react'

const ImgGallery = ({ product }) => {
  const [currentImg, setCurrentImg] = useState(product.image)
  const [currentName, setCurrentName] = useState(product.name)

  const handleOnClick = (e) => {
    setCurrentImg(e.target.src)
    setCurrentName(e.target.alt)
  }

  return (
    <div className='img-gallery'>
      <div className='img-gallery__main'>
        <img
          src={currentImg}
          alt={currentName}
          className='img-gallery__main--img-lg'
        />
      </div>

      <div className='img-gallery__secondary'>
        {product.additionalImg !== undefined
          ? product.additionalImg.map((srcLink) => {
              return (
                <div
                  key={product.id}
                  className='img-gallery__secondary--wrapper'>
                  <img
                    src={srcLink}
                    alt={product.name}
                    className='img-gallery__secondary--img-sm'
                    onClick={handleOnClick}
                  />
                </div>
              )
            })
          : null}
      </div>
    </div>
  )
}

export default ImgGallery
