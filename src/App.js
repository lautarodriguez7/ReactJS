import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

//data
import { todos } from './todos.json';

//subcomponentes
import { todo } from './components/TodoForm';
console.log(todos);
class App extends Component {
  constructor() {
    super(); //Para heredar todos los componentes de React
    this.state = {  //Crea el estado de este componente
      todos
    }
  }
  //LINEA 42 Nos permite ver la cantidad de listas automaticamente del todo
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
            <p> {todo.responsible} </p>
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
                  <span className='badge badge-pill badge-light ml-2'>
                    {this.state.todos.length}  
                  </span>
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
