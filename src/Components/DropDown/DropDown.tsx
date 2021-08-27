import { LogoutOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Dropdown, Menu, Spin, Typography } from 'antd'
import Avatar from 'antd/lib/avatar/avatar'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useTypedSelector } from '../../Redux/store'
import { signOutAction } from '../../Redux/UserData/UserDataActions'

const LogOutButton = () => {
  const dispatch = useDispatch()

  const logOut = () => {
    dispatch(signOutAction())
  }

  return (
    <Button onClick={logOut} type="link" icon={<LogoutOutlined />}>
      Sign out
    </Button>
  )
}

const menu = (
  <Menu>
    <Menu.Divider />
    <Menu.Item key="2">
      <LogOutButton />
    </Menu.Item>
  </Menu>
)

const DropDown = () => {
  const {
    userData: { userName },
  } = useTypedSelector((state) => ({
    userData: state.userData,
  }))

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'flex-end',
        cursor: 'pointer',
        minWidth: 150,
      }}
    >
      <Avatar icon={<UserOutlined />} style={{ backgroundColor: '#1DA57A' }} />
      <Dropdown overlay={menu} placement="bottomCenter">
        <Typography.Text style={{ fontSize: 16, marginLeft: 10 }}>
          {userName !== ' ' ? userName : <Spin size="small" />}
        </Typography.Text>
      </Dropdown>
    </div>
  )
}

export default DropDown
