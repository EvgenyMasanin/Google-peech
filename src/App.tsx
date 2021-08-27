import './App.less'
import routes, { paths } from './Routes/Routes'
import firebaseService from './Firebase/api'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setUserAction } from './Redux/UserData/UserDataActions'
import { useTypedSelector } from './Redux/store'
import { Route, Switch, useHistory, useLocation } from 'react-router-dom'

const App: React.FC = () => {
  const history = useHistory()

  const location = useLocation()

  const dispatch = useDispatch()

  const {
    userData: { userName, isAuth },
  } = useTypedSelector((state) => ({
    userData: state.userData,
  }))

  useEffect(() => {
    firebaseService.isAuthorized(
      (userName: string) => {
        dispatch(setUserAction(userName))
      },
      () => dispatch(setUserAction(''))
    )
  }, [])

  useEffect(() => {
    if (
      userName &&
      isAuth &&
      (location.pathname === paths.SIGNIN || location.pathname === paths.SIGNUP)
    ) {
      history.push(paths.MAIN)
    } else if (
      !userName &&
      location.pathname !== paths.SIGNIN &&
      location.pathname !== paths.SIGNUP
    ) {
      // history.push(paths.SIGNUP)
      history.push(paths.SIGNIN)
    }
  }, [userName])

  return (
    <Switch>
      {routes.map((route) => (
        <Route key={route.path} {...route} />
      ))}
    </Switch>
  )
}

export default App
