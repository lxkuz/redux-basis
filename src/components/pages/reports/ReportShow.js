import React from 'react'
import moment from 'moment'
import Show from 'components/pages/base/show/show'
import PdfButton from './PdfButton'

type PropsType = {
  params: Object
}

const ReportShow = (props: PropsType) => {
  const fields = [
    { label: 'Title', value: 'title' },
    { label: 'Created at', value: (obj: Object) => {
      return moment.unix(obj.created_at).format('MMM Do YYYY')
    } }
  ]

  const pdfButton = [<PdfButton key='pdf' id={props.params.id}/>]
  return (
    <Show resource='reports' fields={fields} buttons={pdfButton} {...props}/>
  )
}

export default ReportShow
