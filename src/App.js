import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import firebase from "./firebase";
import SimpleStorage from "react-simple-storage";

import Home from "./components/Home";
import Header from "./components/Header";
import Message from "./components/Message";
import Events from "./components/Events";
import Event from "./components/Event";
import EventForm from "./components/EventForm";
import Todos from "./components/Todos";
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";
import Attractions from "./components/Attractions";
import Weather from "./components/Weather";
import Shopping from "./components/Shopping";
import Login from "./components/Login";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";

import "./App.css";

class App extends Component {
  state = {
    isAuthenticated: false,
    posts: [],
    todos: [],
    message: null
   };
  onLogin = (email, password) => {
    console.log(email, password);
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => {
        this.setState({ isAuthenticated: true });
      })
      .catch(error => console.error(error));
  };
  onLogout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        this.setState({ isAuthenticated: false });
      })
      .catch(error => console.error(error));
  };
  getNewSlugFromTitle = title =>
    encodeURIComponent(
      title
        .toLowerCase()
        .split(" ")
        .join("-")
    );
  addNewPost = post => {
    const postsRef = firebase.database().ref("posts");
    post.slug = this.getNewSlugFromTitle(post.title);
    delete post.key;
    postsRef.push(post);
    this.setState({
      message: "saved"
    });
    setTimeout(() => {
      this.setState({ message: null });
    }, 1600);
  };
  updatePost = post => {
    const postRef = firebase.database().ref("posts/" + post.key);
    postRef.update({
      slug: this.getNewSlugFromTitle(post.title),
      date: post.date,
      title: post.title,
      content: post.content
    });
    this.setState({ message: "updated" });
    setTimeout(() => {
      this.setState({ message: null });
    }, 1600);
  };
  deletePost = post => {
    if (window.confirm("Delete this post?")) {
      const postRef = firebase.database().ref("posts/" + post.key);
      postRef.remove();
      this.setState({ message: "deleted" });
      setTimeout(() => {
        this.setState({ message: null });
      }, 1600);
    }
  };
  addNewTodo = todo => {
    todo.id = this.state.todos.length + 1;
    todo.slug = this.getNewSlugFromTitle(todo.title);
    this.setState({
      todos: [...this.state.todos, todo],
      message: "saved"
    });
    setTimeout(() => {
      this.setState({ message: null });
    }, 1600);
  };
  updateTodo = todo => {
    todo.slug = this.getNewSlugFromTitle(todo.title);
    const index = this.state.todos.findIndex(p => p.id === todo.id);
    const todos = this.state.todos
      .slice(0, index)
      .concat(this.state.todos.slice(index + 1));
    const newTodos = [...todos, todo].sort((a, b) => a.id - b.id);
    this.setState({ todos: newTodos, message: "updated" });
    setTimeout(() => {
      this.setState({ message: null });
    }, 1600);
  };
  deleteTodo = todo => {
    if (window.confirm("Delete this todo?")) {
      const index = this.state.todos.findIndex(p => p.id === todo.id);
      const todos = this.state.todos
        .slice(0, index)
        .concat(this.state.todos.slice(index + 1));
      this.setState({ todos, message: "deleted" });
      setTimeout(() => {
        this.setState({ message: null });
      }, 1600);
    }
  };

  componentDidMount() {
    const postsRef = firebase.database().ref("posts");
    postsRef.on("value", snapshot => {
      const posts = snapshot.val();
      const newStatePosts = [];
      for (let post in posts) {
        newStatePosts.push({
          key: post,
          slug: posts[post].slug,
          title: posts[post].title,
          date: posts[post].date,
          content: posts[post].content
        });
      }
      this.setState({ posts: newStatePosts });
    });
  }
  render() {
    return (
      <Router>
        <div className="App">
          <SimpleStorage parent={this} />
          <Header
            isAuthenticated={this.state.isAuthenticated}
            onLogout={this.onLogout}
          />
          {this.state.message && <Message type={this.state.message} />}
          <Switch>
            <Route exact
              path="/" component={Home} />
            <Route exact
              path="/home" component={Home} />
            <Route exact
              path="/attractions" component={Attractions} />
            <Route
              path="/events"
              render={() => (
                <Events
                  isAuthenticated={this.state.isAuthenticated}
                  posts={this.state.posts}
                  deletePost={this.deletePost}
                />
              )}
            />
            <Route exact
              path="/weather" component={Weather} />
            <Route exact
              path="/shopping" component={Shopping} />
            <Route
            path="/event/:postSlug"
              render={props => {
                const post = this.state.posts.find(
                  post => post.slug === props.match.params.postSlug
                );
                if (post) {
                  return <Event post={post} />;
                } else {
                  return <Redirect to="/events" />;
                }
              }}
            />
            <Route
              exact
              path="/todos"
              render={() => (
                <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
              )}
            />

            <Route
              exact
              path="/login"
              render={() =>
                !this.state.isAuthenticated ? (
                  <Login onLogin={this.onLogin} />
                ) : (
                  <Redirect to="/events" />
                )
              }
            />

            <Route
              exact
              path="/new-event"
              render={() =>
                this.state.isAuthenticated ? (
                  <EventForm
                    addNewPost={this.addNewPost}
                    post={{ key: null, slug: "", title: "", date: "", content: "" }}
                  />
                ) : (
                  <Redirect to="/events" />
                )
              }
            />
            <Route
              path="/edit/:postSlug"
              render={props => {
                const post = this.state.posts.find(
                  post => post.slug === props.match.params.postSlug
                );
                if (post && this.state.isAuthenticated) {
                  return <EventForm updatePost={this.updatePost} post={post} />;
                } else {
                  return <Redirect to="/events" />;
                }
              }}
            />

            <Route
              path="/todo/:todoSlug"
              render={props => {
                const todo = this.state.todos.find(
                  todo => todo.slug === props.match.params.todoSlug
                );
                if (todo) {
                  return <Todo todo={todo} />;
                } else {
                  return <Redirect to="/todos" />;
                }
              }}
            />
            <Route
              exact
              path="/new-todo"
              render={() => (
                <TodoForm
                  addNewTodo={this.addNewTodo}
                  todo={{ id: 0, slug: "", title: "", content: "" }}
                />
              )}
            />
            <Route
              exact
              path="/new-todo-title/:pathTitle"
                render={props => {
                const newTitle = props.match.params.pathTitle;
                console.log("newTitle=",newTitle);
              return <TodoForm
                  addNewTodo={this.addNewTodo}
                  todo={{ id: 0, slug: "", title: newTitle, content: "" }}
                />;
              }}
            />
            <Route
              path="/update/:todoSlug"
              render={props => {
                const todo = this.state.todos.find(
                  todo => todo.slug === props.match.params.todoSlug
                );
                if (todo) {
                  return <TodoForm updateTodo={this.updateTodo} todo={todo} />;
                } else {
                  return <Redirect to="/todos" />;
                }
              }}
            />
            <Route path='/hotels' component={() => {
            window.location.href = 'https://www.trivago.ca/san-diego-34307/hotel';  return null; }}
            />
            <Route path='/restaurants' component={() => {
            window.location.href = 'https://www.opentable.com/san-diego-restaurants';  return null; }}
            />
            <Route path='/beaches' component={() => {
            window.location.href = 'https://www.thecrazytourist.com/15-best-beaches-san-diego/';  return null; }}
            />

           <Route component={NotFound} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
