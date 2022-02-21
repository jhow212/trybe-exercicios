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
   }

    botão() {
    console.log('cliquei');
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliquei: estadoAnterior.numeroDeCliquei + 1
    }))
  } 

   botão2() {
    console.log('Não cliquei');
    this.setState((estadoAnterior, _props) => ({
      numeroDeNao: estadoAnterior.numeroDeNao + 1
    }))
  }

   botão3() {
    console.log('Talvez cliquei');
    this.setState((estadoAnterior, _props) => ({
      numeroDeTalvez: estadoAnterior.numeroDeTalvez + 1
    }))
  }

   render() {
     return (
       <div>
         <button onClick={this.botão}>Eu Cliquei {this.state.numeroDeCliquei}!</button>
         <button onClick={this.botão2}>Não Cliquei {this.state.numeroDeNao}!!</button>
         <button onClick={this.botão3}>Talvez Cliqeui {this.state.numeroDeTalvez}!?</button>
       </div>
     )
   }
 }


export default App;
