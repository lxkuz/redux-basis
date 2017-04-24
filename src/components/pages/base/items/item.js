// import type {  } from 'flow/types'
import React from 'react'
import { renderActions } from 'helpers/ResourcesHelper'
import type { FieldType } from 'flow/types'
import ItemField from './ItemField'

type PropsType = {
  url?: string,
  actions: Array<Object>,
  resource: string,
  item: Object,
  fields: Array<FieldType>
}

const Item = (props: PropsType) => {
  const { fields, item, actions, resource } = props
  return (
    <tr key={item.id}>
      {
        fields.map(field => (
          <ItemField key={field.label} field={field} item={item} resource={resource}/>
        ))
      }
      <td key='actions'>
        { renderActions(item, resource, actions) }
      </td>
    </tr>
  )
}

export default Item
