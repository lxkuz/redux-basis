// import type {  } from 'flow/types'
import React from 'react'
import { Link } from 'react-router'
import classnames from 'classnames'
import { renderActions } from 'helpers/ResourcesHelper'
import styles from './item.styl'

type PropsType = {
  url?: string,
  actions: Array<Object>,
  resource: string,
  item: Object
}

const Item = (props: PropsType) => {
  const { item, actions, resource } = props
  return (
    <tr className={styles.item}>
      <td>
        <Link
          to={`/${props.url || props.resource}/${item.id}`}
          className={styles.name}
        >
          { item.title || item.name }
        </Link>
      </td>
      <td className={styles.actions}>
        { renderActions(item, resource, actions) }
      </td>
    </tr>
  )
}

export default Item
