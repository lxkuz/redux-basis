// import type {  } from 'flow/types'
import React from 'react'
import R from 'ramda'
import { Field } from 'redux-form'

type PropsType = {
  label?: string,
  name: string,
  component: any,
  touched?: boolean
}

export const FieldBootstrap = (props: PropsType) => {
  return (
    <div className='form-group'>
      <label htmlFor="name" className="col-xs-4 control-label">{props.label || props.name}</label>
      <div className="col-xs-4">
        <Field className="form-control" {...R.omit(['label'], props)}/>
        {props.touched && props.error && <span className='text-danger'>{props.error.join(', ')}</span>}
      </div>
    </div>
  )
}
