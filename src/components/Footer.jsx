import React from 'react'

import styles from './footer.module.css'

const Footer = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={`${styles.box} ${styles.right}`}>
          <h1 className={styles.title} >Company</h1>
          <p>
            word
        </p>
          <p>
            hello
        </p>
        </div>
        <div className={styles.box}>
          <h1 className={styles.title} >Contact</h1>
          <p>
            (269)888-8888
        </p>
          <p>
            email@email.com
        </p>
        </div>
        <div className={styles.box}>
          <h1 className={styles.title} >Locations</h1>
          <p>
            Eliza St
        </p>
          <p>
            Schoolcradt, MI
        </p>
        </div>
      </div>
      <div className={styles.copyright}>
        2020 Copyright &copy; All Rights Reserved By Wind + James
    </div>
    </>
  )
}

export default Footer