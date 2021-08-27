import { Spin } from 'antd'
import React from 'react'

const FullSizeSpin = () => {
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 0.5,
        backgroundColor: '#000',
        transition: '0.3s',
        borderRadius: 5,
      }}
    >
      <Spin size="large" />
    </div>
  )
}

export default FullSizeSpin
