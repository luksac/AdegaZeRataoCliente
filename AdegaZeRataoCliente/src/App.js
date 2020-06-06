import React, { Component } from 'react';
import Navbar from './components/Navbar';
import { ButtonToolbar, Button } from 'react-bootstrap';
import { Modal, Row, Col, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rato from './components/images/2.jpg';
import AuthService from './service/authService.js';
import CervejaService from './service/cervejaService.js';
import DetalhesService from './service/detalhesService.js';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Detalhes: false,
            Cervejas: [],
            status: false,
            statusModal: false,
            foto: [],

        };
        this.listaDetalhes = this.listaDetalhes.bind(this);
    }

    listaDetalhes(e) {
        var inBody = {
            id: e
        }
        AuthService.Token()
            .then((res) => res)
            .then((response) => {
                //console.log('AQUI', response.tokenizer);
                DetalhesService.SelecionaPorId(inBody, response.tokenizer)
                    .then((res) => res)
                    .then((response) => {
                        //console.log('AQUI', response);
                        let state = this.state;
                        state.Detalhes = response;
                        let fotomodal = 0;
                        this.setState({ Detalhes: response })
                        this.setState({ status: true });
                        this.setState({ statusModal: true });
                        this.setState({ onHide: true });

                    }).catch(error => console.log('DetalhesError: ', error));
            }).catch(error => console.log('AuthError: ', error));

    }
    componentDidMount() {
        AuthService.Token()
            .then((res) => res)
            .then((response) => {
                //console.log('AQUI', response.tokenizer);
                CervejaService.ListaAtivos(response.tokenizer)
                    .then((res) => res)
                    .then((response) => {
                        //console.log('AQUI', response);
                        let state = this.state;
                        state.Cervejas = response;
                        this.setState(state);
                    }).catch(error => console.log('CervejaError: ', error));
            }).catch(error => console.log('AuthError: ', error));
    }

    render() {
        let statusModal = () => this.setState({ statusModal: false });
        return (

            <div>

                <div>

                    <Navbar />

                </div>
                <div className="ajust" >
                    <div className="row col-md-8">
                        {this.state.Cervejas.map((Cerveja) => {
                            return (
                                <div className="col-lg-5">
                                    <a key={Cerveja.idCerveja} className="col-5 col-md-4">
                                        <div className="style-tree">
                                            <img src={Cerveja.foto} className="img-foto" />
                                            <p className="text-cerv">Descrição : {Cerveja.descricao}</p>
                                            <p className="text-cerv">Tipo : {Cerveja.tipo}</p>
                                            <p className="text-cerv">Categoriga : {Cerveja.categoria}</p>
                                            <p className="text-cerv">Detalhes : {Cerveja.idDetalhes}</p>

                                            <ButtonToolbar>
                                                <Button variant='primary' onClick={(e) => this.listaDetalhes(Cerveja.idDetalhes)} className="button">Detalhes
                                        </Button>

                                                {/* { <ModalComponent show={this.state.statusModal}
                                                onHide={statusModal}
                                                Id={this.state.Detalhes.IdDetalhes}>
                                                
                                        </ModalComponent> } */}
                                            </ButtonToolbar>

                                            <Modal show={this.state.statusModal} onHide={statusModal}
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
                                                    <p>
                                                        Descrição Básica
                                                     </p>
                                                    <a key={this.state.Detalhes.idDetalhe}>
                                                        <div>
                                                            {this.state.Cervejas.filter(Cerveja => Cerveja.idDetalhes === this.state.Detalhes.idDetalhe).map((Cerveja => {
                                                                return (
                                                                    (
                                                                        <a key={this.state.Id}>
                                                                            <img src={Cerveja.foto} className="img-foto-modal"></img>
                                                                        </a>
                                                                    ))
                                                            }))}
                                                        </div>
                                                        <p className="text-cerv-modal">Preço : R$  {this.state.Detalhes.precoSugerido}</p>
                                                        <p className="text-cerv-modal">Ranking : {this.state.Detalhes.ranking}</p>
                                                        <p className="text-cerv-modal">Quantidade : {this.state.Detalhes.produtoQuantidade}</p>
                                                    </a>

                                                    <p>
                                                        Descrição:
                                                        <a >
                                                            <p className="text-cerv-modal-descricao">{this.state.Detalhes.descricaoDetalhe}</p>

                                                        </a>
                                                    </p>
                                                </Modal.Body>
                                                <Modal.Footer>
                                                    <Link to="/Avaliar"><Button className="button">Avaliar</Button></Link>
                                                    {/* <Button onClick={statusModal} className="button">Fechar</Button> */}
                                                </Modal.Footer>

                                            </Modal>
                                        </div>




                                    </a>
                                </div>

                            );


                        })}
                    </div>

                </div>
                {/* { <ModalComponent show={this.state.statusModal}
                                                onHide={statusModal}
                                                Id={this.state.Detalhes.IdDetalhes}>
                                                
                                        </ModalComponent> } */}
            </div>



        );

    };
};

export default App;