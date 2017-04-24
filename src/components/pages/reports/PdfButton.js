import React from 'react'
import { connect } from 'react-redux'
import type { DispatchType, UserType } from 'flow/types'
import * as exportActions from 'actions/exportActions'
import spinner from 'helpers/spinner.svg'
type PropsType = {
  currentUser?: UserType,
  dispatch: DispatchType,
  id: string,
  loading?: boolean
}

const PdfButton = (props: PropsType) => {
  const { dispatch, loading } = props
  const onClick = () => {
    if (!loading) dispatch(exportActions.getReportPdf(props.id))
  }
  return (
    <a onClick={onClick} className='btn btn-warning'>
      { loading && <img src={spinner}/> }
      { !loading && 'Download PDF'}
    </a>
  )
}

export default connect((state) => {
  return { currentUser: state.currentUser, loading: state.loading && state.loading.report }
})(PdfButton)
