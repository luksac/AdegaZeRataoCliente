import React, {Component} from 'react';
import Rato from '../components/images/2.jpg';
import {Link} from 'react-router-dom';
import CervejaService from '../service/cervejaService';
import AuthService from '../service/authService.js';

// import './Criacao.css';


class Alterar extends Component{
    constructor(props) {
        super(props);
        this.state = {
            idCerveja: '',
            idDetalhes: '',
            Descricao: '',
            Categoria: '',
            Tipo: '',
            Foto: '',
            error: 'Erro ao Inserir Registro, Tente Novamente mais tarde.',
            error_status: false,
            sucess_stats: false
        };
    }
    changeHandler = e => {
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandler = e => {
        e.preventDefault();
        var objetoCerveja = JSON.stringify({
            idCerveja: parseInt(this.state.idCerveja, 10),
            idDetalhes: parseInt(this.state.idDetalhes, 10),
            descricao: this.state.Descricao,
            categoria: this.state.Categoria,
            tipo: this.state.Tipo,
            foto: this.state.Foto

        })
        AuthService.Token()
            .then((res) => res)
            .then((response) => {
                console.log('AQUI', response.tokenizer);
                CervejaService.Alterar(objetoCerveja, response.tokenizer)
                    .then((res) => res)
                    .then((response) => {
                        console.log('AQUI', response);
                        if (response.status == 400 || response.status == 0) {
                            this.setState({ error_status: true })
                        } else {
                            this.setState({ sucess_stats: true })
                        }
                    }).catch(error => console.log('CervejaError: ', error));
            }).catch(error => console.log('AuthError: ', error));

    }
    render() {
        if(this.state.sucess_stats)
        {
            alert('Cadastro Atualizado!');
        }

        if(this.state.error_status)
        {
            alert('Dados Inválidos, Tente Novamente!');
            this.setState({error_stats : false});
        }
        return(
            <div>
                <nav className="navbar navbar-expand-md navbar-white bg-white fixed-top">
                    <img src={Rato} alt="raton" className="img-logo"/>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarMainToggler"
                    
                        aria-controls="navbarMainToggler" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    

                    <section className="collapse navbar-collapse" id="navbarMainToggler">
                        <div className="navbar-nav ml-auto pr-3">
                        <a className="nav-item nav-link"><Link to="/Home">Início</Link></a>
                        <a className="nav-item nav-link" href="/">Sair</a>
                        <a className="nav-item nav-link" href="/Alterar">Alterar</a>
                 
                        </div>
              
                    </section>
                </nav>
            
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                





                <div className="wrapper wrapper--w680">
                <div className="card card-2">
                <div className="card-heading"></div>
                <div className="card-body">
                    <h2 className="title">Alterar Cerveja</h2>


                    <form onSubmit={this.submitHandler}>
                        <div className="input-group2">
                            <input className="input--style-2" type="text" placeholder="Codigo Cerveja" name="idCerveja" required value={this.state.idCerveja} onChange={this.changeHandler}></input>
                        </div>

                        <div className="input-group2">
                            <input className="input--style-2" type="text" placeholder="Codigo Detalhes" name="idDetalhes" value={this.state.idDetalhes} onChange={this.changeHandler}></input>
                        </div>


                        <div className="input-group2">
                            <input className="input--style-2" type="text" placeholder="Descrição" name="Descricao" value={this.state.Descricao} onChange={this.changeHandler}></input>
                        </div>

                        <div className="input-group2">
                            <input className="input--style-2" type="text" placeholder="Tipo" name="Tipo" value={this.state.Tipo} onChange={this.changeHandler}></input>
                        </div>

                        <div className="input-group2">
                            <input className="input--style-2" type="text" placeholder="Categoria" name="Categoria" value={this.state.Categoria} onChange={this.changeHandler}></input>
                        </div>


                        <div className="input-group2">
                            <input className="input--style-2" type="text" placeholder="IMAGEM" name="Foto" value={this.state.Foto} onChange={this.changeHandler}></input>
                        </div>

                        <div className="">
                            <button className="button-Criar" type="submit">Cadastrar</button>
                        </div>
                    </form>
                                </div>
                            </div>
                        </div>
                                
            </div>
        );
    }

}

export default Alterar;




