// @flow

import type { NodeType, DispatchType, UserType } from 'flow/types'
import React from 'react'
import { connect } from 'react-redux'

import Header from 'components/header/Header'
import Content from 'components/content/Content'

// import Footer from 'components/footer/Footer'
import styles from './app.styl'

type PropsType = {
  children?: NodeType,
  dispatch: DispatchType,
  currentUser?: UserType
}

class App extends React.Component {
  props: PropsType

  render() {
    const { children } = this.props

    return (
      <div id="app" className={styles.root}>
        <Header/>
        <Content>{ children }</Content>
        {/*<Footer/>*/}
      </div>
    )
  }
}

export default connect(state => ({
  currentUser: state.currentUser
}))(App)
