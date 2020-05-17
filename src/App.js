import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header"
import Posts from "./components/Posts"
import Post from "./components/Post"
import NotFound from "./components/NotFound"

//need to setup React Router:
//    npm install react-router-dom */
//
import {
    BrowserRouter as Router,
    Switch,
    Route
}    from "react-router-dom";

class App extends Component {
    state = {
      posts: [
          {
            id: 1,
            slug: "hello-react",
            title: "Hello React",
            content: "Lorem."
          },
          {
            id: 2,
            slug: "hello-project",
            title: "Hello Project",
            content: "Tothe."
          },
          {
            id: 3,
            slug: "hello-blog",
            title: "Hello Blog",
            content: "Ipsum."
          },
      ]
    };
    render() {
        return (
           //Application is managed by React Router
           //call <Posts /> lawhen the main root of your site is accessed
        <Router>
            <div className="App">
                <Header />
                <Switch>
                  <Route exact path="/"
                    render={() =>
                    <Posts posts={this.state.posts}
                    />}
                  />
                  <Route path="/post/:postSlug"
                    render={props => {
                      const post =    this.state.posts.find(
                         post => post.slug === props.match.params.postSlug
                        );
                        if (post)
                          return <Post post={post} />;
                        else return <NotFound />;
                    }}
                  />
                 <Route component={NotFound} />

                </Switch>
            </div>
        </Router>
        );
    }
}

export default App;
