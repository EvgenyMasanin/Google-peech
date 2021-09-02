import React from 'react'
import RegForm from '../Components/RegistratinoForm/RegForm'
import ValidateErrorEntity from '../Interfaces/FormInterfaces'
import { useDispatch } from 'react-redux'
import { IAuthFields } from '../Components/AuthForm/AuthForm'
import { signupAction } from '../Redux/UserData/UserDataActions'
import { useTypedSelector } from '../Redux/store'

const Signup = () => {
  const dispatch = useDispatch()

  const onFinish = (values: IAuthFields) => {
    dispatch(signupAction(values))
  }

  const {
    userData: { isLoading },
  } = useTypedSelector((state) => ({
    userData: state.userData,
  }))

  return <RegForm onFinish={onFinish} isLoading={isLoading} />
}

export default Signup
