import React, {useState, useEffect} from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';

function CadastroCategoria(infosDoEvento) {
    
    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: '',
    }
    
    const { handleChange, values, clearForm } = useForm(valoresIniciais);
    const [categorias, setCategorias] = useState([]);

        useEffect(() => {
            const url_top = window.location.hostname.includes('localhost')
            ? 'http://localhost:8080/categorias'
            : 'https://gamefliix.herokuapp.com/categorias';
            fetch(url_top)
            .then(async (respostaDoServidor) => {
                const resposta = await respostaDoServidor.json();
                setCategorias([
                    ...resposta,
                ]);
            });
            // setTimeout(() => {
            //   setCategorias([
            //     ...categorias,
            //     {
            //         "id": 1,
            //         "nome": "Star wars",
            //         "descricao": "Galaxia",
            //         "cor": "#cbd1ff"
            //     },
            //     {
            //         "id": 2,
            //         "nome": "Star wars 2",
            //         "descricao": "Galaxia 2",
            //         "cor": "#cbd1ff"
            //     },
            //   ]);
            // }, 4*1000);

        }, []);

    return(
      <PageDefault>
       <h1> Cadastro de Categoria: { values.titulo } </h1>

        <form onSubmit={ function handleSubmit(infosDoEvento) {
            infosDoEvento.preventDefault();
            
            setCategorias([
                ...categorias,
                values
            ]);

           clearForm();
        }}>

        <FormField 
            label = 'Nome da Categoria '
            type = 'text'
            name = 'titulo'
            value = {values.titulo}
            onChange = { handleChange }
        />

<FormField 
            label = 'Descrição '
            type = 'textarea'
            name = 'descricao'
            value = {values.descricao}
            onChange = { handleChange }
        />

        <FormField 
            label = 'Cor '
            type = 'color'
            name = 'cor'
            value = {values.cor}
            onChange = { handleChange }
        />
            
            <Button type="submit">
                Cadastrar
            </Button>
        </form>

        {categorias.length === 0 && (
            <div>
                Loading...
            </div>
        )}

        <ul>
            {categorias.map((categoria) => (
                    <li key={`${categoria.titulo}`}>
                        {categoria.titulo}
                    </li>
            ))}
        </ul>

       <Link to="/">
            Ir para Home
       </Link>
      </PageDefault>
    )}
  export default CadastroCategoria;

  
  
  /*setValue(infosDoEvento.target.getAttribute('name'),
         infosDoEvento.target.value); 
         
                       é o mesmo que 
         
         const {getAttribute, value} = infosDoEvento.target;
        setValue(
            getAttribute('name'),
            value
            ); */


            /* <div>
            <label>
                Cor:
                <input type="color"
                 value={ values.cor }
                 name='cor' 
                 onChange={ handleChange } 
                 />
            </label>
        </div>  
    
                é o mesmo que 

                <FormField 
            label = 'Cor: '
            type = 'color'
            name = 'cor'
            value = {values.cor}
            onChange = { handleChange }
        />
                        */