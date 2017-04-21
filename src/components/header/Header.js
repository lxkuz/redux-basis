import React from 'react'
import { Link } from 'react-router'
import styles from './header.styl'

class Header extends React.Component {

  render() {
    return (
      <div className={styles.root}>
        <div className={styles.buttonsContainer}>
          <div className={styles.buttonsWrapper}>
            <Link to='/tickets' className={styles.button} activeClassName={styles.buttonActive}>
              Tickets
            </Link>
            <Link to='/agents' className={styles.button} activeClassName={styles.buttonActive}>
              Agents
            </Link>
            <Link to='/clients' className={styles.button} activeClassName={styles.buttonActive}>
              Clients
            </Link>
            <Link to='/reports' className={styles.button} activeClassName={styles.buttonActive}>
              Reports
            </Link>
            <Link to='/login' className={styles.button} activeClassName={styles.buttonActive}>
              Login
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Header
