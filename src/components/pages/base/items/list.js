// import type {  } from 'flow/types'
import React from 'react'
import classnames from 'classnames'
import Item from './item'
import styles from './list.styl'

type PropsType = {
  items: Attay<Object>,
  resource: string,
  url?: string,
  actions: Attay<Object>
}

const List = (props: PropsType) => {
  const cssTable = classnames('table table-bordered table-striped', styles.container)
  return (
    <table className={cssTable}>
      <thead>
        <tr>
          <th key='title' className="text-center col-xs-10">Title</th>
          <th key='actions' className="text-center col-xs-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {
          props.items.map((item) => {
            return <Item key={item.id} item={item} {...props}/>
          })
        }
      </tbody>
    </table>
  )
}

export default List
