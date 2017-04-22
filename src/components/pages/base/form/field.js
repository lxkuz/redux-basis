// import type {  } from 'flow/types'
import React from 'react'
import R from 'ramda'
import { Field } from 'redux-form'

type PropsType = {
  label?: string,
  name: string,
  component: any
}

export const FieldBootstrap = (props: PropsType) => {
  return (
    <div className='form-group'>
      <label htmlFor="name" className="col-xs-4 control-label">{props.label || props.name}</label>
      <div className="col-xs-8">
        <Field {...R.omit(['label'], props)}/>
      </div>
    </div>
  )
}
