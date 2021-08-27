import React, { FC } from 'react'
import ProfileInfo, { IProfileInfo } from '../ProfileInfo/ProfileInfo'
import classes from './userName.module.css'

const UserName: FC<IProfileInfo> = ({ userName, src }) => {
  return (
    <div className={classes.userName}>
      <ProfileInfo userName={userName} src={src} />
    </div>
  )
}

export default UserName
