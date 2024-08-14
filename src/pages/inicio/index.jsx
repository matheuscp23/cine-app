import styles from "./Inicio.module.css";
import Banner from "componentes/Banner";
import Cards from "componentes/Cards";
import Titulo from "componentes/Titulo";
import { useEffect, useState } from "react";
function Inicio() {
  const [videos, setVideos] = useState([])

  useEffect(()=>{
    fetch('https://my-json-server.typicode.com/matheuscp23/cine-tag-api/videos')
    .then(resposta => resposta.json())
    .then(dados => {
        setVideos(dados)
    })
}, [])
  return (
    <>
      <Banner imagem={"home"} />
      <Titulo>
        <h1>Um lugar para guardar seus videos e filmes</h1>
      </Titulo>
      <section className={styles.container}>
        {videos.map((video) => (
          <Cards key={video.id} {...video} />
        ))}
      </section>
    </>
  );
}

export default Inicio;
