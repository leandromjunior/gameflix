import React, {useState, useEffect} from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function useForm(valoresIniciais) {
    const [values, setValues] = useState(valoresIniciais);
}

function CadastroCategoria(infosDoEvento) {
    
    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: '',
    }
    
    const { handleChange, values, clearForm } = useForm(valoresIniciais);
    const [categorias, setCategorias] = useState([]);

    function setValue(chave, valor) {

        // chave: nome, descricao, cor (ou seja, chave é dinâmica)
        setValues({
            ...values,
            [chave]: valor,  // nome: 'valor'
        })
    }

    function handleChange(infosDoEvento) { 
        setValue(
         infosDoEvento.target.getAttribute('name'),
         infosDoEvento.target.value
         );
    }

     function clearForm() {
         setValues(valoresIniciais);
     }
         return {
            values,
            handleChange,
            clearForm,
         };
        }

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
       <h1> Cadastro de Categoria: { values.nome } </h1>

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
            name = 'nome'
            value = {values.nome}
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
            
            <Button>
                Cadastrar
            </Button>
        </form>

        {categorias.length === 0 && (
            <div>
                Loading...
            </div>
        )}

        <ul>
            {categorias.map((categoria, indice) => {
                return(
                    <li key={`${categoria}${indice}`}>
                        {categoria.nome}
                    </li>
                )
            })}
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