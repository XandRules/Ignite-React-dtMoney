import React from 'react';
import ReactDOM from 'react-dom';
import { createServer } from 'miragejs';
import { App } from './App';

createServer ({
  routes(){
    this.namespace = 'api';

    this.get('/transactions', () => {
      return [
        { 
          id: 1,
          title: 'Salário',
          amount: 8000,
          type: 'deposit',
          category: 'deposit',
          date: '01/11/2021'
        },
        { 
          id: 1,
          title: 'Comida',
          amount: 500,
          type: 'withdraw',
          category: 'Food',
          date: '01/11/2021'
        }
      ]
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


