import React, { Component } from 'react';
import Rato from '../components/images/2.jpg';
import { Link } from 'react-router-dom';
import CervejaService from '../service/cervejaService.js';
import DetalhesService from '../service/detalhesService.js';
import AuthService from '../service/authService.js';
import { ButtonToolbar, Button } from 'react-bootstrap';
import { Modal, Row, Col, Form } from 'react-bootstrap';

class Criacao extends Component {
    constructor(props) {
        super(props);
        this.state = {
            idCerveja: '',
            Descricao: '',
            Detalhes: '',
            Categoria: '',
            Tipo: '',
            Preco: '',
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
            idDetalhes: parseInt(this.state.idCerveja, 10),
            descricao: this.state.Descricao,
            categoria: this.state.Categoria,
            tipo: this.state.Tipo,
            foto: this.state.Foto

        })
        var objetoDetalhes = JSON.stringify({
            idDetalhes: parseInt(this.state.idCerveja, 10),
            Ranking: parseInt(this.state.idCerveja, 10),
            ProdutoQuantidade: 20,
            PrecoSugerido: parseFloat(this.state.Preco),
            DescricaoDetalhes: this.state.Detalhes

        })
        AuthService.Token()
            .then((res) => res)
            .then((response) => {
                console.log('AQUI', response.tokenizer);
                this.setState({ sucess_stats: true })
                DetalhesService.Salvar(objetoDetalhes, response.tokenizer)
                    .then((res2) => res2)
                    .then((response2) => {
                        console.log('AQUI', response2);
                        if (response2.status == 400) {
                            this.setState({ error_status: true })
                        } else {
                            this.setState({ sucess_stats: true })
                            CervejaService.Salvar(objetoCerveja, response.tokenizer)
                                .then((res) => res)
                                .then((response) => {
                                    console.log('AQUI', response);
                                    if (response.status == 400) {
                                        this.setState({ error_status: true })
                                    } else {

                                    }
                                }).catch(error => console.log('CervejaError: ', error));
                        }
                    }).catch(error => console.log('DetalhesError: ', error));

            }).catch(error => console.log('AuthError: ', error));

    }
    render() {
        const { Descricao, Tipo, Categoria, error_status } = this.state
        return (

            <div>
                <nav className="navbar navbar-expand-md navbar-white bg-white fixed-top">
                    <img src={Rato} alt="raton" className="img-logo" />
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarMainToggler"

                        aria-controls="navbarMainToggler" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>


                    <section className="collapse navbar-collapse" id="navbarMainToggler">
                        <div className="navbar-nav ml-auto pr-3">
                            <a className="nav-item nav-link"><Link to="/">Início</Link></a>
                            <a className="nav-item nav-link"><Link to="/Alterar">Alterar</Link></a>
                            <a className="nav-item nav-link" href="#">Login</a>
                            <a className="nav-item nav-link"><Link to="/Criacao">Cadastrar</Link></a>
                        </div>
                        <form className="form-inline">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">@</span>
                                </div>
                                <input type="text" className="form-control mr-1" placeholder="Usuário" />
                            </div>
                            <button className="btn btn-outline-success">Login</button>
                        </form>
                    </section>
                </nav>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <div class="">
                    {
                        this.state.sucess_stats ?
                            <div class="alert alert-success alert-dismissible" id="mensagem-erro">
                                <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
                                <strong>Erro!</strong> Registro Criado Com Sucesso!
                             </div>
                            :
                            <div>
                            </div>
                    }
                    {
                        this.state.error_status ?
                            <div class="alert alert-danger alert-dismissible" id="mensagem-erro">
                                <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
                                <strong>Erro!</strong> Tente Novamente Mais Tarde ou Entre em Contato com o Suporte.
                            </div>
                            :
                            <div>
                            </div>
                    }
                    <div className="wrapper wrapper--w680">
                        <div className="card card-2">
                            <div className="card-heading"></div>
                            <div className="card-body">
                                <h2 className="title">Nova Cerveja</h2>
                                <form onSubmit={this.submitHandler}>




                                    <div className="input-group2">
                                        <input className="input--style-2" type="text" placeholder="Codigo Cerveja" name="idCerveja" required value={this.state.idCerveja} onChange={this.changeHandler}></input>
                                    </div>

                                    <div className="input-group2">
                                        <input className="input--style-2" type="text" placeholder="Nome da Cerveja" name="Descricao" value={this.state.Descricao} onChange={this.changeHandler}></input>
                                    </div>

                                    <div className="input-group2">
                                        <input className="input--style-2" type="text" placeholder="Detalhes" name="Detalhes" value={this.state.Detalhes} onChange={this.changeHandler}></input>
                                    </div>

                                    <div className="input-group2">
                                        <input className="input--style-2" type="text" placeholder="Tipo" name="Tipo" value={this.state.Tipo} onChange={this.changeHandler}></input>
                                    </div>

                                    <div className="input-group2">
                                        {/* <input className="input--style-2" type="text" placeholder="Categoria" name="Categoria" value={this.state.Categoria} onChange={this.changeHandler}></input> */}
                                        <label>Categoria: </label><br></br>
                                        <select onChange={this.changeHandler} value={this.state.Categoria} name="Categoria">
                                            <option value="Não Maltada">Não Popular</option>
                                            <option value="Maltada">Popular</option>
                                        </select>
                                    </div>

                                    <div className="input-group2">
                                        <input className="input--style-2" type="text" placeholder="Preço Sugerido" name="Preco" value={this.state.Preco} onChange={this.changeHandler}></input>
                                    </div>

                                    <div className="input-group2">
                                        <input className="input--style-2" type="text" placeholder="IMAGEM" name="Foto" value={this.state.Foto} onChange={this.changeHandler}></input>
                                    </div>

                                    <div className="">
                                        <ButtonToolbar>
                                            <Button className="button-Criar button-Criar-espace" type="submit" >Salvar</Button>
                                            <Link to={'/'} ><Button variant='primary' className="button-Criar">Voltar</Button></Link>
                                        </ButtonToolbar>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Criacao;