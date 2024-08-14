import React from "react";
import styles from "./Cabecalho.module.css";
import logo from "./logo.png";
import CabecalhoLink from "componentes/CabecalhoLink";
import { Link } from "react-router-dom";
function Cabecalho() {
  return (
    <header className={styles.cabecalho}>
      <Link to="./">
        <img src={logo} alt="logo do cinetag" />
      </Link>
      <nav>
        <CabecalhoLink url={"./"}>
            Home
        </CabecalhoLink>
        <CabecalhoLink url={"./favoritos"}>
            Favoritos
        </CabecalhoLink>
      </nav>
    </header>
  );
}

export default Cabecalho;
