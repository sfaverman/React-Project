import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Quill from "react-quill";
import 'react-quill/dist/quill.snow.css';

class EventForm extends Component {
  state = {
    post: {
      key: this.props.post.key,
      slug: this.props.post.slug,
      title: this.props.post.title,
      date: this.props.post.date,
      content: this.props.post.content
    },
    saved: false
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.post.key !== this.props.post.key) {
      this.setState({
        post: {
          key: this.props.post.key,
          slug: this.props.post.slug,
          title: this.props.post.title,
          date: this.props.post.date,
          content: this.props.post.content
        }
      });
    }
  }
  handlePostForm = e => {
    e.preventDefault();
    if (this.state.post.title) {
      if (this.props.updatePost) {
        this.props.updatePost(this.state.post);
      } else {
        this.props.addNewPost(this.state.post);
      }
      this.setState({ saved: true });
    } else {
      alert("Title required");
    }
  };
  render() {
    if (this.state.saved === true) {
      return <Redirect to="/events" />;
    }
    return (
      <form className="container" onSubmit={this.handlePostForm}>
        <h1>Add a New Event</h1>
        <p>
          <label htmlFor="form-title">Title:</label>
          <br />
          <input
            defaultValue={this.props.title}
            id="form-title"
            value={this.state.post.title}
            onChange={e =>
              this.setState({
                post: {
                  ...this.state.post,
                  title: e.target.value
                }
              })
            }
          />
        </p>
        <p>
          <label htmlFor="form-date">Date:</label>
          <br />
          <input
            defaultValue={this.props.date}
            id="form-date" type="date" required
            value={this.state.post.date}
            onChange={e =>
              this.setState({
                post: {
                  ...this.state.post,
                  date: e.target.value
                }
              })
            }
          />
        </p>
        <p>
          <label htmlFor="form-content">Description:</label>
        </p>
        <Quill
          defaultValue={this.state.post.content}
          onChange={(content, delta, source, editor) => {
            this.setState({
              post: {
                ...this.state.post,
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
export default EventForm;
