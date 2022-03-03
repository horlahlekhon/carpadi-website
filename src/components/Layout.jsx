import React from 'react'
import { Helmet } from "react-helmet"
import * as styles from '../styles/global.module.css'
import Navbar from './Navbar'
import Footer from './Footer'




function Layout({children}) {
  return (
    <div className={styles.body}>
      <Helmet>
        <meta name='viewport' content='width=device-width, initial-scale=1'/>
      </Helmet>
        <Navbar />
        <div>
            {children}
        </div>
        <Footer />
    </div>
  )
}

export default Layout