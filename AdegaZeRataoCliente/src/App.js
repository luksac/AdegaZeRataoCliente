import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Alterar from './pages/Alterar';
import Avaliacoes from './pages/Avaliacoes';
import Criacao from './pages/Criacao';
import Avaliar from './pages/Avaliar';
import Home from './pages/Home';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import CadastroUsuario from './pages/CadastroUsuario';

class App extends Component {
    render() {
        return (
            <div>
                <header>
                    <Navbar />
                </header>
                <main>
                    <Switch>
                        <Route path='/Home' exact component={Home} />
                        <Route path='/Criacao' exact component={Criacao} />
                        <Route path='/Avaliar/:id' exact component={Avaliar} />
                        <Route path='/Alterar' exact component={Alterar} />
                        <Route path='/Avaliacoes/:id' exact component={Avaliacoes} />
                        <Route path='/CadastroUsuario' exact component={CadastroUsuario} />
                        

                    </Switch>
                    
                </main>
                <footer>
                </footer>

            </div>
        );

    };
};

export default App;