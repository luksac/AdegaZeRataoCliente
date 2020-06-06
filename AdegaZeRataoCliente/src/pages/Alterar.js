import React, {Component} from 'react';
import Rato from '../components/images/2.jpg';
import {Link} from 'react-router-dom';

// import './Criacao.css';






class Alterar extends Component{



    render() {
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
                        <a className="nav-item nav-link"><Link to="/">Início</Link></a>
                        <a className="nav-item nav-link"><Link to="/Avaliar">Avalie</Link></a>
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
                            <input className="input--style-2" type="text" placeholder="Codigo Cerveja" name="idCerveja" ></input>
                        </div>

                        <div className="input-group2">
                            <input className="input--style-2" type="text" placeholder="Codigo Detalhes" name="idDetalhes"  ></input>
                        </div>


                        <div className="input-group2">
                            <input className="input--style-2" type="text" placeholder="Descrição" name="Descricao"  ></input>
                        </div>

                        <div className="input-group2">
                            <input className="input--style-2" type="text" placeholder="Tipo" name="Tipo" ></input>
                        </div>

                        <div className="input-group2">
                            <input className="input--style-2" type="text" placeholder="Categoria" name="Categoria" ></input>
                        </div>


                        <div className="input-group2">
                            <input className="input--style-2" type="text" placeholder="IMAGEM" name="Foto" ></input>
                        </div>

                        <div className="">
                            <button className="button-Criar" type="submit">Atualizar</button>
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




