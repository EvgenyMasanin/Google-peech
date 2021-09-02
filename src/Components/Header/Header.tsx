import { ReactNode, FC } from 'react'
import { Link } from 'react-router-dom'
import { paths } from '../../Routes/Routes'
import styles from './header.module.css'

interface IHeader {
  title: string
  content?: ReactNode
  buttons: Array<ReactNode>
}

const Header: FC<IHeader> = ({ title, content, buttons }) => {
  return (
    <header className={styles.header}>
      <Link to={paths.MAIN} className={styles.title}>
        {title}
      </Link>
      <div className={styles.content}>{content}</div>
      <div className={styles.buttons}>
        <div>{buttons}</div>
      </div>
    </header>
  )
}

export default Header
