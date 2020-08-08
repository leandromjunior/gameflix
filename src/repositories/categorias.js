import config from '../config';

const URL_CATEGORIES = `${config.url_backend_top}/categorias`; 

function getAllWithVideos() {
    console.log(config.url_backend_top);

        return fetch(`${URL_CATEGORIES}?_embed=videos`)
        .then(async (respostaDoServidor) => {

            if(respostaDoServidor.ok){
            const resposta = await respostaDoServidor.json();
            return resposta;
            }

            throw new Error('Não foi possível coletar os dados :(')
            
        });
}

export default {
    getAllWithVideos,
};