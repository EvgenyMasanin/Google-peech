import React from 'react'
import { Form, Button } from 'antd'

interface IFormSubmit {
  isLoading?: boolean
  submit?: () => void
}

const FormSubmit: React.FC<IFormSubmit> = ({ submit, isLoading, children }) => {
  return (
    <Form.Item wrapperCol={{ offset: 9, span: 6 }}>
      <Button
        block
        type="primary"
        htmlType="submit"
        onClick={submit}
        loading={isLoading}
      >
        {children}
      </Button>
    </Form.Item>
  )
}

export default FormSubmit
