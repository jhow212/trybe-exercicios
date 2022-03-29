import { combineReducers } from 'redux';
import { createStore } from 'redux';
import reducerCombinado from './reducers/index';
import meuReducer from './meuReducer';
import meuOutroReducer from './meuOutroReducer';
import Redux from './node_modules/redux';

const Redux = require('redux');

const reducerCombinado = combineReducers({
  meuOutroReducer,
  meuReducer,
});

const ESTADO_INICIAL = {
  login: false,
  email: '',
};

const fazerLogin = (email) => ({
  type: 'LOGIN',
  email,
});

const reducer = (state = ESTADO_INICIAL, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        login: !state.login,
        email: action.email,
      };
    default:
      return state;
  }
};

const store = Redux.createStore(reducer);

store.dispatch(fazerLogin('alguem@email.com'));

console.log(store.getState());
