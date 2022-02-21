import React from 'react';


////Para fixar 1 e 2
// function botão() {
//   console.log('cliquei'); 
// } 

// function botão2() {
//   console.log('Não cliquei'); 
// }

// function botão3() {
//   console.log('Talvez cliquei'); 
// }

// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <button onClick={botão}>Click</button>
//         <button onClick={botão2}>Click</button>
//         <button onClick={botão3}>Click</button>
//       </div>
//     )
//   }
// }

// Para fixar 3 e 4
//  class App extends React.Component {

//    constructor() {
//      super()
//      this.botão = this.botão.bind(this)
//      this.botão2 = this.botão2.bind(this)
//      this.botão3 = this.botão3.bind(this)
//    }

//     botão() {
//     console.log('cliquei');
//     console.log(this);
//   } 

//    botão2() {
//     console.log('Não cliquei');
//     console.log(this);
//   }

//    botão3() {
//     console.log('Talvez cliquei');
//     console.log(this);
//   }

//    render() {
//      return (
//        <div>
//          <button onClick={this.botão}>Click</button>
//          <button onClick={this.botão2}>Click</button>
//          <button onClick={this.botão3}>Click</button>
//        </div>
//      )
//    }
//  }

 class App extends React.Component {

   constructor() {
     super()
     this.state = {
       numeroDeCliquei: 0,
       numeroDeNao: 0,
       numeroDeTalvez: 0
     }

     this.botão = this.botão.bind(this)
     this.botão2 = this.botão2.bind(this)
     this.botão3 = this.botão3.bind(this)
     this.mudarDeCor = this.mudarDeCor.bind(this)
     this.mudarDeCor2 = this.mudarDeCor2.bind(this)
     this.mudarDeCor3 = this.mudarDeCor3.bind(this)
   }

    botão() {
    console.log('cliquei');
    this.setState((estadoAnterior) => ({
      numeroDeCliquei: estadoAnterior.numeroDeCliquei + 1
    }), () => {
      console.log(`Botão1 ${this.mudarDeCor(this.state.numeroDeCliquei)}`);
    })
  } 

   botão2() {
    console.log('Não cliquei');
    this.setState((estadoAnterior) => ({
      numeroDeNao: estadoAnterior.numeroDeNao + 1
    }), () => {
      console.log(`Botão2 ${this.mudarDeCor2(this.state.numeroDeNao)}`);
    })
  }

   botão3() {
    console.log('Talvez cliquei');
    this.setState((estadoAnterior) => ({
      numeroDeTalvez: estadoAnterior.numeroDeTalvez + 1 
    }), () => {
      console.log(`Botão3 ${this.mudarDeCor3(this.state.numeroDeTalvez)}`);
    })
  }

  mudarDeCor(num) {
    return num % 2 === 0 ? 'green' : 'red';
  }

  mudarDeCor2(num) {
    return num % 2 === 0 ? 'blue' : 'purple';
  }

  mudarDeCor3(num) {
    return num % 2 === 0 ? 'yellow' : 'violet';
  }

   render() {
     const { numeroDeCliquei, numeroDeNao, numeroDeTalvez } = this.state;
     return (
       <div>
         <button onClick={this.botão } style={{backgroundColor: this.mudarDeCor(numeroDeCliquei)}}>Eu Cliquei {numeroDeCliquei}!</button>
         <button onClick={this.botão2} style={{backgroundColor: this.mudarDeCor2(numeroDeNao)}}>Não Cliquei {numeroDeNao}!!</button>
         <button onClick={this.botão3} style={{backgroundColor: this.mudarDeCor3(numeroDeTalvez)}}>Talvez Cliqeui {numeroDeTalvez}!?</button>
       </div>
     )
   }
 }


export default App;
