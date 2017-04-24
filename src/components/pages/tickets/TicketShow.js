import React from 'react'
import moment from 'moment'
import Show from 'components/pages/base/show/show'
import { TicketStatusLabel } from './TicketsPage'
type PropsType = {
}

const TicketShow = (props: PropsType) => {
  const fields = [
    { label: 'Name', value: 'name' },
    { label: 'Description', value: 'description' },
    { label: 'Kind', value: (obj: Object) => {
      return obj.ticket_kind && obj.ticket_kind.name
    } },
    { label: 'Status', value: (obj: TicketType) => ( <TicketStatusLabel status={obj.status}/> ) },
    { label: 'Closing description', value: 'closing_description' },
    { label: 'Created at', value: (obj: Object) => {
      return moment.unix(obj.created_at).format('MMM Do YYYY')
    }
    }
  ]
  return <Show resource='tickets' fields={fields} {...props}/>
}

export default TicketShow