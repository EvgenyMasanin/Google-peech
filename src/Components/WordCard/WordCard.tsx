import React, { useEffect, useRef, useState } from 'react'
import { SoundFilled } from '@ant-design/icons'
import { Card } from 'antd'
import classes from './wordCard.module.css'
import { IWordData } from '../../Axios/requests'
import { useTypedSelector } from '../../Redux/store'
import { URL } from '../../Pages/MainPage'

interface IWordCard {
  word: IWordData
  selectWord: (word: IWordData) => void
}

const WordCard: React.FC<IWordCard> = ({ word, selectWord }) => {
  const [cardClasses, setCardClasses] = useState([classes.antCardBody])

  const {
    words: { selectedWord },
  } = useTypedSelector((state) => ({
    words: state.words,
  }))

  useEffect(() => {
    if (word.id === selectedWord.id)
      setCardClasses([classes.antCardBody, classes.active])
    else setCardClasses([classes.antCardBody, classes.common])
  }, [selectedWord])

  const onClick = () => {
    selectWord(word)
    try {
      audioRef.current?.play()
    } catch (error) {
      console.log(error)
    }
  }
  const audioRef = useRef<HTMLAudioElement>(null)

  return (
    <Card
      hoverable
      className={cardClasses.join(' ')}
      bodyStyle={{
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        fontSize: '20px',
        padding: '1rem',
      }}
      onClick={onClick}
    >
      <SoundFilled />
      <div className={classes.content}>
        <div>{word.word}</div>
        <div>{word.transcription}</div>
      </div>
      <audio ref={audioRef} src={`${URL}${word.audio}`}></audio>
    </Card>
  )
}

export default WordCard
