import React ,{Component} from 'react';
import LoginService from '../service/LoginService';
import AuthService from '../service/authService.js';
import {Redirect, Link} from 'react-router-dom';


class CadastroUsuario extends Component{

    constructor(props) {
        super(props);
        this.state = {
            email : "",
            senha : "",
            erro_status : false,
            sucesso_status : false
        

        };

        this.submitHandler = this.submitHandler.bind(this);
        this.changeHandler = this.changeHandler.bind(this);
    }

    changeHandler(event) {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({ [nam]: val });
    }

    submitHandler(event)
    {
           event.preventDefault();
            var objCadastro = JSON.stringify({          
                email: this.state.email,
                senha: this.state.senha,
   
    
            })
            AuthService.Token()
                .then((res) => res)
                .then((response) => {
                    console.log('AQUI', response.tokenizer);
                    LoginService.Salvar(objCadastro, response.tokenizer)
                        .then((res) => res)
                        .then((response) => {
                            console.log('AQUI', response);
                            if (response.status == 400) {
                                this.setState({ erro_status: true })
                            } else {
                                this.setState({ sucesso_status: true })
                            }
                        }).catch(error => console.log('LoginError: ', error));
                }).catch(error => console.log('AuthError: ', error));
    
        }
    




    render(){
        if(this.state.sucesso_status)
        {
            alert('Usuario Cadastrado com Sucesso');
            return <Redirect to='/' />
            
        }

        if(this.state.erro_status)
        {
            alert('Email já cadastrado, Tente Novamente!');
            this.setState({error_stats : false});
        }
        return(
            <div className="inputdados">
                    <div className=" wrapper wrapper--w680 ">
                        <div className="card card-2">
                            <div className="card-heading"></div>
                            <div className="card-body">
                                <h2 className="title">Cadastro de Usuário.</h2>
                                <br></br>
                                <form onSubmit={this.submitHandler}>
                                    <div className="input-group2">
                                        <input className="input--style-2" type="email" placeholder="Email" name="email" required value={this.state.email} onChange={this.changeHandler}></input>
                                    </div>
                                    <div className="input-group2">
                                        <input className="input--style-2" type="password" placeholder="Senha" name="senha" value={this.state.senha} onChange={this.changeHandler}></input>
                                    </div>

                                    <div className="">
                                        <button className="button-Criar" type="submit">Cadastrar</button>
                                    </div>
                                    <div className="">
                                    <Link to='/'><button  className="button-Criar">Login</button></Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }

    


}

export default CadastroUsuario;