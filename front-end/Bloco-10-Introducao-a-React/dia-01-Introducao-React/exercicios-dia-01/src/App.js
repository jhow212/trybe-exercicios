import './App.css';
import React from 'react';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const Compromissos = ['conteudo de ontem', 'exercicios de ontem ', 'conteudo de hoje ', 'exercicios de hoje'];

class App extends React.Component {
  render() {
    return(
      <ul>
      {Compromissos.map((Compromisso) => Task(Compromisso))}
      </ul>
    )
  }
}

export default App;
