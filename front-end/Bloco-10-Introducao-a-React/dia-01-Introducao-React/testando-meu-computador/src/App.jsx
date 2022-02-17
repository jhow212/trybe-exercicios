import React from 'react';
import logo from './logo.svg';
import './App.css';
import Img from './imgmae/mae.jpg'
import Img2 from './imagafilhada/afilhada.jpg'

const imgAFilhada = '/home/joao/trybe/Trybe_exercicios/front-end/Bloco-10-Introducao-a-React/dia-01-Introducao-React/testando-meu-computador/src/imagafilhada/afilhada.jpg'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Confeitarais Nikki</h1>
          <p>Este é meu primeiro App React</p>
          <div className="App-logo">
            <img src={Img} className="App-logo logoT" alt="logo" />
            <h4>Bolo de aniversario para a minha mãe</h4>
          </div>

            <br />

            <hr />

            <br />

          <div className="App-logo">
            <img src={Img2} className="App-logo logoT" alt="logo" />
            <h4>Bolo dde aniversario para a afilhada da minha mãe</h4>
          </div>

          <br />

          <hr />

          <br />
          <h3>
            tentando fazer algo bonito para a confeitaria da BiwBiw

          </h3>

          <footer>
            <p>Siga nas redes sociais</p>
          </footer>
        </header>
      </div>
    );
  }
}

export default App;
