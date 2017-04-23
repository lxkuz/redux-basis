import React from 'react'
import { FieldBootstrap as Field } from 'components/pages/base/form/field'
import { TICKET_STATUSES } from 'lib/constants'
type PropsType = {
}

class TicketAdminFields extends React.Component {
  props: PropsType

  render() {
    return (
      <div>
        <Field
          component='textarea'
          name='closing_description'
          label='Description'
        />
        <Field component='select' name='status' label='Ticket status'>
          {
            TICKET_STATUSES.map((status: string) => {
              return <option value={status} key={status}>{status}</option>
            })
          }
        </Field>
      </div>
    )
  }
}

export default TicketAdminFields
