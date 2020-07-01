import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import { ButtonToolbar, Button } from 'react-bootstrap';
import { Modal, Row, Col, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rato from '../components/images/2.jpg';
import AuthService from '../service/authService.js';
import AvaliacaoService from '../service/avaliacoesService.js';

class Avaliacoes extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Avalicacoes: [],
            statusVazio: false,
            Cerveja: 0,
            id: this.props.match.params.id,
        };
        
    }
    componentDidMount() {
        var inBody = {
            id: this.props.match.params.id
        }
        AuthService.Token()
            .then((res) => res)
            .then((response) => {
                AvaliacaoService.SelecionaPorId(inBody, response.tokenizer)
                    .then((res) => res)
                    .then((response) => {
                        let state = this.state;
                        state.Avalicacoes = response;
                        if (state.Avalicacoes.length == 0) {
                            this.setState({ statusVazio: true });
                        }
                        this.setState({ Avalicacoes: response })
                        this.setState({ Cerveja: this.Avalicacoes.idCerveja })

                    }).catch(error => console.log('DetalhesError: ', error));
            }).catch(error => console.log('AuthError: ', error));
    }

    render() {
        let statusVazio = () => this.setState({ statusVazio: false });
        return (
            <div>
                <div>
                    <Navbar />
                </div>
                <div className="ajust" >
                    <div className="row col-md-12">
                        {this.state.Avalicacoes.map((Avaliar) => {
                            return (
                                <div className="col-md-6 alinh">
                                    <a key={Avaliar.idAvaliacao} className="col-5 col-md-4">
                                        <div className="style-tree">
                                            <p className="text-cerv">Comentarios : {Avaliar.comentario}</p>
                                            <p className="text-cerv">Avalicao : {Avaliar.avalicao}</p>
                                            <ButtonToolbar>
                                            </ButtonToolbar>
                                        </div>
                                    </a>
                                </div>
                            );
                        })}
                    </div>
                    <ButtonToolbar className="Toolbar-avaliacoes">
                        <Link to='/'><Button variant='primary' className="button button-avaliacoes button-avaliacoes-voltar">Voltar</Button></Link>
                        <Link to={'/Avaliar/' + this.state.id}><Button variant='primary' className="button button-avaliacoes">Avalie esta Cerveja</Button></Link>
                    </ButtonToolbar>
                    <Modal show={this.state.statusVazio} onHide={statusVazio}
                        {...this.props}
                        size="lg"
                        aria-labelledby="contained-modal-title-vcenter"
                        centered
                    >
                        <Modal.Header closeButton>
                            <Modal.Title id="contained-modal-title-vcenter">
                                <img src={Rato} alt="raton" className="img-logo-modal" />
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body className="txt-alinh">
                            <p className="text-cerv-aval">Não há avaliações...</p>
                        </Modal.Body>
                        <Modal.Footer>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
        );

    };
};

export default Avaliacoes;