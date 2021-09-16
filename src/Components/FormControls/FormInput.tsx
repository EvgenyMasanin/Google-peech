import React from 'react'
import { Form, Input } from 'antd'
import { camelCase } from '../../Utils/camelCase'
import { LiteralUnion } from 'antd/lib/_util/type'
import { Rule } from 'rc-field-form/lib/interface'

type Type = LiteralUnion<
  | 'button'
  | 'checkbox'
  | 'color'
  | 'date'
  | 'datetime-local'
  | 'email'
  | 'file'
  | 'hidden'
  | 'image'
  | 'month'
  | 'number'
  | 'password'
  | 'radio'
  | 'range'
  | 'reset'
  | 'search'
  | 'submit'
  | 'tel'
  | 'text'
  | 'time'
  | 'url'
  | 'week',
  string
>

interface IFormInput {
  title: string
  required: boolean
  message: string
  type?: Type
  rules?: Array<Rule>
}
const FormInput: React.FC<IFormInput> = ({
  title,
  required,
  message,
  type = 'text',
  rules = [],
}) => {
  const name = camelCase(title)

  return (
    <Form.Item
      label={title}
      name={name}
      rules={[{ required, message }, ...rules]}
    >
      {type === 'password' ? (
        <Input.Password name={name} type={type} autoComplete="password" />
      ) : (
        <Input name={name} type={type} autoComplete="text" />
      )}
    </Form.Item>
  )
}

export default FormInput
