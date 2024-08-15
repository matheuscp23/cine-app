import React from 'react'
import styles from './Rodape.module.css'
import { Link } from 'react-router-dom'
function Rodape() {
  return (
    <footer className={styles.rodape}>
        <Link className={styles.link} to={'https://github.com/matheuscp23?tab=repositories'}>
            Desenvolvido por Matheus
        </Link>
    </footer>
  )
}

export default Rodape
