import { ReactNode, FC } from 'react'
import styles from './main.module.css'

interface IMain {
  children?: ReactNode
}

const Main: FC<IMain> = ({ children }) => {
  return <div className={styles.main}>{children}</div>
}

export default Main
