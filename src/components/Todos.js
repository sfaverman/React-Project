import React from "react";
import { Link } from "react-router-dom";

const Todos = ({ todos, deleteTodo }) => (
  <article className="posts container">
    <h1>Todos in San Diego</h1>
    <Link className="addNew" to="/new-todo">+Add New Todo</Link>
    <ul>
      {todos.length < 1 && <li key="empty">No todos yet!</li>}
      {todos.map(todo => (
        <li key={todo.id}>
          <h2>
            <Link to={`/todo/${todo.slug}`}>{todo.title}</Link>
          </h2>
          <p>
            <Link to={`/update/${todo.slug}`}>Edit</Link>
            {" | "}
            <button
              className="linkLike"
              onClick={e => {
                e.preventDefault();
                deleteTodo(todo);
              }}
            >
              Delete
            </button>
          </p>
        </li>
      ))}
    </ul>
  </article>
);

export default Todos;
