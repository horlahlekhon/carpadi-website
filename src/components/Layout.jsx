import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Helmet } from "react-helmet"
import * as styles from '../styles/global.module.css'
import Navbar from './Navbar'
import Footer from './Footer'




function Layout({children}) {
  return (
    <div className={styles.body}>
      <Helmet>
        <title>Carpadi</title>
        <link rel="icon" type="image/png" sizes="32x32" href="https://res.cloudinary.com/grootretro/image/upload/v1646753426/carpadi-website/fav_icon_big_uepqsw.png"></link>
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