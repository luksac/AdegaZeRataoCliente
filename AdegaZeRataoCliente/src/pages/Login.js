import React, {Component} from 'react';
import {Redirect, Link} from 'react-router-dom';
import '/ULTIMA_VERSAO_ADEGA_FRONT/AdegaZeRataoCliente/AdegaZeRataoCliente/src/Login.css';
import LoginService from '../service/LoginService';
import AuthService from '../service/authService.js';



class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            senha: '',
            sucess_stats : false,
            error_stats : false
            
        };

        this.changeHandler = this.changeHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }

    

    changeHandler(event) {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({ [nam]: val });
    }

    submitHandler(event) {
        event.preventDefault()
        var inBody = {
                    
            email: this.state.email,
            senha: this.state.senha

        }
        AuthService.Token()
            .then((res) => res)
            .then((response) => {
                console.log('AQUI', response.tokenizer);
                LoginService.Valida(inBody, response.tokenizer)
                    .then((res) => res)
                    .then((response) => {
                        console.log('AQUI', response);
                        if (response.status == 400 || response.status == 204) {
                            this.setState({ error_stats: true })
                        } else {
                            if(response.status == 200)
                            {
                                this.setState({ sucess_stats: true })   
                            }
                                                   
                        }
                    }).catch(error => console.log('CervejaError: ', error));
            }).catch(error => console.log('AuthError: ', error));

    }

    render(){
        if(this.state.sucess_stats)
        {
            return <Redirect to='/Home' />
        }

        if(this.state.error_stats)
        {
            alert('Dados Inválidos, Tente Novamente!');
            this.setState({error_stats : false});
        }
        return(

        <div>
                
                    <div className="login">
	                    <h1>Login</h1>
                            <form onSubmit={this.submitHandler}>
    	                        <input type="text"  placeholder="Email" required="required" defaultvalue={this.state.email} name="email" onChange={this.changeHandler}/>
                                <input type="password"  placeholder="Senha" required="required" defaultvalue={this.state.senha} name="senha" onChange={this.changeHandler}/>
                                <button type="submit" class="btn btn-dark btn-block btn-large">Entrar</button>                               
                           </form>
                           <br></br>
                           <Link to='/CadastroUsuario'><button  class="btn btn-dark btn-block btn-large">Cadastrar</button></Link>
                    </div>
                    
        </div>
            

        )
    };
};

export default Login;
