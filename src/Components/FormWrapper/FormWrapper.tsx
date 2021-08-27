import React from 'react'
import classes from './formWrapper.module.css'

const FormWrapper: React.FC = (props) => {
  return <div className={classes.formWrapper}>{props.children}</div>
}

export default FormWrapper
