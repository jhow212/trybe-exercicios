import React from 'react';
import './App.css';

import Header from './componentes/Header';
import Content from './componentes/Content';
import Footer from './componentes/Footer';

class App extends React.Component {
  render() {
    return(
      <div>
        <Header />
        <Content />
        <Footer />
      </div>
    )
  } 
}

export default App;
