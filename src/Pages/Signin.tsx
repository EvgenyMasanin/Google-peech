import { useDispatch } from 'react-redux'
import {
  signinAction,
  setIsAuthAction,
} from '../Redux/UserData/UserDataActions'
import AuthForm, { IAuthFields } from '../Components/AuthForm/AuthForm'
import { useTypedSelector } from '../Redux/store'

const Signin = () => {
  const dispatch = useDispatch()
  const onFinish = (values: IAuthFields) => {
    dispatch(signinAction(values))
    dispatch(setIsAuthAction())
  }

  const {
    userData: { isLoading },
  } = useTypedSelector((state) => ({
    userData: state.userData,
  }))

  return <AuthForm isLoading={isLoading} onFinish={onFinish} />
}

export default Signin
