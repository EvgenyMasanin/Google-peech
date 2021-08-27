import React, { FC, useEffect, useState } from 'react'
import FullSizeSpin from '../Spin/FullScreenSpin'

interface IPicture {
  src: string
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
    <div
      style={{
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
      }}
    >
      <>
        {isLoading && <FullSizeSpin />}
        <img
          onLoad={handleLoad}
          src={src ? src : 'https://speakit.netlify.app/img/blank.jpg'}
          alt="visualization"
          width={400}
          height={265}
          style={{
            borderRadius: 5,
            backgroundColor: '#a2d6c6',
            display: 'inline-block',
          }}
        />
      </>
    </div>
  )
}

export default Picture
