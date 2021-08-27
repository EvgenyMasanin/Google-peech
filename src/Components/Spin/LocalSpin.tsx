import { Spin } from 'antd'
import React, { FC } from 'react'

interface ILocalSpin {
  size?: 'small' | 'default' | 'large'
  tip?: string
}

const LocalSpin: FC<ILocalSpin> = ({ size = 'default', tip }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
      }}
    >
      <Spin size={size} tip={tip} />
    </div>
  )
}

export default LocalSpin
