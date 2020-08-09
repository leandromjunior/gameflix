import React, { useEffect, useState } from 'react';
//import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import PageDefault from '../../components/PageDefault';
import categoriasRepository from '../../repositories/categorias';

function Home() {

  const[dadosIniciais, setDadosIniciais] = useState([]);

  useEffect(() => {
    //http://localhost:8080/categorias?_embed=videos
   categoriasRepository.getAllWithVideos()
    .then((categoriasComVideos) => {
      console.log(categoriasComVideos);
      setDadosIniciais(categoriasComVideos);

    })
  }, []);


  return (
    <PageDefault paddingAll={0}>

      {dadosIniciais.length === 0 && (<div>Loading...</div>)}

      {dadosIniciais.map((categoria, indice) => {
        if (indice === 0) {
          return(
            <div key={categoria.id}>
              <BannerMain
        videoTitle={dadosIniciais[0].videos[0].titulo}
        url={dadosIniciais[0].videos[0].url}
        videoDescription={"Revealing Marvel's Spider-Man: Miles Morales, a new adventure from Insomniac Games coming to PlayStation 5."}
      />

      <Carousel
        //ignoreFirstVideo //ignora o video que está no banner da fileira de videos
        category={dadosIniciais[0]}
      />
            </div>
          );
        }

        return(
          <Carousel
            key={categoria.id}
            category={categoria}
          />
        );
      })}

      {dadosIniciais.length >= 1 && (
        <>
          <BannerMain
        videoTitle={dadosIniciais[0].videos[0].titulo}
        url={dadosIniciais[0].videos[0].url}
        videoDescription={"Revealing Marvel's Spider-Man: Miles Morales, a new adventure from Insomniac Games coming to PlayStation 5."}
      />

      <Carousel
        ignoreFirstVideo //ignora o video que está no banner da fileira de videos
        category={dadosIniciais[0]}
      />
      

      </>
    )}

      

      {/* <BannerMain
        videoTitle={dadosIniciais.categorias[5].videos[0].titulo}
        url={dadosIniciais.categorias[5].videos[0].url}
        videoDescription={"Revealing Marvel's Spider-Man: Miles Morales, a new adventure from Insomniac Games coming to PlayStation 5."}
      />

      <Carousel
        //ignoreFirstVideo //ignora o video que está no banner da fileira de videos
        category={dadosIniciais.categorias[0]}
      />

      <Carousel
        category={dadosIniciais.categorias[1]}
      />

      <Carousel
        category={dadosIniciais.categorias[2]}
      />      

      <Carousel
        category={dadosIniciais.categorias[3]}
      />      

      <Carousel
        category={dadosIniciais.categorias[4]}
      />      

      <Carousel
        category={dadosIniciais.categorias[5]}
      />       */}

    </PageDefault>
  );
}

export default Home;