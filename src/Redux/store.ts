import createSagaMiddleware from 'redux-saga'
import { rootSaga } from './Sagas'
import { wordsReducer } from './Words/wordsReducer'
import { connectRouter } from 'connected-react-router'
import { userDataReducer } from './UserData/UserDataReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createBrowserHistory } from 'history'
import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { combineReducers, applyMiddleware, createStore } from 'redux'

export const history = createBrowserHistory()

const sagasMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
  userData: userDataReducer,
  words: wordsReducer,
  router: connectRouter(history),
})

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagasMiddleware))
)

export const useTypedSelector: TypedUseSelectorHook<
  ReturnType<typeof rootReducer>
> = useSelector

sagasMiddleware.run(rootSaga)
