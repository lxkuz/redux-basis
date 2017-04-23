// import type {  } from 'flow/types'
import React from 'react'
import { Link } from 'react-router'

type PropsType = {
  resource: string,
  item: Object,
  field: FieldType
}

const ItemField = (props: PropsType) => {
  const { field, item, resource } = props
  const value = (typeof field.value == 'function') ? field.value(item) : item[field.value]

  return (
    <td key={field.label}>
      { field.link && <Link to={`/${resource}/${item.id}`}>{value}</Link> }
      { !field.link && <span>{value}</span> }
    </td>
  )
}

export default ItemField
