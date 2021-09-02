import React, { FC } from 'react'
import Modal from 'antd/lib/modal/Modal'
import DropDown from '../DropDown/DropDown'
import { Button, Row } from 'antd'
import { IGameResults } from '../../Classes/IGemeResults'

interface IGameResultsComponent {
  isModalVisible: boolean
  gameResults: IGameResults
  setIsModalVisible: (val: boolean) => void
}

const GameResults: FC<IGameResultsComponent> = ({
  gameResults,
  isModalVisible,
  setIsModalVisible,
}) => {
  const handleOk = () => {
    setIsModalVisible(false)
  }

  return (
    <Modal
      style={{ top: 20 }}
      title={<Row justify="center">Game is over.</Row>}
      visible={isModalVisible}
      onOk={handleOk}
      closable={false}
      bodyStyle={{ maxHeight: 300, overflowY: 'scroll' }}
      footer={[
        <Button key="1" type="primary" onClick={handleOk}>
          Ok
        </Button>,
      ]}
    >
      <DropDown
        title="Mistakes"
        tagColor="red"
        words={gameResults?.unCorrectWords}
      />
      <DropDown
        title="I know"
        tagColor="green"
        words={gameResults?.correctWords}
      />
    </Modal>
  )
}

export default GameResults
