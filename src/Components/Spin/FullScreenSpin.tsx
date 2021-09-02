import { Spin } from 'antd'
import React from 'react'
import classes from './spin.module.css'

const FullSizeSpin = () => {
  return (
    <div className={classes.fullSpin}>
      <Spin size="large" />
    </div>
  )
}

export default FullSizeSpin
