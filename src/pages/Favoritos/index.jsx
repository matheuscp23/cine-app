import React from "react";
import styles from "./Favoritos.module.css";
import Banner from "componentes/Banner";
import Titulo from "componentes/Titulo";
import Cards from "componentes/Cards";
import { useFavoritoContext } from "contextos/Favoritos";
import NaoEncontrada from "pages/NaoEncontrada";
function Favoritos() {
  const {favorito} = useFavoritoContext();
  return (
    <>
      <Banner imagem="favoritos" />
      <Titulo>
        <h1>Meus Favoritos</h1>
      </Titulo>
      <section className={styles.container}>
        {favorito.length>0 ? (
          favorito.map((fav)=>(
            <Cards {...fav} key={fav.id}/>
          ))
        ):(
          <>
         <NaoEncontrada/>
          </>
        )}
      </section>
    </>
  );
}

export default Favoritos;
