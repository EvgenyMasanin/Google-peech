import { LogoutOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Dropdown, Menu, Spin, Typography } from 'antd'
import Avatar from 'antd/lib/avatar/avatar'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useTypedSelector } from '../../Redux/store'
import { signOutAction } from '../../Redux/UserData/UserDataActions'
import classes from './menuDropdown.module.css'

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
    userData: { user },
  } = useTypedSelector((state) => ({
    userData: state.userData,
  }))

  return (
    <div className={classes.dropDown}>
      <Avatar icon={<UserOutlined />} className={classes.avatar} />
      <Dropdown overlay={menu} placement="bottomCenter">
        <Typography.Text className={classes.text}>
          {user?.userName !== ' ' ? user?.userName : <Spin size="small" />}
        </Typography.Text>
      </Dropdown>
    </div>
  )
}

export default DropDown
