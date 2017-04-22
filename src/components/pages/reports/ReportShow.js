import React from 'react'
import moment from 'moment'
import Show from 'components/pages/base/show/show'

type PropsType = {
}

const ReportShow = (props: PropsType) => {
  const fields = [
    { label: 'Name', value: 'title' },
    { label: 'Created at', value: (obj: Object) => {
      return moment.unix(obj.created_at).format('MMM Do YYYY')
    } }
  ]
  return <Show resource='reports' fields={fields} {...props}/>
}

export default ReportShow
