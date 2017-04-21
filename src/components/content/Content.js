import type { NodeType } from 'flow/types'
import React from 'react'

type PropsType = {
  children?: NodeType
}

const Content = (props: PropsType) => {
  return (
    <div className="container-fluid">
      { props.children }
    </div>
  )
}

export default Content
