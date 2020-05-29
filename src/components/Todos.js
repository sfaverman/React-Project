import React, { Component } from 'react';

class Todos extends Component {
    state = {
    todos: []
  }
  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then((data) => {
      this.setState({ todos: data })
      console.log(this.state.todos)
    })
    .catch(console.log)
  }

 render() {

    return (
       <div className="container">
        <div className="col-xs-12">
        <h2>Todos in San Diego</h2>
        {this.state.todos.map((todo) => (
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{todo.title}</h5>
              <h6 className="card-subtitle mb-2 text-muted">
              { todo.completed &&
                <span>
                Completed
                </span>
              }
              { !todo.completed &&
                <span>
                  Pending
                </span>
              }
              </h6>
            </div>
          </div>
        ))}
        </div>
       </div>
    );
  }
}

export default Todos;
