import WordItem from '../WordItem/WordItem'
import { IWordAfterGame } from '../../Classes/IGemeResults'
import { Button, Tag } from 'antd'
import React, { useState, FC } from 'react'
import { DownOutlined, RightOutlined } from '@ant-design/icons'

interface Colors {
  red: string
  green: string
}

const colors: Colors = {
  red: '#f50',
  green: '#87d068',
}

type TagColor = 'red' | 'green'

interface IDropDown {
  title: string
  tagColor: TagColor
  words?: Array<IWordAfterGame>
}

const DropDown: FC<IDropDown> = ({ title, tagColor, words }) => {
  const [isHide, setIsHide] = useState(true)

  return (
    <div>
      <p>
        {title} <Tag color={colors[tagColor]}>{words?.length || 0}</Tag>{' '}
        <Button
          size="small"
          type="text"
          icon={isHide ? <DownOutlined /> : <RightOutlined />}
          onClick={() => {
            setIsHide(!isHide)
          }}
        />
      </p>
      {!isHide && (
        <>
          {words?.map((word) => {
            return <WordItem key={word.id} word={word} />
          })}
        </>
      )}
    </div>
  )
}

export default DropDown
