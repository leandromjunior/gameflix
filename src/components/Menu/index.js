import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
//import ButtonLink from './components/ButtonLink';
import Button from '../Button';

function Menu() {
    return(
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="GenericFlix logo" />
            </Link>

            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo Vídeo
            </Button>
        </nav>
    )
}

export default Menu;

//className="Logo" refere-se ao arquivo .css

/* Button as="a" refere-se ao styled-components no index.js\Button. Originalmente era styled.a`, porém com essa
   pequena função, consigo usar a tag button */

   /* Onde era <a> virou Link (react-router-dom) e onde era href virou 'to'. Onde era o 'a' no <Button>
   referenciando o styled-components, virou {Link} */