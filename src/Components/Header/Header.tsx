import { ReactNode, FC } from 'react'
import styles from './header.module.css'

interface IHeader {
  title: string
  content: ReactNode
  buttons: Array<ReactNode>
}

const Header: FC<IHeader> = ({ title, content, buttons }) => {
  return (
    <header className={styles.header}>
      <div className={styles.title}>{title}</div>
      <div className={styles.content}>{content}</div>
      <div className={styles.buttons}>
        <div>{buttons}</div>
      </div>
    </header>
  )
}

export default Header
