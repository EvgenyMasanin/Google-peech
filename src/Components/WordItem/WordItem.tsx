import { SoundFilled } from '@ant-design/icons'
import { Card, Col, Row } from 'antd'
import React, { FC, useRef } from 'react'
import { FORK_URL } from '../../Axios/axios'
import { IWordData } from '../../Axios/requests'

interface IWordItem {
  word: IWordData
}

const WordItem: FC<IWordItem> = ({ word }) => {
  const onClick = () => {
    audioRef.current?.play()
  }
  const audioRef = useRef<HTMLAudioElement>(null)

  return (
    <Card
      hoverable
      style={{ border: 'none', margin: '10px 0' }}
      bodyStyle={{ padding: 5 }}
    >
      <Row gutter={8} onClick={onClick} style={{ cursor: 'pointer' }}>
        <Col>
          <SoundFilled />
        </Col>
        <Col>{word.word}</Col>
        <Col>{word.transcription}</Col>
        <audio ref={audioRef} src={`${FORK_URL}${word.audio}`}></audio>
      </Row>
    </Card>
  )
}

export default WordItem
