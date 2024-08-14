import React, { useEffect, useState } from "react";
import styles from "./Player.module.css";
import Banner from "componentes/Banner";
import Titulo from "componentes/Titulo";
import { useParams } from "react-router-dom";
import NaoEncontrada from "pages/NaoEncontrada";

function Player() {
  const [ videos, setVideos] = useState([])
  const parametros = useParams();

  useEffect(()=>{
    fetch(`https://my-json-server.typicode.com/matheuscp23/cine-tag-api/videos?id=${parametros.id}`)
    .then(resposta => resposta.json())
    .then(dados => {
        setVideos(...dados)
    })
}, [])


  if (!videos) {
    return <NaoEncontrada/>;
  }
  return (
    <>
      <Banner imagem="player" />
      <Titulo>
        <h1>Player</h1>
      </Titulo>
      <section className={styles.container}>
        <iframe
          width="100%"
          height="100%"
          src={videos.link}
          title={videos.titulo}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </section>
    </>
  );
}

export default Player;
