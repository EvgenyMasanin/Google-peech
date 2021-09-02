import { Spin } from 'antd'
import React, { FC } from 'react'
import classes from './spin.module.css'

interface ILocalSpin {
  size?: 'small' | 'default' | 'large'
  tip?: string
}

const LocalSpin: FC<ILocalSpin> = ({ size = 'default', tip }) => {
  return (
    <div className={classes.localSpin}>
      <Spin size={size} tip={tip} />
    </div>
  )
}

export default LocalSpin
