import Credenciais from '../Configuration/config.json'

const CervejaService = {
    ListaAtivos: function (inHeader) {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Basic " + inHeader);
        var requestOptions = {
            method: 'GET',
            headers: myHeaders
        };
        return fetch(Credenciais.endpoint + "/Cerveja/ativos", requestOptions)
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
            body: inBody
        };
        return fetch(Credenciais.endpoint + "/Cerveja/Salvar", requestOptions)
            .then(response => response.json())
            .then((result) => { return result })
            .catch(error => { return error });
    },
    Alterar: function (inBody,inHeader) {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Basic " + inHeader);
        myHeaders.append( 'Content-Type','application/json' );
        var requestOptions = {
            method: 'PUT',
            headers: myHeaders,
            body: inBody
        };
        return fetch(Credenciais.endpoint + "/Cerveja/Atualizar", requestOptions)
            .then(response => response.json())
            .then((result) => { return result })
            .catch(error => { return error });
    }
};

export default CervejaService;