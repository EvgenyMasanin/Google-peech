import { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { IWordData } from '../Axios/requests'
import GameResults from '../Classes/GameResults'
import { IGameResults, IWordAfterGame } from '../Classes/IGemeResults'
import { Recognition } from '../Classes/Recognition'
import firebaseService from '../Firebase/api'
import { useTypedSelector } from '../Redux/store'
import {
  changeLevelAction,
  getWordsAction,
  selectWordAction,
  setGameResultsAction,
  setUserWordAction,
  startGameAction,
} from '../Redux/Words/wordsActions'
import wordGenerator, {
  NEXT_LEVEL,
  NEXT_LEVEL_TYPE,
} from '../Utils/wordGenerator'

const useGame = () => {
  const dispatch = useDispatch()

  const {
    words: { words, level, selectedWord, gameStarted, userWord },
    userData: { user },
  } = useTypedSelector((state) => ({
    words: state.words,
    userData: state.userData,
  }))

  const wordsForGame = useRef<Generator<
    IWordData | NEXT_LEVEL_TYPE,
    void,
    unknown
  > | null>(null)

  const gameResult = useRef<IGameResults | null>(null)
  const wordsResults = useRef<Array<Array<IWordAfterGame>> | null>(null)

  const [isModalVisible, setIsModalVisible] = useState(false)

  const compareWords = (userWord: string): IWordAfterGame => {
    return {
      ...(selectedWord as IWordData),
      isCorrect:
        !!selectedWord?.word.includes(userWord.toLowerCase()) ||
        !!userWord.toLowerCase().includes(selectedWord?.word || ''),
    }
  }

  const startGame = () => {
    wordsForGame.current = wordGenerator(words)
    wordsResults.current = [[], [], [], [], [], []]
    dispatch(selectWordAction(null))
    dispatch(startGameAction(true))
    gameResult.current = new GameResults({
      user: user!,
      levels: wordsResults.current,
    })
  }

  useEffect(() => {
    if (gameStarted) nextWord()
  }, [gameStarted])

  const endGame = () => {
    dispatch(getWordsAction())
    dispatch(changeLevelAction(0))
    dispatch(startGameAction(false))
    dispatch(selectWordAction(null))
    dispatch(setGameResultsAction(null))
    Recognition.stopRecognition()
  }

  const nextWord = () => {
    if (wordsForGame.current) {
      const iterator = wordsForGame.current.next()

      if (!iterator.done) {
        if (iterator.value == NEXT_LEVEL) {
          dispatch(changeLevelAction(level + 1))
          return true
        } else {
          const word: IWordData = iterator.value as IWordData
          dispatch(selectWordAction(word))
        }
      } else {
        dispatch(setGameResultsAction(gameResult.current))
        firebaseService.addGameResults(gameResult.current)
        setIsModalVisible(true)
        endGame()
      }
    }
  }

  useEffect(() => {
    if (selectedWord && wordsResults.current) {
      Recognition.startRecognition((text: string) =>
        dispatch(setUserWordAction(text))
      )
    }
  }, [selectedWord])

  useEffect(() => {
    if (selectedWord && wordsResults.current) {
      wordsResults.current[level].push(compareWords(userWord))
      gameResult.current?.setWords(wordsResults.current)
      dispatch(setGameResultsAction(gameResult.current))
      if (nextWord()) nextWord()
    }
  }, [userWord])

  const stopGame = () => {
    endGame()
  }

  return {
    isModalVisible,
    setIsModalVisible,
    startGame,
    stopGame,
    endGame,
  }
}
export default useGame
