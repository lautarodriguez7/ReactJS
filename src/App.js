import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import { todos } from './todos.json';
console.log(todos);
class App extends Component {
  constructor() {
    super(); //Para heredar todos los componentes de React
    this.state = {  //Crea el estado de este componente
      todos
    }
  }
  
  render () { 
    const todos = this.state.todos.map((todo, i) => {
      return (
        <div className='card'>
          <div className='card-body'>
            <h3> { todo.title } </h3>
          </div>
          <div className='card-body'>
          <p> { todo.description } Esto a parte</p>
          </div>
          </div>
          
      )
    })

    return (
      <div className="App">

      <nav className='navbar navbar-dark bg-dark'>
                <a href='app.js' className='text-white'>
                  Tasks
                </a>
          </nav>
          { todos }
          <img src={logo} className="App-logo" alt="logo" />
      </div>
    );
  }
}
export default App;
