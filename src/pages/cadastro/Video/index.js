import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForm';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';

function CadastroVideo() {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const categoryTitles = categorias.map(({ titulo }) => titulo);
  const { handleChange, values } = useForm({
    titulo: '',
    url: '',
    categoria: '',
  });

  useEffect(() => {
    categoriasRepository
      .getAll()
      .then((categoriasFromServer) => {
        setCategorias(categoriasFromServer);
      });
  }, []); // [] -> para nao mandar várias requisições p/ o servidor

  return (
    <PageDefault>
      <h1>Adicionar Video</h1>

      <form onSubmit={(event) => {
        event.preventDefault();
        //alert('Video cadastrado com Sucesso');

       const categoriaEscolhida = categorias.find((categoria)=>{
          return categoria.titulo === values.categoria;
       });

        videosRepository.create({
          titulo: values.titulo,
          url: values.url,
          categoriaId: categoriaEscolhida.id,
        })
            .then(() => {
            console.log('cadastrou com sucesso!');
            history.push('/');
          });

        history.push('/'); // empurrar a url da página inicial, ao cadastrar um novo vídeo
      }}
      >
        <FormField
          label="Titulo do Video"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          label="URL"
          name="url"
          value={values.url}
          onChange={handleChange}
        />

        <FormField
          label="Categoria"
          name="categoria"
          value={values.categoria}
          onChange={handleChange}
          suggestions={categoryTitles} //listar categorias no campo
        />

        <Button type="submit">
          Adicionar
        </Button>
      </form>

      <Link to="/cadastro/categoria">
        <br />
        Cadastrar Categoria
      </Link>

    </PageDefault>
  );
}

export default CadastroVideo;