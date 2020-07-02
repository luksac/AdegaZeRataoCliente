import React, { Component } from 'react';
import Rato from '../components/images/2.jpg';
import AuthService from '../service/authService.js';
import AvaliacaoService from '../service/avaliacoesService.js';
import { ButtonToolbar, Button } from 'react-bootstrap';
import { Modal, Row, Col, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Avaliar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            statusModalSalvo: false,
            statusModalErr: false,
            retorno: false,
            comentario: '',
            avalicao: 1,
            value: null,
            id: this.props.match.params.id,

        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({ [nam]: val });
    }
    handleSubmit(event) {


        const query = new URLSearchParams(this.props.location.search);
        var inBody = {
            idCerveja: parseInt(this.props.match.params.id),
            comentario: this.state.comentario,
            avalicao: parseInt(this.state.avalicao),
        }
        event.preventDefault();
        AuthService.Token()
            .then((res) => res)
            .then((response) => {
                AvaliacaoService.SalvarComentario(inBody, response.tokenizer)
                    .then((res) => res)
                    .then((response) => {
                        let state = this.state;
                        state.retorno = response;

                        this.setState({ statusModalSalvo: true });

                    }).catch(error => console.log('DetalhesError: ', error));
            }).catch(error => console.log('AuthError: ', error));

    }
    render() {
        let statusModalSalvo = () => this.setState({ statusModalSalvo: false });
        let statusModalErr = () => this.setState({ statusModalErr: false });
        return (
            <div>
                <div className="inputdados">
                    <div className=" wrapper wrapper--w680 ">
                        <div className="card card-2">
                            <div className="card-heading"></div>
                            <div className="card-body">
                                <h2 className="title">Avaliar Cerveja</h2>
                                <br></br>
                                <form onSubmit={this.handleSubmit}>

                                    <div className="input-group2">
                                        <label>Suas considerações sobre a cerveja:</label>
                                        <input className="input--style-2" type="text" onChange={this.handleChange} name="comentario" ></input>
                                    </div>

                                    <div className="input-group2">
                                        <label>Avalie a cerveja:  </label><br></br>
                                        <select onChange={this.handleChange} name="avalicao">
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                        </select>
                                    </div>

                                    <div className="">
                                        <ButtonToolbar>
                                            <Button className="button-Criar button-Criar-espace" type="submit" >Salvar</Button>
                                            <Link to={'/Avaliacoes/ ' + this.state.id} ><Button variant='primary' className="button-Criar">Voltar</Button></Link>
                                        </ButtonToolbar>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <Modal show={this.state.statusModalSalvo} onHide={statusModalSalvo}
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
                        <p className="text-cerv-aval">{this.state.retorno.message}</p>
                    </Modal.Body>
                    <Modal.Footer>
                    </Modal.Footer>

                </Modal>
            </div>
        );
    }

}

export default Avaliar;




