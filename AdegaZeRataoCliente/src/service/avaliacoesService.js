import Credenciais from '../Configuration/config.json'

const AvaliacaoService = {
    SelecionaPorId: function (inBody,inHeader) {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Basic " + inHeader);
        var requestOptions = {
            method: 'GET',
            headers: myHeaders
        };
        return fetch(Credenciais.endpoint + "/Avaliacao/SelecionaPorId/" + inBody.id, requestOptions)
            .then(response => response.json())
            .then((result) => { return result })
            .catch(error => { return error });
    },
    SalvarComentario: function (inBody,inHeader) {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Basic " + inHeader);
        myHeaders.append("Content-Type", "application/json");
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify(inBody)
        };
        return fetch(Credenciais.endpoint + "/Avaliacao/Salvar", requestOptions)
            .then(response => response.json())
            .then((result) => { return result })
            .catch(error => { return error });
    },
};

export default AvaliacaoService;