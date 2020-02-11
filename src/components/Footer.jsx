import React from 'react'

import styles from './footer.module.css'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={`${styles.box} ${styles.right}`}>
        Company
      </div>
      <div className={styles.box}>
        Contact
      </div>
      <div className={styles.box}>
        Locations
      </div>
    </div>
  )
}

export default Footer