import React from 'react'
import { Link } from 'react-router'
import styles from './header.styl'

class Header extends React.Component {

  render() {
    return (
      <div className={styles.root}>
        <img className={styles.logo} src={logo}/>
        <div className={styles.buttonsContainer}>
          <div className={styles.buttonsWrapper}>
            <Link to='/stream' className={styles.button} activeClassName={styles.buttonActive}>
              Stream
            </Link>
            <Link to='/actions' className={styles.button} activeClassName={styles.buttonActive}>
              Actions
            </Link>
            <Link to='/favorite' className={styles.button} activeClassName={styles.buttonActive}>
              Saved actions
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Header
