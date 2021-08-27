import { Col, Row } from 'antd'
import { FC } from 'react'
import { useDispatch } from 'react-redux'
import { IWordData } from '../../Axios/requests'
import { useTypedSelector } from '../../Redux/store'
import { selectWordAction } from '../../Redux/Words/wordsActions'
import LocalSpin from '../Spin/LocalSpin'
import WordCard from '../WordCard/WordCard'

interface IWordsContainer {
  words: Array<IWordData>
}

const WordsContainer: FC<IWordsContainer> = ({ words }) => {
  const dispatch = useDispatch()

  const selectWord = (word: IWordData) => {
    dispatch(selectWordAction(word))
  }

  const {
    words: { isLoading },
  } = useTypedSelector((state) => ({
    words: state.words,
  }))

  return (
    <Row justify="center" className="container" gutter={[16, 16]}>
      {isLoading ? (
        <LocalSpin size="large" tip="Loading..." />
      ) : (
        words.map((word) => {
          return (
            <Col key={word.id} className="word-col" xs={24} sm={12} md={8}>
              <WordCard word={word} selectWord={selectWord} />
            </Col>
          )
        })
      )}
    </Row>
  )
}

export default WordsContainer
