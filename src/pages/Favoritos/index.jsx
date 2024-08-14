import React from "react";
import styles from "./Favoritos.module.css";
import Banner from "componentes/Banner";
import Titulo from "componentes/Titulo";
import Cards from "componentes/Cards";
import { useFavoritoContext } from "contextos/Favoritos";
function Favoritos() {
  const {favorito} = useFavoritoContext();
  return (
    <>
      <Banner imagem="favoritos" />
      <Titulo>
        <h1>Meus Favoritos</h1>
      </Titulo>
      <section className={styles.container}>
        {favorito.map((fav)=>(
          <Cards {...fav} key={fav.id}/>
        ))}
      </section>
    </>
  );
}

export default Favoritos;
