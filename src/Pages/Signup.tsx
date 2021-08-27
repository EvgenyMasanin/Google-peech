import React from 'react'
import RegForm from '../Components/RegistratinoForm/RegForm'
import ValidateErrorEntity from '../Interfaces/FormInterfaces'
import { useDispatch } from 'react-redux'
import { IAuthFields } from '../Components/AuthForm/AuthForm'
import {
  setIsAuthAction,
  signupAction,
} from '../Redux/UserData/UserDataActions'
import { useTypedSelector } from '../Redux/store'

const Signup = () => {
  const dispatch = useDispatch()

  const onFinish = (values: IAuthFields) => {
    dispatch(signupAction(values))
    dispatch(setIsAuthAction())
  }

  const {
    userData: { isLoading },
  } = useTypedSelector((state) => ({
    userData: state.userData,
  }))

  const onFinishFailed = (errorInfo: ValidateErrorEntity<IAuthFields>) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <RegForm
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      isLoading={isLoading}
    />
  )
}

export default Signup
