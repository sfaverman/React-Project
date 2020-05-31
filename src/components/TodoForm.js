import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Quill from "react-quill";

class TodoForm extends Component {
  state = {
    todo: {
      id: this.props.todo.id,
      slug: this.props.todo.slug,
      title: this.props.todo.title,
      content: this.props.todo.content
    },
    saved: false
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.todo.id !== this.props.todo.id) {
      this.setState({
        todo: {
          id: this.props.todo.id,
          slug: this.props.todo.slug,
          title: this.props.todo.title,
          content: this.props.todo.content
        }
      });
    }
  }
  handleAddNewTodo = e => {
    e.preventDefault();
    if (this.state.todo.title) {
      if (this.props.updateTodo) {
        this.props.updateTodo(this.state.todo);
      } else {
        this.props.addNewTodo(this.state.todo);
      }
      this.setState({ saved: true });
    } else {
      alert("Title required");
    }
  };
  render() {
    if (this.state.saved === true) {
      return <Redirect to="/" />;
    }
    return (
      <form className="container" onSubmit={this.handleAddNewTodo}>
        <h1>Add a New Todo</h1>
        <p>
          <label htmlFor="form-title">Task Name:</label>
          <br />
          <input
            defaultValue={this.props.title}
            id="form-title"
            value={this.state.todo.title}
            onChange={e =>
              this.setState({
                todo: {
                  ...this.state.todo,
                  title: e.target.value
                }
              })
            }
          />
        </p>
        <p>
          <label htmlFor="form-content">Task Description:</label>
        </p>
        <Quill
          defaultValue={this.state.todo.content}
          onChange={(content, delta, source, editor) => {
            this.setState({
              todo: {
                ...this.state.todo,
                content: editor.getContents()
              }
            });
          }}
        />
        <p>
          <button type="submit">Save</button>
        </p>
      </form>
    );
  }
}
export default TodoForm;
