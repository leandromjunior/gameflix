const url_backend_top = window.location.hostname.includes('localhost')
? 'http://localhost:8080'
: 'https://gamefliix.herokuapp.com';

export default {
    url_backend_top,
};