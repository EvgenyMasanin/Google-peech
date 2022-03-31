import React, { useState, useEffect, Fragment, FC } from 'react'
import { Table, Typography, Tag, Button } from 'antd'
import Column from 'antd/lib/table/Column'
import ColumnGroup from 'antd/lib/table/ColumnGroup'
import { IGameResults, IWordAfterGame } from '../../Classes/IGemeResults'
import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons'
const { Paragraph } = Typography

interface IStatisticTable {
  words: Array<IGameResults>
  isLoading: boolean
}

const StatisticTable: FC<IStatisticTable> = ({ words, isLoading }) => {
  const [ellipsis, setEllipsis] = useState({} as Record<string, boolean>)

  useEffect(() => {
    if (words.length) {
      words?.sort((a: IGameResults, b: IGameResults) => b.score - a.score)
      setEllipsis(
        words?.reduce((accum: Record<string, boolean>, el) => {
          accum[el.id] = true
          return accum
        }, {})
      )
    }
  }, [words])

  const renderWordsGroups = (
    wordsAfterGame: Array<IWordAfterGame>,
    row: IGameResults,
    ind: number
  ) => {
    return (
      <Paragraph
        style={{ marginBottom: 0 }}
        ellipsis={{
          rows: ellipsis?.[row.id] ? 1 : 10,
        }}
      >
        {wordsAfterGame
          .sort((a, b) => b.word.length - a.word.length)
          .map((wordAftergame) => (
            <Fragment key={wordAftergame.id + ind}>
              <Tag
                style={{ marginRight: '100%' }}
                color={wordAftergame.isCorrect ? 'green' : 'red'}
              >
                {wordAftergame.word}
              </Tag>{' '}
              {/* <br /> */}
            </Fragment>
          ))}
      </Paragraph>
    )
  }

  const renderViev = (value: IGameResults) => {
    return (
      <Button
        type="primary"
        shape="circle"
        icon={ellipsis?.[value.id] ? <EyeOutlined /> : <EyeInvisibleOutlined />}
        onClick={() => {
          setEllipsis({ ...ellipsis, [value.id]: !ellipsis[value.id] })
        }}
      />
    )
  }

  return (
    <Table
      bordered
      dataSource={words?.sort(
        (a: IGameResults, b: IGameResults) => b.score - a.score
      )}
      size="large"
      pagination={{ pageSize: 6 }}
      style={{ flex: '1 1 auto' }}
      scroll={{ y: '70vh', x: 1500 }}
      loading={isLoading}
    >
      <Column
        title="Show/Hide"
        key="view"
        render={renderViev}
        fixed="left"
        width={70}
      />
      <Column
        title="User name"
        dataIndex={['user', 'userName']}
        key="userName"
        fixed="left"
      />
      <Column title="Score" dataIndex="score" key="score" fixed="left" />
      <Column
        title="Correct"
        dataIndex="countOfCorrect"
        key="correct"
        fixed="left"
      />
      <Column
        title="Uncorrect"
        dataIndex="countOfUnCorrect"
        key="unCorrect"
        fixed="left"
      />
      <ColumnGroup title="Words">
        <Column
          title="level 1"
          dataIndex="lv1"
          key="lv1"
          render={renderWordsGroups}
        />
        <Column
          title="level 2"
          dataIndex="lv2"
          key="lv2"
          render={renderWordsGroups}
        />
        <Column
          title="level 3"
          dataIndex="lv3"
          key="lv3"
          render={renderWordsGroups}
        />
        <Column
          title="level 4"
          dataIndex="lv4"
          key="lv4"
          render={renderWordsGroups}
        />
        <Column
          title="level 5"
          dataIndex="lv5"
          key="lv5"
          render={renderWordsGroups}
        />
        <Column
          title="level 6"
          dataIndex="lv6"
          key="lv6"
          render={renderWordsGroups}
        />
      </ColumnGroup>
      <Column
        title="Date of game"
        dataIndex="dateOfGame"
        key="dateOfGame"
        fixed="right"
      />
    </Table>
  )
}

export default StatisticTable
