import { Typography } from 'antd'
import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { paths } from '../../Routes/Routes'

interface IUnderFormLink {
  text: string
  linkText: string
  path: paths
}

const UnderFormLink: FC<IUnderFormLink> = ({ text, linkText, path }) => {
  return (
    <span style={{ marginTop: 20, fontSize: 16 }}>
      <Typography.Text>{`${text} `}</Typography.Text>
      <Link to={path}>{linkText}</Link>
    </span>
  )
}

export default UnderFormLink
