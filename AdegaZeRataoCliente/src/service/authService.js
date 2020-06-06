import moment from "moment";
import Credenciais from '../Configuration/config.json'

const AuthService = {
    Token: function () {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        var data = moment().format().toLocaleString();
        var raw = JSON.stringify({ "UserName": Credenciais.UserName, "Senha": Credenciais.Senha, "Data": data });
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };
        return fetch(Credenciais.endpoint + "/Autenticador/Token", requestOptions)
            .then(response => response.json())
            .then((result) => { return result })
            .catch(error => { return error });
    }
};

export default AuthService;
