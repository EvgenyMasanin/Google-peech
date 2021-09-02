import { Button, Col, Row } from 'antd'
import { SizeType } from 'antd/lib/config-provider/SizeContext'
import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { paths } from '../../Routes/Routes'
import classes from './buttons.module.css'

type ButtonType =
  | 'primary'
  | 'link'
  | 'text'
  | 'ghost'
  | 'default'
  | 'dashed'
  | undefined

const buttonConfig: {
  type: ButtonType
  size: SizeType
} = {
  type: 'primary',
  size: 'large',
}

interface IButtons {
  isLoading: boolean
  gameStarted: boolean
  startGame: () => void
  stopGame: () => void
}

const Buttons: FC<IButtons> = ({
  gameStarted,
  isLoading,
  startGame,
  stopGame,
}) => {
  return (
    <Row className={classes.buttonContainer} gutter={[16, 16]}>
      <Col xs={24} sm={12} md={8} lg={7} xl={6}>
        <Button {...buttonConfig} className={classes.button} onClick={stopGame}>
          End game
        </Button>
      </Col>
      <Col xs={24} sm={12} md={8} lg={10} xl={12}>
        <Button
          {...buttonConfig}
          className={classes.button}
          onClick={startGame}
          disabled={isLoading || gameStarted ? true : false}
        >
          Start game
        </Button>
      </Col>
      <Col xs={24} sm={24} md={8} lg={7} xl={6}>
        <Button {...buttonConfig} className={classes.button}>
          <Link to={paths.STATISTIC}>Statistic</Link>
        </Button>
      </Col>
    </Row>
  )
}

export default Buttons
