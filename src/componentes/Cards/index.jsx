import React, { useState } from "react";
import styles from "./Cards.module.css";
import iconeDesfavoritado from "./favorite_outline.png";
import iconeFavoritado from "./favorite.png";
import { useFavoritoContext } from "contextos/Favoritos";
import { Link } from "react-router-dom";
function Cards({ id, titulo, capa }) {
  const { favorito, adicionarFavorito } = useFavoritoContext();
  const ehFavorito = favorito.some((fav) => fav.id === id);
  const iconeAtual = ehFavorito ? iconeFavoritado : iconeDesfavoritado;

  return (
    <div className={styles.container}>
      <Link className={styles.link} to={`/${id}`} >
        <img src={capa} alt={titulo} className={styles.capa} />
        <h2>{titulo}</h2>
      </Link>
      <img
        src={iconeAtual}
        alt="favoritar icone"
        className={styles.favoritar}
        onClick={() => {
          adicionarFavorito({ id, titulo, capa });
        }}
      />
    </div>
  );
}

export default Cards;
