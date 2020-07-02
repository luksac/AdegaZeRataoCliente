import Credenciais from '../Configuration/config.json'

const LoginService = {
    ListaAtivos: function (inHeader) {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Basic " + inHeader);
        var requestOptions = {
            method: 'GET',
            headers: myHeaders
        };
        return fetch(Credenciais.endpoint + "/Usuarios/ativos", requestOptions)
            .then(response => response.json())
            .then((result) => { return result })
            .catch(error => { return error });
    },
    Salvar: function (inBody,inHeader) {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Basic " + inHeader);
        myHeaders.append( 'Content-Type','application/json' );
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body : inBody
            
        };
        return fetch(Credenciais.endpoint + "/Usuario/Salvar", requestOptions)
            .then(response => response.json())
            .then((result) => { return result })
            .catch(error => { return error });
    },
    Valida: function (inBody,inHeader) {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Basic " + inHeader);
        myHeaders.append( 'Content-Type','application/json' );
        console.log('vish' + inBody);
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body:  JSON.stringify(inBody)
        };
        return fetch(Credenciais.endpoint + "/Usuario/Valida", requestOptions)
            .then(response => response.json())
            .then((result) => { return result })
            .catch(error => { return error });
    }
};

export default LoginService;