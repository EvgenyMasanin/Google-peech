import React, { FC, useEffect, useState } from 'react'
import FullSizeSpin from '../Spin/FullScreenSpin'

interface IPicture {
  src: string | null
}

const Picture: FC<IPicture> = ({ src }) => {
  const [isLoading, setIsLoading] = useState(true)

  const handleLoad = () => {
    setIsLoading(false)
  }

  useEffect(() => {
    setIsLoading(true)
  }, [src])

  return (
    <>
      {isLoading && <FullSizeSpin />}
      <img
        onLoad={handleLoad}
        src={src ? src : 'https://speakit.netlify.app/img/blank.jpg'}
        alt="visualization"
        className="w100 h100"
        style={{
          borderRadius: 5,
          backgroundColor: '#a2d6c6',
        }}
      />
    </>
  )
}

export default Picture
