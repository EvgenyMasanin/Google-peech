import { Col, Row } from 'antd'
import { ReactNode, FC } from 'react'
import styles from './main.module.css'

interface IMain {
  picture: ReactNode
  sideResults?: ReactNode
}

const Main: FC<IMain> = ({ picture, sideResults, children }) => {
  return (
    <main className={styles.main}>
      <Row style={{ height: 265 }} align="stretch">
        <Col className="h100" offset={8} span={8}>
          {picture}
        </Col>
        <Col className="h100" offset={4} span={4}>
          {sideResults}
        </Col>
        {children}
      </Row>
    </main>
  )
}

export default Main
