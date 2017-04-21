// import type {  } from 'flow/types'
import React from 'react'
import { Link } from 'react-router'
import { reduxForm, Field } from 'redux-form'
import { generateSubmitCallback } from 'helpers/ResourcesHelper'
import styles from './form.styl'

type PropsType = {
  url?: string,
  resource: string,
  item: Object,
  children: Array<Object>
}

const ItemForm = (props: PropsType) => {
  const { item, resource, dispatch } = props
  const onSubmit = props.onSubmit || generateSubmitCallback(dispatch, resource)
  return (
    <form onSubmit={onSubmit}>
      { props.children }
      <button>Submit</button>
    </form>
  )
}

export default ItemForm
