import React, { FC } from 'react'
import { paths } from '../../Routes/Routes'
import { Form, Input, Typography } from 'antd'
import styles from '../AuthForm/form.module.css'
import FormInput from '../FormControls/FormInput'
import FormSubmit from '../FormControls/FormSubmit'
import FormWrapper from '../FormWrapper/FormWrapper'
import UnderFormLink from '../FormControls/UnderFormLink'
import ValidateErrorEntity from '../../Interfaces/FormInterfaces'

const { Title } = Typography

const AuthFormConfig = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
  className: styles.form,
}

export interface IRegFields {
  email: string
  password: string
}

interface IRegForm<T> {
  isLoading?: boolean
  onFinish: (values: T) => void
  onFinishFailed?: (errorInfo: ValidateErrorEntity<T>) => void
}

const validator = ({
  getFieldValue,
}: {
  getFieldValue: (param: string) => string
}) => ({
  validator(_: any, value: string) {
    if (!value || getFieldValue('password') === value) {
      return Promise.resolve()
    }
    return Promise.reject(new Error('Passwords must match!'))
  },
})

const RegForm: FC<IRegForm<IRegFields>> = ({
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
        <Title className={styles.title}>Registration</Title>
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
        <FormInput
          title="Confirm password"
          type="text"
          InputType={Input.Password}
          required
          message="Please confirm password!"
          rules={[validator]}
        />
        <FormSubmit isLoading={isLoading}>Sign Up</FormSubmit>
      </Form>
      <UnderFormLink
        text="Already have an account?"
        linkText="Log in"
        path={paths.SIGNIN}
      />
    </FormWrapper>
  )
}

export default RegForm
