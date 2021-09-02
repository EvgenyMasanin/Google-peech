import { Card } from 'antd'
import React, { FC } from 'react'
import { IGameResults } from '../../Classes/IGemeResults'
import DropDown from '../DropDown/DropDown'

interface ISideResults {
  gameResults: IGameResults | null
}

const SideResults: FC<ISideResults> = ({ gameResults }) => {
  return (
    <Card
      className="w100 h100"
      bodyStyle={{
        height: '100%',
        paddingRight: 0,
      }}
    >
      <div className="h100" style={{ overflowY: 'scroll' }}>
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
      </div>
    </Card>
  )
}

export default SideResults
