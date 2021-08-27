import Main from '../Components/Main/Main'
import Steps from '../Components/Steps/Steps'
import Header from '../Components/Header/Header'
import Buttons from '../Components/Buttos/Buttons'
import Picture from '../Components/Picture/Picture'
import DropDown from '../Components/DropDown/DropDown'
import WordsContainer from '../Components/WordsContainer/WordsContainer'
import { useDispatch } from 'react-redux'
import { useTypedSelector } from '../Redux/store'
import { changeLevelAction } from '../Redux/Words/wordsActions'

export const URL =
  'https://raw.githubusercontent.com/EvgenyMasanin//rslang-data/master/'

const MainPage = () => {
  const {
    words: { words, selectedWord, level },
  } = useTypedSelector((state) => ({
    words: state.words,
    userData: state.userData,
  }))

  const dispatch = useDispatch()

  const changeLevel = (level: number) => {
    dispatch(changeLevelAction(level))
  }

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Header
        title="Google peech"
        content={<Steps current={level} onChange={changeLevel} />}
        buttons={[<DropDown key="1" />]}
      />
      <Main>
        <Picture src={selectedWord.image && `${URL}${selectedWord.image}`} />
      </Main>
      <WordsContainer words={words[level] ?? []} />
      <Buttons />
    </div>
  )
}

export default MainPage
