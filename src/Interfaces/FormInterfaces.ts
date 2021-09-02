import { InternalNamePath } from 'antd/lib/form/interface'

interface IErrorField {
  name: InternalNamePath
  errors: Array<string>
}

export default interface ValidateErrorEntity<T> {
  values: T
  errorFields: Array<IErrorField>
  outOfDate: boolean
}
