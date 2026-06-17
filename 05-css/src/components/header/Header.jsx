import React from 'react'
import styles from './Header.module.css'
import buttonStyles from "../button/Button.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
        <h1>Ajay Shankar</h1>
        <button className={buttonStyles.btn}> Login</button>
    </div>
  )
}

export default Header