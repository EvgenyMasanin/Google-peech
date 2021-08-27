import { Button, Col, Row } from 'antd'
import React from 'react'

const Buttons = () => {
  return (
    <Row justify="center" gutter={16} style={{ padding: '1rem' }}>
      <Col style={{ flex: '1 1 20%', maxWidth: '20%' }}>
        <Button
          type="primary"
          size="large"
          style={{
            width: '100%',
            height: 70,
            borderRadius: 5,
          }}
        >
          Restart
        </Button>
      </Col>
      <Col style={{ flex: '1 1 60%', maxWidth: '60%' }}>
        <Button
          type="primary"
          size="large"
          style={{
            width: '100%',
            height: 70,
            borderRadius: 5,
          }}
        >
          Speak please
        </Button>
      </Col>
      <Col style={{ flex: '1 1 20%', maxWidth: '20%' }}>
        <Button
          type="primary"
          size="large"
          style={{
            width: '100%',
            height: 70,
            borderRadius: 5,
          }}
        >
          Results
        </Button>
      </Col>
    </Row>
  )
}

export default Buttons
