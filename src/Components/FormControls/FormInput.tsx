import React from 'react'
import { Form, Input } from 'antd'
import { camelCase } from '../../Utils/camelCase'

interface IFormInput {
  title: string
  required: boolean
  message: string
  type?: string
  rules?: Array<any>
  InputType?: any
}
const FormInput: React.FC<IFormInput> = ({
  title,
  required,
  message,
  type = 'text',
  InputType = Input,
  rules = [],
}) => {
  const name = camelCase(title)

  return (
    <Form.Item
      label={title}
      name={name}
      rules={[{ required, message }, ...rules]}
    >
      <InputType name={name} type={type} autoComplete="text" />
    </Form.Item>
  )
}

export default FormInput
