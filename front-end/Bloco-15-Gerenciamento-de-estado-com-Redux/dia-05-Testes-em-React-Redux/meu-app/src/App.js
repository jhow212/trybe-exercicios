// src/App.js
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store/index';
import ButtonClicks from './ButtonClicks';
import NumberClicks from './NumberClicks';

class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <ButtonClicks />
          <NumberClicks />
        </Provider>
      </div>
    );
  }
}
export default App;
