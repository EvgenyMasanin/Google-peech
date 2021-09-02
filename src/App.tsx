import './App.less'
import Steps from './Components/Steps/Steps'
import Header from './Components/Header/Header'
import DropDown from './Components/MenuDropDown/MenuDropDown'
import routes, { paths } from './Routes/Routes'
import React, { useEffect } from 'react'
import firebaseService, { IUser } from './Firebase/api'
import { useToasts } from 'react-toast-notifications'
import { useDispatch } from 'react-redux'
import { useTypedSelector } from './Redux/store'
import { clearError, setUserAction } from './Redux/UserData/UserDataActions'
import { Route, Switch, useHistory, useLocation } from 'react-router-dom'

const App: React.FC = () => {
  const history = useHistory()

  const location = useLocation()

  const dispatch = useDispatch()

  const {
    userData: { user, isAuth, error },
    words: { level },
  } = useTypedSelector((state) => ({
    userData: state.userData,
    words: state.words,
  }))

  useEffect(() => {
    firebaseService.isAuthorized(
      (user: IUser) => {
        dispatch(setUserAction(user))
      },
      () => dispatch(setUserAction(null))
    )
  }, [])

  useEffect(() => {
    if (
      user &&
      isAuth &&
      (location.pathname === paths.SIGNIN || location.pathname === paths.SIGNUP)
    ) {
      history.push(paths.MAIN)
    } else if (
      !user &&
      location.pathname !== paths.SIGNIN &&
      location.pathname !== paths.SIGNUP
    ) {
      history.push(paths.SIGNIN)
    }
  }, [user])

  const { addToast } = useToasts()
  useEffect(() => {
    if (error) {
      addToast(error, {
        appearance: 'error',
        autoDismiss: true,
        autoDismissTimeout: 5000,
      })
      dispatch(clearError())
    }
  }, [error])

  return (
    <div className="wrapper">
      {location.pathname !== paths.SIGNIN &&
        location.pathname !== paths.SIGNUP && (
          <Header
            title="Google speech"
            content={
              location.pathname === paths.MAIN && <Steps current={level} />
            }
            buttons={[<DropDown key="1" />]}
          />
        )}

      <Switch>
        {routes.map((route) => (
          <Route key={route.path} {...route} />
        ))}
      </Switch>
    </div>
  )
}

export default App
