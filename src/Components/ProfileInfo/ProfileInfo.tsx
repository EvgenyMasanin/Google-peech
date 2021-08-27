import { UserOutlined } from '@ant-design/icons'
import Avatar from 'antd/lib/avatar/avatar'
import React from 'react'

export interface IProfileInfo {
  src?: string | null | undefined
  userName: string | undefined
}

const ProfileInfo: React.FC<IProfileInfo> = ({ src, userName }) => {
  return (
    <>
      <Avatar size="small" icon={<UserOutlined />} src={src} />
      {` ${userName ?? 'user name'}`}
    </>
  )
}

export default ProfileInfo
