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
        <div className='col-md-4'>
        <div className='card mt-4'>
          <div className='card-body'>
            <h3> { todo.title } </h3>
            <span className='badge badge-pill badge-danger ml-2'>
              <p>{todo.priority}</p>
            </span>
          </div>
          <div className='card-body'>
            <p> { todo.description } </p>
          </div>
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

          <div className='container'>
            <div className='row mt-4'>
            { todos }
            </div>
          </div>
          <img src={logo} className="App-logo" alt="logo" />
      </div>
    );
  }
}
export default App;
