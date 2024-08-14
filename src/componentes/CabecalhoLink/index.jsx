import React from 'react'
import styles from "./Cabecalho.module.css"
import { Link } from 'react-router-dom'
function CabecalhoLink({url, children}) {
  return (
    <Link to={url} className={styles.link}>
        {children}
    </Link>
  )
}

export default CabecalhoLink