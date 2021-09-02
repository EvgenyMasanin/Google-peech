import Main from '../Components/Main/Main'
import Buttons from '../Components/Buttos/Buttons'
import Picture from '../Components/Picture/Picture'
import useGame from '../Hooks/useGame'
import GameResults from '../Components/GameResults/GameResults'
import SideResults from '../Components/SideResults/SideResults'
import WordsContainer from '../Components/WordsContainer/WordsContainer'
import { useTypedSelector } from '../Redux/store'
import { FORK_URL } from '../Axios/axios'

const MainPage = () => {
  const {
    words: { words, selectedWord, level, isLoading, gameResults, gameStarted },
  } = useTypedSelector((state) => ({
    words: state.words,
    userData: state.userData,
  }))

  const { isModalVisible, setIsModalVisible, startGame, stopGame } = useGame()

  return (
    <>
      <Main
        picture={
          <Picture
            src={
              selectedWord &&
              selectedWord.image &&
              `${FORK_URL}${selectedWord.image}`
            }
          />
        }
        sideResults={gameResults && <SideResults gameResults={gameResults} />}
      >
        {gameResults && (
          <GameResults
            gameResults={gameResults}
            isModalVisible={isModalVisible}
            setIsModalVisible={setIsModalVisible}
          />
        )}
      </Main>
      <WordsContainer words={words[level] ?? []} />
      <Buttons
        isLoading={isLoading}
        gameStarted={gameStarted}
        stopGame={stopGame}
        startGame={startGame}
      />
    </>
  )
}

export default MainPage
