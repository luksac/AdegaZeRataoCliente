import React, { Component } from 'react';
import Rato from './images/2.jpg'
import {Link} from 'react-router-dom';
class Navbar extends Component {

  constructor(props) {
    super(props)
    this.state = {
      photos: []
    }
  }

//   componentDidMount(){
//     fetch('https://jsonplaceholder.typicode.com/photos?albumId=1')
//     .then(response => response.json())
//     .then(json => this.setState({photos: json}))
//   }

  render() {
    return (
      
      <div className="">
        
        <nav className="navbar navbar-expand-md navbar-white bg-white fixed-top">
          {/* <span className="navbar-brand"><i className="fas fa-beer"></i>&nbsp;Adega Ze Ratão</span> */}
          <img src={Rato} alt="raton" className="img-logo"/>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarMainToggler"
          
            aria-controls="navbarMainToggler" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
         

          <section className="collapse navbar-collapse" id="navbarMainToggler">
            <div className="navbar-nav ml-auto pr-3">
              <a className="nav-item nav-link"><Link to ="/"> Início</Link></a>
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
        
        <section className="">
          <ul className="list-unstyled">

            {
              this.state.photos.map(photo => {
                return (
                  <li className="media pt-2">
                    <img src={photo.thumbnailUrl} alt="" className="mr-3" />
                    <div className="media-body">
                      <h5 className="mt-0 mb-1">{photo.title}</h5>
                      <p>Título: {photo.title}</p>
                    </div>
                  </li>
                )
              })
            }


          </ul>
        </section>


        {/* <footer className="footer container col-12 pt-3 footer bg-dark text-light text-center">
          <container className="container col-6 col-md-2 d-flex justify-content-around">
            <i className="fab fa-facebook-square"></i>
            <i className="fab fa-linkedin"></i>
            <i className="fab fa-google-plus-square"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-twitter-square"></i>
          </container>
        </footer> */}
    </div>
    );
  }
}

export default Navbar;