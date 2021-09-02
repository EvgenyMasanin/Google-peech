import React, { FC } from 'react'
import { Form, Input, Typography } from 'antd'
import ValidateErrorEntity from '../../Interfaces/FormInterfaces'
import styles from './form.module.css'
import FormInput from '../FormControls/FormInput'
import FormSubmit from '../FormControls/FormSubmit'
import FormWrapper from '../FormWrapper/FormWrapper'
import UnderFormLink from '../FormControls/UnderFormLink'
import { paths } from '../../Routes/Routes'
const { Title } = Typography

const AuthFormConfig = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
  className: styles.form,
}

export interface IAuthFields {
  email: string
  password: string
}

interface IAuthForm<T> {
  isLoading?: boolean
  onFinish: (values: T) => void
  onFinishFailed?: (errorInfo: ValidateErrorEntity<T>) => void
}

const AuthForm: FC<IAuthForm<IAuthFields>> = ({
  isLoading,
  onFinish,
  onFinishFailed,
}) => {
  return (
    <FormWrapper>
      <Form
        {...AuthFormConfig}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Title className={styles.title}>Authorization</Title>
        <FormInput
          title="Email"
          type="email"
          required
          message="Please input your username!"
        />
        <FormInput
          title="Password"
          type="text"
          InputType={Input.Password}
          required
          message="Please input your password!"
        />
        <FormSubmit isLoading={isLoading}>Sign In</FormSubmit>
      </Form>
      <UnderFormLink
        text="Not a member?"
        linkText="Sign up"
        path={paths.SIGNUP}
      />
    </FormWrapper>
  )
}

export default AuthForm
