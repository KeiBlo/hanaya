import React, {useState} from 'react'

const ImgGallery = ({id, imageLink, additionalImg, name}) => {
  const [currentImg, setCurrentImg] = useState(imageLink)
  const [currentName, setCurrentName] = useState(name)

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
        {additionalImg !== undefined
          ? additionalImg.map((srcLink) => {
              return (
                <div className='img-gallery__secondary--wrapper'>
                  <img
                    key={id}
                    src={srcLink}
                    alt={currentName}
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
