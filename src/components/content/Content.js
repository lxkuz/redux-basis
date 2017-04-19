import type { NodeType } from 'flow/types'
import React from 'react'

import styles from './content.styl'

type PropsType = {
  children?: NodeType
}

const Content = (props: PropsType) => {
  return (
    <div className={styles.content}>
      { props.children }
    </div>
  )
}

export default Content
