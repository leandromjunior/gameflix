import config from '../config';

const URL_VIDEOS = `${config.url_backend_top}/videos`; 


function create(objetoDoVideo) {
    console.log(config.url_backend_top);

        return fetch(`${URL_VIDEOS}?_embed=videos`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(objetoDoVideo)
        })
        .then(async (respostaDoServidor) => {

            if(respostaDoServidor.ok){
            const resposta = await respostaDoServidor.json();
            return resposta;
            }

            throw new Error('Não foi possível cadastrar os dados :(')
            
        });
}

export default {
    create,
};